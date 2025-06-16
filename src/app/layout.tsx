// app/layout.tsx

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

// Load Roboto Mono font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Finosell Dashboard",
  description: "A modern financial dashboard interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
