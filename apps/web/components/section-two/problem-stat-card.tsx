import type { ReactNode } from "react";

type ProblemStatCardProps = {
  value: ReactNode;
  description: string;
  source: string;
  showDivider?: boolean;
  valueSize?: "xl" | "md";
  className?: string;
};

export function ProblemStatCard({
  value,
  description,
  source,
  showDivider = false,
  valueSize = "xl",
  className,
}: ProblemStatCardProps) {
  return (
    <article
      className={[
        "flex w-full items-center gap-7",
        "px-0",
        showDivider ? "border-b border-white/[0.08]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="h-[92px] w-[92px] shrink-0 rounded-full border border-[#9d7dff73] shadow-[0_0_20px_rgba(157,125,255,0.12)]" />

      <div className="flex w-full max-w-[396px] flex-col gap-2.5">
        <h3
          className={[
            "font-heading font-bold text-[#9d7dff] [text-shadow:0_0_24px_rgba(185,140,255,0.28)]",
            valueSize === "xl"
              ? "text-[length:var(--text-h2)] leading-[1.05] lg:text-[length:var(--text-display)]"
              : "text-[length:var(--text-h3)] leading-[1.14] lg:text-[length:var(--text-h2)]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {value}
        </h3>

        <p className="text-[length:var(--text-body)] leading-[1.4] text-text-secondary lg:text-[length:var(--text-body-lg)]">
          {description}
        </p>

        <p className="text-[length:var(--text-caption)] leading-[1.3] font-light text-text-muted lg:text-[length:var(--text-body-sm)]">
          {source}
        </p>
      </div>
    </article>
  );
}
