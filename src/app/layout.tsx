// app/layout.tsx

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Modern finance for borderless businesses",
  description: "Comprehensive financial management platform for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}