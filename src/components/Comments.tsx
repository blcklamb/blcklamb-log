"use client";

import { useEffect, useRef } from "react";

/**
 * Giscus 기반 댓글 + 이모지 리액션 섹션.
 * GitHub Discussions를 백엔드로 사용하므로 별도 서버가 필요 없다.
 *
 * 동작에 필요한 설정값은 https://giscus.app 에서 발급받아
 * `.env.local`에 NEXT_PUBLIC_GISCUS_* 로 채워야 한다. (`.env.example` 참고)
 */
export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;
    if (!repo || !repoId || !category || !categoryId) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");
    container.appendChild(script);
  }, [repo, repoId, category, categoryId]);

  const isConfigured = repo && repoId && category && categoryId;

  return (
    <section className="mt-16 border-t border-slate-200 pt-10">
      <h2 className="mb-6 text-xl font-bold text-slate-900">댓글</h2>
      {isConfigured ? (
        <div className="giscus" ref={ref} />
      ) : (
        <p className="text-sm text-slate-500">
          댓글을 사용하려면 <code className="rounded bg-slate-100 px-1">.env.local</code>에
          Giscus 설정(<code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_GISCUS_*</code>)을
          추가하세요. 자세한 내용은 <code className="rounded bg-slate-100 px-1">.env.example</code>를 참고하세요.
        </p>
      )}
    </section>
  );
}
