import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "./components/MainNav";

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
        className={`${shareTechMono.variable} font-terminal mx-auto min-h-screen max-w-[1500px] bg-neutral-900 text-neutral-100 antialiased`}
      >
        <MainNav />

        <main className="px-4 py-12 md:px-24">{children}</main>
      </body>
    </html>
  );
}
