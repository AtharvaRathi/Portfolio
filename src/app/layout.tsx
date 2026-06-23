import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${GeistSans.className} text-zinc-900 dark:text-zinc-100 bg-[#fafafa] dark:bg-zinc-950 antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 overflow-x-hidden min-h-screen transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Vignette effect */}
          <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(183,102,154,0.15)] dark:shadow-[inset_0_0_100px_rgba(183,102,154,0.05)] rounded-[30px] sm:rounded-[50px] m-2 sm:m-4 border border-zinc-200/50 dark:border-zinc-800/50" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
