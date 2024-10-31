import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Portfolio Collection",
  description: "Minimalist JS Master Portfolio Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
