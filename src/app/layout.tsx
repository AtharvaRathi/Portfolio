import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { StudioShell } from "@/components/studio/shell";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://atharvarathi.com"),
  title: {
    default: "Atharva Rathi | AI, Computer Vision & Backend Engineer",
    template: "%s | Atharva Rathi",
  },
  description: portfolioData.resume.summary,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Atharva Rathi — Engineering intelligence into useful things",
    description: portfolioData.resume.summary,
    url: "https://atharvarathi.com",
    type: "website",
    images: [
      { url: "/avatar.png", width: 1024, height: 1024, alt: "Atharva Rathi" },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StudioShell>{children}</StudioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
