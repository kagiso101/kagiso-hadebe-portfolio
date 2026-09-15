import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kagiso Hadebe — Software Developer · Founder, ROGUETECHNOLOGIES",
  description:
    "Kagiso Hadebe — fullstack Software Developer at Rain and Founder & CEO of ROGUETECHNOLOGIES (Pty) Ltd, a Cape Town web development studio. Building Bookvas, a deposit-secured booking platform for South African service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-416CJXW1LG" />
      </body>
    </html>
  );
}
