type SectionSevenProps = {
  className?: string;
};

const impactMetrics = [
  {
    value: "10.000+",
    description: "alunos explorando\nnos primeiros 12\nmeses",
    accent: "#35d6ff",
  },
  {
    value: "25+",
    description: "mundos educacionais\ne salas imersivas",
    accent: "#9d7dff",
  },
  {
    value: "100+",
    description: "conquistas verificaveis\ne badges unicas",
    accent: "#f4c95d",
  },
  {
    value: "1",
    description: "identidade digital\npara toda a vida.",
    accent: "#35d6ff",
  },
] as const;

const impactPillars = [
  { label: "Progressao verificavel", accent: "#35d6ff" },
  { label: "Pertencimento real", accent: "#35d6ff" },
  { label: "Reputacao portatil", accent: "#9d7dff" },
  { label: "Credibilidade aberta", accent: "#35d6ff" },
  { label: "Legado vivo", accent: "#35d6ff" },
] as const;

export function SectionSeven({ className }: SectionSevenProps) {
  return (
    <section
      aria-label="Sessao 7"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-4 pt-4 pb-1 sm:px-10 md:px-16 lg:px-8 lg:pt-6 lg:pb-1">
        <div className="mx-auto flex h-full w-full max-w-[1760px] min-h-0 flex-col items-center gap-3 lg:gap-4">
          <div className="flex h-[4%] w-[390px] shrink-0 items-center justify-center ">
            <p className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.42em] text-[#5bc0eb]">
              IMPACTO
            </p>
          </div>

          <div className="flex h-[8%] w-full shrink-0 items-center justify-center ">
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-none tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              O futuro da{" "}
              <span className="bg-gradient-to-r from-[#9d7dff] to-[#35d6ff] bg-clip-text text-transparent">
                educação
              </span>{" "}
              nao cabe em uma{" "}
              <span className="bg-gradient-to-r from-[#f4c95d] to-[#9d7dff] bg-clip-text text-transparent">
                sala.
              </span>
            </h2>
          </div>

          <div className="flex h-[4%] w-[810px] shrink-0 items-center justify-center ">
            <p className="text-[length:var(--text-body-lg)] font-light leading-[1.25] text-text-secondary lg:text-[length:var(--text-h4)]">
              Estamos construindo um{" "}
              <span className="text-[#35d6ff]">
                futuro digital de verdade
              </span>{" "}
              para todos.
            </p>
          </div>

          <div className="grid h-[15%] w-[72%] shrink-0 grid-cols-4 ">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.value}
                className={[
                  "flex h-full items-center gap-4 px-6",
                  index < impactMetrics.length - 1
                    ? "border-r border-[#2ad0ff]/15"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span
                  className="h-[44px] w-[44px] shrink-0 rounded-full border shadow-[0_0_14px_currentColor]"
                  style={{ color: metric.accent, borderColor: metric.accent }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1">
                  <strong className="font-alt-heading text-[length:var(--text-h2)] font-light leading-none text-text-primary">
                    {metric.value}
                  </strong>

                  <p className="whitespace-pre-line text-[length:var(--text-body)] font-light leading-[1.3] text-text-secondary lg:text-[length:var(--text-body-lg)]">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[28%] w-full shrink-0 " />

          <div className="flex h-[11%] w-[90%] shrink-0 items-center justify-center rounded-[24px]  bg-[#101624]/80 px-10">
            <p className="font-alt-heading text-[length:var(--text-h2)] font-light leading-none tracking-[0.02em] text-text-secondary">
              Deixar um{" "}
              <span className="text-[#9d7dff] drop-shadow-[0_0_12px_rgba(157,125,255,0.65)]">
                legado
              </span>{" "}
              — o conhecimento{" "}
              <span className="text-[#35d6ff] drop-shadow-[0_0_12px_rgba(53,214,255,0.65)]">
                pertence ao aluno
              </span>
              .
            </p>
          </div>

          <div className="flex h-[9%] w-[90%] shrink-0 items-center justify-center rounded-full  bg-[#101624]/80 px-10">
            <div className="grid w-full grid-cols-5 items-center">
              {impactPillars.map((pillar, index) => (
                <div
                  key={pillar.label}
                  className={[
                    "flex items-center justify-center gap-3",
                    index < impactPillars.length - 1
                      ? "border-r border-[#d9e2ec]/10"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span
                    className="h-[28px] w-[28px] rounded-full border shadow-[0_0_10px_currentColor]"
                    style={{ color: pillar.accent, borderColor: pillar.accent }}
                    aria-hidden="true"
                  />

                  <p className="text-[length:var(--text-body)] font-light leading-none text-text-secondary lg:text-[length:var(--text-body-lg)]">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
