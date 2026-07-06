import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Birzont — AI 에이전트를 위한 팀 지식 동기화 레이어",
  description:
    "Notion, 사내 문서, 로컬 폴더의 지식을 에이전트가 읽기 좋은 형태로 정리하고 Cursor·Claude 작업환경에 자동 동기화합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
