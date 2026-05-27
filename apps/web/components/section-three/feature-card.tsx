type FeatureCardProps = {
  title: string;
  description: string;
  indexLabel: string;
  indexColorClass: string;
  titleColorClass: string;
  showDivider?: boolean;
};

export function FeatureCard({
  title,
  description,
  indexLabel,
  indexColorClass,
  titleColorClass,
  showDivider = false,
}: FeatureCardProps) {
  return (
    <div
      className={[
        "flex h-full min-h-0 flex-col justify-between px-4 py-5 lg:px-8 lg:py-8",
        showDivider ? "border-r border-white/[0.07]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-5 text-center">
        <div className="mx-auto h-12 w-12 rounded-full border border-white/20 bg-white/5 lg:h-[84px] lg:w-[84px]" />

        <div className="space-y-2">
          <h3
            className={[
              "font-alt-heading text-[length:var(--text-body-lg)] font-semibold leading-none lg:text-[length:var(--text-h2)]",
              titleColorClass,
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="text-center text-[length:var(--text-caption)] leading-[1.6] text-text-secondary lg:text-[length:var(--text-body-sm)]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-white/35 lg:w-20" />
        <p className={["text-[length:var(--text-caption)] lg:text-[length:var(--text-body)]", indexColorClass].join(" ")}>
          {indexLabel}
        </p>
        <span className="h-px w-10 bg-white/35 lg:w-20" />
      </div>
    </div>
  );
}
