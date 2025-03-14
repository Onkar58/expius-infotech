import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import jQuery from "jquery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expius Infotech | Connecting Right People with Right Opportunities",
  description:
    "Full-service staffing and talent management solutions to help clients fulfill their talent hunt.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
