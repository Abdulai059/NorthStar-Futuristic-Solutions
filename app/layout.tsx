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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
