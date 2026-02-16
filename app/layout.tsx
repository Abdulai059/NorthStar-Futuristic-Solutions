import type { Metadata } from "next";
import "./globals.css";
import LenisScroll from "@/components/lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/110de0bbe7344f96136d5cedd6608f9d?family=GT+Cinetype+Regular"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/andale-mono"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
