import { ProblemBrandSignature } from "./problem-brand-signature";

type ProblemReflectionProps = {
  text: string;
  highlight: string;
  className?: string;
};

export function ProblemReflection({
  text,
  highlight,
  className,
}: ProblemReflectionProps) {
  return (
    <div
      className={[
        "flex w-full max-w-[760px] flex-col items-center gap-[14px] text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="w-full text-[length:var(--text-body-lg)] leading-[1.35] text-text-secondary lg:text-[length:var(--text-h4)]">
        {text}
      </p>

      <p className="w-full text-[length:var(--text-body-lg)] font-medium leading-[1.35] text-[#9d7dff] [text-shadow:0_0_8px_rgba(157,125,255,0.35)] lg:text-[length:var(--text-h4)]">
        {highlight}
      </p>

      <ProblemBrandSignature />
    </div>
  );
}
