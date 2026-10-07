import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raynaldi. - Portfolio",
  description: "Web Portfolio Putra Raynaldi Gultom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}