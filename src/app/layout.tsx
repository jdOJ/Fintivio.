import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const dmSans = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fintivio",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
