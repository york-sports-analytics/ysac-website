import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import {
  Plus_Jakarta_Sans,
} from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "York Sports Analytics Club",
  description:
    "Data-driven sports intelligence at York University. Explore analytics, join our community.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-[#1a1a1a] text-white`}>
        {children}
      </body>
    </html>
  );
}
