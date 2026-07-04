import Link from "next/link";

/**
 * 사이트 전역 헤더.
 * 랜딩 히어로 위에서는 투명하게 떠 있고, 콘텐츠 페이지에서는 배경 위로
 * 은은한 blur 바가 깔리도록 fixed + backdrop-blur 로 구성한다.
 */
export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-aurora shadow-glow-cyan transition-transform duration-300 group-hover:scale-125" />
          <span className="text-slate-100">blcklamb</span>
          <span className="text-slate-500">.log</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/posts/all"
            className="rounded-full px-3 py-1.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Posts
          </Link>
          <a
            href="https://github.com/blcklamb"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full px-3 py-1.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
