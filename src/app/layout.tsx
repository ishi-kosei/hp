import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXECUTIVE NEXUS | 経営者コミュニティ",
  description:
    "志高き経営者が集う、次世代のビジネスコミュニティ。共に成長し、未来を切り拓く。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
