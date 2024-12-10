import "./globals.css";
import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar/Navbar";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const russo = Russo_One({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kepler",
  icons: {
    icon: `./favicon.ico`,
    apple: `./apple-touch-icon.png`,
    shortcut: `./apple-touch-icon.png`,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
