import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "./components/main-nav/main-nav";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-terminal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Ops",
  description: "Companion tool for WZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTechMono.variable} font-terminal min-h-screen bg-neutral-900 text-neutral-100 antialiased`}
      >
        <MainNav />
        <main className="mx-auto max-w-[1500px] px-5 py-4 md:px-24 md:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
