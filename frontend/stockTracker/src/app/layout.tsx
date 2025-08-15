import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@heroui/button";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-serif-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-serif-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Tracker",
  description: "Stock tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark h-screen antialiased`}
      >
        <Providers>
          {/* <header className="absolute flex w-full justify-around p-5">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">Stock Tracker</h1>
            </div>
            <nav className="flex gap-2">
              <Button
                radius="full"
                className="bg-green-950 text-green-100"
                data-hover={false}
              >
                <a href="/signup">Sign Up</a>
              </Button>
              <Button
                radius="full"
                className="bg-green-950 text-green-100"
                data-hover={false}
              >
                Login
              </Button>
            </nav>
          </header> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
