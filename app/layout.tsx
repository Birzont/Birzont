import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birzont — AI 에이전트를 위한 팀 지식 동기화 레이어",
  description:
    "흩어진 팀 지식을 정리하고, 에이전트가 바로 읽을 수 있는 형태로 변환해 Cursor, Claude, AI 작업공간에 자동으로 동기화합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} h-full`}>
      <body className="min-h-screen bg-theme text-theme antialiased">
        {children}
      </body>
    </html>
  );
}
