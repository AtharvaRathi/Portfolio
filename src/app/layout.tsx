import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva | Portfolio",
  description: "Personal portfolio and AI assistant for Atharva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} text-zinc-900 bg-[#fafafa] antialiased selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden min-h-screen`}>
        {/* Vignette effect */}
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(183,102,154,0.15)] rounded-[50px] m-4 border border-zinc-200/50" />
        </div>
        {children}
      </body>
    </html>
  );
}
