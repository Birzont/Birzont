"use client";

import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/landing-data";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinkClass =
  "inline-flex items-center text-sm font-medium text-white/60 no-underline transition-colors hover:text-white";

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
          ? "border-b border-white/10 bg-[#050607]/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5 text-white no-underline"
        >
          <BirzontLogo size={32} />
          <span className="text-lg font-bold tracking-tight text-white">Birzont</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Link href="https://birzont.ai" className={navLinkClass}>
            로그인
          </Link>
          <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/10 bg-[#050607]/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-4 px-4 py-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(navLinkClass, "py-1 text-white/75")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
            <Link href="https://birzont.ai" className={navLinkClass}>
              로그인
            </Link>
            <GlowButton href="https://birzont.ai" className="w-full justify-center">
              먼저 시작하기
            </GlowButton>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
