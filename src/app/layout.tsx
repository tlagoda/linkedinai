import React from "react";
import "./global.css";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "klouskAI: The Ultimate LinkedIn Post Generator",
  description: "The Ultimate LinkedIn Post Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
