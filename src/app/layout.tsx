import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Actionpackd · AI agents for Real Estate",
  description:
    "An AI agent on WhatsApp qualifies buyers, shares project photos and brochures, and books site visits, day or night.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/kit/hero-phone.webp" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
