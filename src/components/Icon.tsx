interface IconProps {
  name: IconName;
  width: number;
  height: number;
  // tailwind css className custom을 위한 property
  // stroke, fill 적용 불가, background만 가능
  className?: React.ComponentProps<"div">["className"];
}

/**
 * @example
 * <Icon name="arrow-down" width={24} height={24} />
 */
const Icon = ({ name, width, height, className }: IconProps) => {
  return (
    <svg
      style={{ pointerEvents: "none" }}
      width={width.toString()}
      height={height.toString()}
      //   stroke="none"
      className={className}
    >
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;

// IconLoader의 id 값을 타이핑해야합니다.
export type IconName = "arrow-down" | "next" | "vercel";
