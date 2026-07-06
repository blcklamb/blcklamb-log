import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | blcklamb log",
};

const works = [
  {
    company: "주식회사 로그블랙",
    role: "Frontend Engineer",
    period: "2025.01 - 재직 중",
    description:
      "ESG 데이터 관리, 공급망 실사, 리포팅, 탄소회계 제품에서 운영 규모를 고려한 데이터 구조와 제작 흐름을 개선하고 있습니다.",
    highlights: [
      {
        title: "공급망 실사 운영 흐름",
        body: "KAP의 3,800개사와 약 100명 심사원 규모를 고려해 공급망 관리 시스템의 실사 프로세스를 개편하고 운영 흐름을 지원했습니다.",
      },
      {
        title: "ESG 데이터 관리 구조",
        body: "사업장 기반 프로그램, 권한, 데이터 입력 흐름을 분리하고 Program 대시보드, Metric Answer, Excel 입출력 기반 데이터 운영 구조를 구축했습니다.",
      },
      {
        title: "ESG 리포팅과 웹공시 제작",
        body: "TipTap 에디터 기반 ESG 리포트 작성, 페이지 편집, 메인 페이지 웹빌더 커스텀 기능을 개발했습니다.",
      },
      {
        title: "온실가스 인벤토리와 탄소회계",
        body: "사업장별 활동자료 입력, Scope 1/2 산정, 대시보드 기반 결과 조회를 지원하는 온실가스 인벤토리 및 탄소회계 기능을 구현했습니다.",
      },
      {
        title: "Turborepo 모노레포 구축",
        body: "분리되어 있던 디자인 시스템과 2개 앱을 Turborepo 기반 모노레포로 통합하고, TipTap 패키지 유지보수, Git 컨벤션, Amplify 환경 설정, QA 대시보드 구축을 수행했습니다.",
      },
    ],
  },
  {
    company: "데브게이트",
    role: "TypeScript Engineer",
    period: "2024.04 - 2024.11",
    description:
      "Next.js 기반 P2C, O2O, AI 플랫폼의 초기 세팅과 주요 기능 개발을 맡으며 제품별 구조를 설계했습니다.",
    highlights: [
      {
        title: "제품 초기 개발",
        body: "P2C 아트 의뢰 서비스, O2O 플랫폼 리뉴얼, AI 기반 창작물 유사도 검증 플랫폼의 인증, 폼, 리스트, 스케줄러 기능을 구현했습니다.",
      },
      {
        title: "개발자 경험 개선",
        body: "모노레포 번들 사이즈를 80% 축소하고, lint/prettier CI 보강과 next-safe-action 에러 핸들링 개선을 진행했습니다.",
      },
    ],
  },
  {
    company: "주식회사 클래스유",
    role: "Frontend Developer",
    period: "2022.11 - 2023.04",
    description:
      "모바일 웹뷰 기반 커뮤니티 기능을 개발하며 사용자가 글을 쓰고 정보를 이해하는 흐름을 개선했습니다.",
    highlights: [
      {
        title: "모바일 커뮤니티 UX",
        body: "입력 UI 상호작용을 개선하고, 해시태그와 웹링크를 파싱해 직관적인 정보 전달을 돕는 UI를 구현했습니다.",
      },
    ],
  },
];

const projects = [
  {
    name: "바다거북스프",
    period: "2026.06 - (운영 중)",
    href: "https://pelican-soup-riddle.vercel.app",
    summary:
      "OpenAI와 Supabase 기반 모바일 퍼스트 추리 게임에서 AI 게임 마스터, 정답 검증, 이전 문제/기록 조회, 데일리 문제 자동 생성 흐름을 구현했습니다.",
  },
  {
    name: "글또 독서모임 페이지",
    period: "2025.09 - (운영 중)",
    href: "https://geultto-book-club.vercel.app",
    summary:
      "글또 5기 독서모임 페이지에서 일정, 독후감, 토론 발제, 인상 깊은 구절 공유와 관리자/참석자 운영 흐름을 구현했습니다.",
  },
  {
    name: "Groot",
    period: "2025.05 (5개월)",
    href: "https://github.com/blcklamb/korean-tour-data-2025-groot-fe",
    summary:
      "2025 관광데이터 공모전 장려상 수상작으로, 한국관광공사 API 기반 경북 생태관광 검색과 여행 활동별 탄소 리포트·대시보드를 구현했습니다.",
  },
  {
    name: "묘정송편",
    period: "2023.09 (2주)",
    href: "https://github.com/blcklamb/myojeong_fe",
    summary:
      "추석 안부 공유 서비스에서 리드, 프론트엔드, 디자인을 맡았고 일일 최고 방문자 11,668명과 소원 작성 140건을 기록했습니다.",
  },
  {
    name: "손생님",
    period: "2022.08 (5주)",
    href: "https://github.com/elice-AI4/sonsaengnim",
    summary:
      "청각장애인 아동의 영어 수화 학습 서비스에서 LSTM 모델 loss를 1.89에서 0.016으로 개선하고 인공지능 웹 프로젝트 부문 최우수상과 인기상을 수상했습니다.",
  },
  {
    name: "옷다",
    period: "2023.11 (2주)",
    href: "https://github.com/nambu-web-cloud-course/otta-fe",
    summary:
      "의류 수거함 위치 조회 서비스에서 5,100여 개 공공데이터를 전처리하고 카카오맵 기반 위치 검색 기능을 구현했습니다.",
  },
];

