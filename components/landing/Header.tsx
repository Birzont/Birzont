"use client";

import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "제품", href: "#product" },
  { label: "작동 방식", href: "#how-it-works" },
  { label: "활용 사례", href: "#use-cases" },
  { label: "요금제", href: "#pricing" },
  { label: "문서", href: "#docs" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050508]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/20 to-blue-500/20 ring-1 ring-white/10">
            <Zap className="h-4 w-4 text-emerald-400" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400/10 to-transparent" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Birzont</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://birzont.ai"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            로그인
          </Link>
          <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn("overflow-hidden border-t border-white/[0.06] md:hidden")}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="https://birzont.ai" className="text-sm text-white/60">
              로그인
            </Link>
            <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
