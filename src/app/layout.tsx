import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Terminal from "@/components/layout/Terminal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Crawford - Developer Portfolio",
  description:
    "Full-stack developer specializing in modern web applications, trading algorithms, and innovative digital solutions.",
  keywords: "Joseph Crawford, Joey Crawford, developer, portfolio, web development, React, Next.js, TypeScript",
  authors: [{ name: "Joseph Crawford" }],
  openGraph: {
    title: "Joseph Crawford - Developer Portfolio",
    description: "Full-stack developer specializing in modern web applications",
    url: "https://josephcrawford.net",
    siteName: "Joseph Crawford Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-metal-black min-h-screen">
        <Navigation />
        <main className="relative pt-16">{children}</main>
        <Terminal />
      </body>
    </html>
  );
}
