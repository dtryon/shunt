import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

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
        <header className="flex items-center bg-sky-950">
          <Image
            className="flex-none"
            width={60}
            height={60}
            src="/trusty-logo.svg"
            alt="logo"
          />
          <section className="flex-auto">
            <h2 className="pl-2 text-slate-300">October Scavenger Hunt</h2>
          </section>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:flex">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
