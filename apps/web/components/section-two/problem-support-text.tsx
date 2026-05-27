type ProblemSupportTextProps = {
  text: string;
  className?: string;
};

export function ProblemSupportText({ text, className }: ProblemSupportTextProps) {
  return (
    <p
      className={[
        "max-w-[520px] text-[length:var(--text-body)] leading-[1.45] font-normal text-text-secondary lg:text-[length:var(--text-body-lg)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </p>
  );
}
