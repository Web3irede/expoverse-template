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
        "flex h-full min-h-0 flex-col justify-between px-4 py-4 lg:px-8 lg:py-6",
        showDivider ? "border-r border-white/[0.07]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-4 text-center">
        <div className="mx-auto h-10 w-10 rounded-full border border-white/20 bg-white/5 lg:h-[72px] lg:w-[72px]" />

        <div className="space-y-2">
          <h3
            className={[
              "font-[var(--font-sora)] text-base font-normal leading-none lg:text-[42px]",
              titleColorClass,
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="text-center text-xs leading-[1.7] text-[#d9e2ec] lg:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-white/35 lg:w-20" />
        <p className={["text-xs lg:text-base", indexColorClass].join(" ")}>{indexLabel}</p>
        <span className="h-px w-10 bg-white/35 lg:w-20" />
      </div>
    </div>
  );
}