const activities = [
  {
    name: "2022 오픈소스 컨트리뷰션 아카데미",
    period: "2022.10",
    href: "https://github.com/blcklamb/githru-vscode-ext",
    summary:
      "Githru VS Code Extension 프로젝트에서 초기 컨벤션과 컨트리뷰션 규칙을 논의하고 git log 데이터 parse 모듈을 담당했습니다.",
  },
  {
    name: "글쓰기와 공유",
    href: "https://github.com/blcklamb/blcklamb-log",
    summary:
      "기술 블로그와 글쓰기 커뮤니티 활동을 통해 배운 내용을 구조화하고, 팀과 동료가 다시 사용할 수 있는 형태로 공유하는 습관을 이어가고 있습니다.",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="border-b border-white/10 pb-4 text-2xl font-bold tracking-tight text-slate-50">
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 pb-16 pt-28">
        <header className="border-b border-white/10 pb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-300/70">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-50 md:text-5xl">
            사용자와 개발자의 경험을
            <br />
            함께 개선합니다.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-400 break-keep">
            <p>
              안녕하세요. 프론트엔드 개발자 김채정입니다. B2B SaaS와 커머스
              제품에서 핵심 기능 개발, 제품 구조 개선, 개발 생산성 향상을 함께
              다뤄왔습니다.
            </p>
            <p>
              문제를 제품의 흐름과 팀의 맥락에 맞게 구조화하고, 사용자가 더 적은
              마찰로 목적을 달성하도록 만드는 일을 좋아합니다. 동시에 팀이 계속
              움직일 수 있도록 API, 공통 컴포넌트, 컨벤션을 정리하는 일에도
              관심이 많습니다.
            </p>
          </div>
        </header>

        <section className="mt-16">
          <SectionTitle>Work</SectionTitle>
          <div className="divide-y divide-white/10">
            {works.map((work) => (
              <article
                key={work.company}
                className="grid gap-6 py-10 md:grid-cols-[11rem_1fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                    {work.company}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-300/80">{work.role}</p>
                  <p className="mt-1 text-sm text-slate-500">{work.period}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-slate-400">
                    {work.description}
                  </p>
                  <ul className="mt-6 space-y-5">
                    {work.highlights.map((highlight) => (
                      <li key={highlight.title}>
                        <h4 className="text-sm font-semibold text-slate-200">
                          {highlight.title}
                        </h4>
                        <p className="mt-1 text-sm leading-7 text-slate-400">
                          {highlight.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle>Projects</SectionTitle>
          <ul className="divide-y divide-white/10">
            {projects.map((project) => (
              <li
                key={project.name}
                className="grid gap-3 py-7 md:grid-cols-[9rem_1fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition-colors hover:text-indigo-300"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.period ? (
                    <p className="mt-1 text-sm text-slate-500">
                      {project.period}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <SectionTitle>Activities</SectionTitle>
          <ul className="divide-y divide-white/10">
            {activities.map((activity) => (
              <li
                key={activity.name}
                className="grid gap-3 py-7 md:grid-cols-[12rem_1fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                    {activity.href ? (
                      <a
                        href={activity.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition-colors hover:text-indigo-300"
                      >
                        {activity.name}
                      </a>
                    ) : (
                      activity.name
                    )}
                  </h3>
                  {activity.period ? (
                    <p className="mt-1 text-sm text-slate-500">
                      {activity.period}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm leading-7 text-slate-400">
                  {activity.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm leading-7 text-slate-400">
            더 자세한 글과 기록은 블로그에 남기고 있습니다.
            <br />
            제품과 팀에 도움이 되는 프론트엔드 구조, 사용자 경험, 개발자 경험에
            대해 계속 학습하고 공유합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:whenucan35@gmail.com"
              className="rounded-full border border-white/10 px-4 py-2 font-medium text-slate-200 transition-colors hover:border-indigo-300/50 hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/blcklamb"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 px-4 py-2 font-medium text-slate-200 transition-colors hover:border-indigo-300/50 hover:text-white"
            >
              GitHub
            </a>
            <Link
              href="/posts/all"
              className="rounded-full border border-white/10 px-4 py-2 font-medium text-slate-200 transition-colors hover:border-indigo-300/50 hover:text-white"
            >
              Posts
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
