"use client";

import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = (props: any) => {
  const className = props.children?.props.className || "";
  const children = props.children?.props.children ?? "";
  const language = className.replace(/language-/, "");

  return (
    <div className="not-prose group relative my-6 overflow-hidden rounded-xl border border-white/10 bg-[#282a36] shadow-card">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
        </div>
        {language && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
            {language}
          </span>
        )}
      </div>
      <Highlight theme={themes.dracula} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto p-4 text-sm leading-relaxed`}
            style={{ ...style, background: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
