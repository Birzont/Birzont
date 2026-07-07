"use client";

import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/landing-data";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-birzont-black/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <BirzontLogo size={32} />
          <span className="text-lg font-bold tracking-tight">Birzont</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://birzont.ai"
            className="text-sm text-white/55 transition-colors hover:text-white"
          >
            로그인
          </Link>
          <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 text-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/[0.06] md:hidden"
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          {NAV_ITEMS.map((item) => (
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
