import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Abdou | Frontend Engineer",
  description: "Modern portfolio built with Next.js, Framer Motion, and GSAP."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-bg text-text antialiased`}>
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
