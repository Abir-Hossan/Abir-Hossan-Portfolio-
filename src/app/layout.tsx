import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Abir Hossan | Full-Stack Developer",
  description: "Abir Hossan builds modern, scalable, user-centered web applications with React, Next.js, TypeScript, and thoughtful product design.",
  applicationName: "Abir Hossan Portfolio",
  openGraph: { title: "Abir Hossan | Full-Stack Developer", description: "Building modern web applications with real-world impact.", type: "website" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0B0920", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
