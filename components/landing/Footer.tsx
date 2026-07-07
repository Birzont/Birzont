import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { FOOTER_LINKS } from "@/lib/landing-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-birzont-black px-4 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <BirzontLogo size={32} />
              <span className="text-lg font-bold">Birzont</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              AI 에이전트를 위한 팀 지식 동기화 레이어
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/45 transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-sm text-white/25">© 2026 Birzont Inc.</p>
        </div>
      </div>
    </footer>
  );
}
