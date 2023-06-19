import React from "react";
import "./global.css";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "Sumariz: Watch Less, Know More",
  description: "Watch Less, Know More",
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
