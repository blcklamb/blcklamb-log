"use client";

import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = (props: any) => {
  const className = props.children?.props.className || "";
  const children = props.children?.props.children;
  const language = className.replace(/language-/, "");

  return (
    <Highlight theme={themes.dracula} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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
  );
};

export default CodeBlock;
