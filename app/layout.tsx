import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaWeb Studio | Websites & Web Applications",
  description:
    "NovaWeb Studio creates modern websites and practical web applications for growing businesses.",
  applicationName: "NovaWeb Studio"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07110d"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
