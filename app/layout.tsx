import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ann's Flowers & Gifts of Ashland",
  description: "Fresh flowers, arrangements, and gifts for every occasion in Ashland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
