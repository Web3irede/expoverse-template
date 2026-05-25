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
      <div className="h-[92px] w-[92px] shrink-0 rounded-full border border-[#9d7dff73] shadow-[0_0_20px_rgba(157,125,255,0.15)]" />

      <div className="flex w-full max-w-[396px] flex-col gap-2.5">
        <h3
          className={[
            "font-[var(--font-space-grotesk)] font-bold text-[#9d7dff] [text-shadow:0_0_24px_rgba(185,140,255,0.28)]",
            valueSize === "xl" ? "text-5xl leading-[1.05] lg:text-[68px]" : "text-3xl leading-[1.14] lg:text-[40px]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {value}
        </h3>

        <p className="text-lg leading-[1.32] text-[#d9e2ec] lg:text-[22px]">{description}</p>

        <p className="text-sm leading-[1.3] text-[#64748b] lg:text-[15px]">{source}</p>
      </div>
    </article>
  );
}
