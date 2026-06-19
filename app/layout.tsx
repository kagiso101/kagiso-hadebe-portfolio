import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kagiso Hadebe — Senior Frontend Developer & Founder, RogueTech",
  description:
    "Kagiso Hadebe — Senior Frontend Developer at Retro Rabbit / Smartek21, and Founder & CEO of RogueTech, a Johannesburg-based digital agency and software studio.",
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
      <body>{children}</body>
    </html>
  );
}