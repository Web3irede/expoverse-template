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
        "flex flex-col justify-between gap-6 rounded-2xl border border-white/10 p-5 sm:p-6",
        showDivider ? "xl:border-r xl:border-white/10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-4 text-center sm:space-y-5">
        <div className="mx-auto h-12 w-12 rounded-full border border-white/20 bg-white/5 lg:h-[72px] lg:w-[72px]" />

        <div className="space-y-2">
          <h3
            className={[
              "font-alt-heading text-[length:var(--text-body-lg)] font-semibold leading-none lg:text-[length:var(--text-h3)]",
              titleColorClass,
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="text-center text-[length:var(--text-caption)] leading-[1.6] text-text-secondary sm:text-[length:var(--text-body-sm)]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-white/35 lg:w-16" />
        <p className={["text-[length:var(--text-caption)] sm:text-[length:var(--text-body-sm)]", indexColorClass].join(" ")}>
          {indexLabel}
        </p>
        <span className="h-px w-10 bg-white/35 lg:w-16" />
      </div>
    </div>
  );
}
