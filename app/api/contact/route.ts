import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, projectType, details } = body;

        // Simple validation
        if (!email || !projectType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        // NOTE: 'onboarding@resend.dev' is the test sender for new accounts.
        // Once you verify a domain, you can change this to 'hello@yourdomain.com'
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['nathishwar2006@gmail.com'], // The email user mentioned in the code
            subject: `New Project Inquiry: ${projectType}`,
            html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Type:</strong> ${projectType}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Details:</strong></p>
        <p>${details || 'No details provided.'}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Contact form error details:', error);
        // Log specific Resend error if available
        if (typeof error === 'object' && error !== null && 'response' in error) {
            console.error('Resend API Error Response:', (error as any).response?.data);
        }
        return NextResponse.json(
            { error: 'Failed to send message', details: (error as Error).message },
            { status: 500 }
        );
    }
}
