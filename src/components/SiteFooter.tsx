import Link from "next/link";

/** 콘텐츠 페이지 하단 공통 푸터. */
export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora" />
          <span>
            <span className="text-slate-300">blcklamb</span>.log
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-slate-200">
            Home
          </Link>
          <Link
            href="/posts/all"
            className="transition-colors hover:text-slate-200"
          >
            Posts
          </Link>
          <a
            href="https://github.com/blcklamb"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-slate-200"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} 김채정 · 깜냥을 쫓는 개발자
      </p>
    </footer>
  );
}
