// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Geist } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "IndonorTech | Norway-India Technology Consultants",
  description:
    "Consulting and engineering services from Norway and India for digital platforms, cloud, and AI delivery.",
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