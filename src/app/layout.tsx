import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "왓챠피디아",
  description: "36기 합동세미나 모바일 웹 5조 왓챠피디아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
