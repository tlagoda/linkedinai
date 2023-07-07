import React from "react";
import "./global.css";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "lAInkedIn: Worry Less, Inspire More",
  description: "Worry Less, Inspire More",
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
