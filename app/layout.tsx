// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "IndonorTech | Enterprise Technology Experts",
  description:
    "We build enterprise-ready applications, cloud solutions, and AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
  <body className="bg-background text-foreground">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  </body>
</html>
  );
}