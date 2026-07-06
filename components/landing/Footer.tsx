import Link from "next/link";
import { Zap } from "lucide-react";

const LINKS = [
  { label: "제품", href: "#product" },
  { label: "문서", href: "#docs" },
  { label: "보안", href: "https://birzont.com/policy.html" },
  { label: "문의", href: "mailto:contact@birzont.com" },
];

export function Footer() {
  return (
    <footer id="docs" className="border-t border-white/[0.06] px-4 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06] ring-1 ring-white/10">
            <Zap className="h-3.5 w-3.5 text-sage-400" />
          </div>
          <span className="font-semibold">Birzont</span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/45 transition-colors hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-white/30">© 2026 Birzont Inc.</p>
      </div>
    </footer>
  );
}
