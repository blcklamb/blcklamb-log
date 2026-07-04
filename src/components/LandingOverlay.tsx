import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export default function LandingOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
      {/* 별가루(starfield) */}
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={70}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative flex flex-col items-center px-6">
        <p className="animate-fade-up text-sm font-medium tracking-tight text-slate-300 [animation-delay:120ms]">
          깜냥을 쫓는 개발자, 김채정입니다.
        </p>

        <div className="relative mt-4 animate-fade-up [animation-delay:220ms]">
          {/* 뒤에 은은하게 번지는 오로라 글로우 */}
          <h1
            aria-hidden
            className="text-aurora absolute inset-0 select-none text-4xl font-extrabold tracking-tight blur-2xl md:text-7xl"
          >
            BLOG.BLCKLAMB
          </h1>
          <h1 className="text-aurora animate-aurora-pan relative text-4xl font-extrabold tracking-tight md:text-7xl">
            BLOG.BLCKLAMB
          </h1>
        </div>
        <div className="pointer-events-auto mt-9 flex animate-fade-up items-center gap-3 [animation-delay:420ms]">
          <Link
            href="/posts/all"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <span className="absolute inset-0 -z-10 bg-aurora opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            포스트 구경하기
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* 스크롤/드래그 힌트 */}
      <div className="absolute bottom-24 flex animate-fade-up flex-col items-center gap-1 text-slate-500 [animation-delay:700ms]">
        <span className="text-[10px] uppercase tracking-[0.25em]">
          drag to orbit
        </span>
        <span className="animate-scroll-hint text-base">↓</span>
      </div>

      {/* 3D 모델 출처 표기 */}
      <div className="pointer-events-auto absolute bottom-4 w-full px-4 text-center text-[11px] text-slate-600">
        <a
          href="https://skfb.ly/oERRF"
          className="transition-colors hover:text-slate-400"
        >
          &quot;Sheep&quot;
        </a>{" "}
        by Kinga Kroliczek ·{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          className="transition-colors hover:text-slate-400"
        >
          CC Attribution
        </a>
      </div>
      <div className="pointer-events-auto absolute bottom-4 w-full px-4 text-center text-[11px] text-slate-600">
        <a
          href="https://skfb.ly/6RIqv"
          className="transition-colors hover:text-slate-400"
        >
          &quot;ufo&quot;
        </a>{" "}
        by tab1bit0 ·{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          className="transition-colors hover:text-slate-400"
        >
          CC Attribution
        </a>
      </div>
    </div>
  );
}
