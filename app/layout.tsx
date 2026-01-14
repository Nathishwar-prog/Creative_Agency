import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { NavBarComp } from "@/components/Navbar";
import { CreativeLogo } from "@/components/creative-logo";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MousePointerClick } from "lucide-react";
import Link from "next/link";
import SiteIntroWrapper from "@/components/site-intro-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Agency",
  description: "Creative Agency - A digital agency that helps businesses grow through innovative design and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteIntroWrapper />
        <Providers>
          <div className="fixed top-8 right-8 z-50 pointer-events-auto">
            <ShinyButton className="mt-1 mx-auto max-w-2xl text-center text-lg text-muted-foreground md:text-xl pointer-events-auto">Start a Project <MousePointerClick className="ms-2" /></ShinyButton>
          </div>

          <CreativeLogo />
          <NavBarComp />
          {children}

        </Providers>
      </body>
    </html>
  );
}
