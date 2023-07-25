import React from "react";
import "./global.css";
import { Providers } from "./redux/provider";
import { Inter } from "next/font/google";

export const metadata = {
  title: "klouskAI: The Ultimate LinkedIn Post Generator",
  description: "The Ultimate LinkedIn Post Generator",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
