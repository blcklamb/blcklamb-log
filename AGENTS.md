# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

`blcklamb-log`는 Next.js 13(App Router)으로 만든 개인 기술 블로그입니다. 게시글은 MDX 파일로 작성하며, 빌드 시점에 타입이 부여된 콘텐츠 레이어로 컴파일됩니다. 랜딩 페이지는 react-three-fiber로 렌더링한 3D 화면(떠다니는 양 떼)입니다.

## 명령어

이 프로젝트는 **Yarn 4 + Plug'n'Play**(`nodeLinker: pnp`)를 사용합니다. `node_modules`가 없으며, 의존성은 `.pnp.cjs`를 통해 해석됩니다. 스크립트는 항상 `npm`/`npx`가 아닌 `yarn`으로 실행하세요.

- `yarn dev` — Contentlayer를 watch 모드로 실행하면서 Next.js 개발 서버를 **동시에** 구동
- `yarn build` — 콘텐츠 레이어를 생성한 뒤 Next.js를 빌드 (출력은 `.next/`가 아니라 `build/`)
- `yarn start` — 프로덕션 빌드 결과를 서빙
- `yarn lint` — `next lint` 실행 (ESLint 설정: `next/core-web-vitals`)

이 저장소에는 테스트 러너가 설정되어 있지 않습니다.

## 아키텍처

### 콘텐츠 파이프라인 (Contentlayer)

- MDX 게시글은 `posts/<slug>/index.mdx`에 위치합니다. 각 게시글의 `_raw.flattenedPath`(예: `sample`)가 slug가 됩니다.
- `contentlayer.config.ts`가 `Post` 문서 타입과 frontmatter 스키마를 정의합니다. **필수** frontmatter: `title`, `description`, `postedAt`, `readTime`. 선택: `thumbnail`, `series`, `hashTags`(문자열 리스트). 계산 필드 `url`은 `/posts/<flattenedPath>`로 해석됩니다.
- frontmatter 필드를 추가/변경하려면 `contentlayer.config.ts`를 수정해야 합니다. `contentlayer/generated`의 생성 타입이 여기에서 파생됩니다.
- 컴파일된 콘텐츠는 `import { allPosts } from "contentlayer/generated"`로 가져옵니다(`tsconfig.json`에 경로 별칭 설정). 이 모듈은 Contentlayer가 실행된 뒤에만 존재하므로, `yarn dev`/`yarn build`는 Next보다 먼저 또는 함께 Contentlayer를 실행해야 합니다.
- `next.config.cjs`는 Next 설정을 `withContentlayer(...)`로 감쌉니다.

### 라우팅 (App Router, `src/app`)

- `/` (`page.tsx`) — 랜딩 페이지: `<FloatingSheep />`(3D 캔버스) + `<LandingOverlay />`.
- `/posts/all` — 게시글 목록.
- `/posts/[slug]` — 단일 게시글. slug를 `_raw.flattenedPath`와 매칭해 게시글을 찾은 뒤, `next-contentlayer/hooks`의 `useMDXComponent`로 MDX 본문을 렌더링합니다.
- MDX 렌더링 시 `components` 맵으로 커스텀 컴포넌트를 주입합니다. 현재 `pre` → `CodeBlock`(`prism-react-renderer`, Dracula 테마 기반 구문 강조).

### 3D 랜딩 화면

- `FloatingSheep.tsx`는 react-three-fiber `<Canvas>`를 마운트하고 `COUNT`개의 `MovingModel` 인스턴스(`sheep.glb` 모델)를 렌더링합니다. 범위 `<input>` 슬라이더가 각 모델에 전달되는 `speed` 상태를 제어합니다. `ufo.glb`와 `sheep.glb`는 `public/`에 있습니다.
- react-three-fiber나 브라우저 전용 API를 사용하는 컴포넌트는 반드시 `"use client"`로 시작해야 합니다(`FloatingSheep`, `CodeBlock`, `IconLoader` 참고).
- `IconLoader.tsx`는 인라인 SVG 스프라이트 시트(`<symbol>` 정의)를 레이아웃에 주입합니다. 다른 곳에서는 `<use>`로 아이콘을 참조합니다.

### 컨벤션

- 경로 별칭 `@/*` → `src/*` (`tsconfig.json` 참고).
- 스타일링은 Tailwind CSS(`tailwind.config.js`가 `src/{pages,components,app}` 스캔). 조건부 클래스는 `src/lib/utils.ts`의 `cn(...)` 헬퍼(clsx + tailwind-merge)로 조합합니다.
- 전역 스타일: `src/styles/globals.css`, `src/app/layout.tsx`에서 import.
- 설정 파일은 `package.json`이 `"type": "module"`로 설정되어 있어 `.cjs` 확장자를 사용합니다.
