import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Works",
  description: "A one stop-shop for all your digital service needs",
  themeColor: "#050d1d"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050d1d" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
