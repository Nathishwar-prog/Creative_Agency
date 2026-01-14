import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                {/* Geometric "C" Logo */}
                <svg viewBox="0 0 32 32" width="32" height="32" style={{ overflow: 'visible' }}>
                    {/* Outer Ring Segment */}
                    <path
                        d="M 22 10 C 22 10 10 10 10 16 C 10 22 22 22 22 22"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    {/* Cyan Dot Accent */}
                    <circle cx="18" cy="16" r="2" fill="#22d3ee" />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
