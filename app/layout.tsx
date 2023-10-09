import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T. Rowe Price - Scavenger Hunt",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex">
          <img width="50px" src="/trusty-logo.svg" />
        </header>
        {children}
      </body>
    </html>
  );
}
