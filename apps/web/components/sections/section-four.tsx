type SectionFourProps = {
  className?: string;
};

const journeyCards = [
  {
    step: "01",
    title: "Lucas entra\nno campus",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orb: "#39c8ff47",
  },
  {
    step: "02",
    title: "Ele escolhe\nAstronomia",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orb: "#39c8ff47",
  },
  {
    step: "03",
    title: "Um quiz aparece\nao lado de Saturno",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#9d7dff",
    orb: "#8b6bff47",
  },
  {
    step: "04",
    title: "Ele acerta e ganha\nKnowledge Crystals",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#f4c95d",
    orb: "#ffb34747",
  },
  {
    step: "05",
    title: "Tudo e registrado\nna blockchain",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orb: "#39c8ff47",
  },
  {
    step: "06",
    title: "E o mundo continua\nse expandindo",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#7bd389",
    orb: "#7bd38947",
  },
] as const;

export function SectionFour({ className }: SectionFourProps) {
  return (
    <section
      aria-label="Sessao 4"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-[#050816] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-4 sm:px-10 md:px-16 lg:px-16 lg:py-6">
        <div className="mx-auto grid h-full w-full max-w-[1760px] min-h-0 grid-rows-2 gap-0">
          <div className="flex min-h-0 w-full gap-5 lg:gap-6">
            <div className="h-full w-[700px] shrink-0">
              <div className="flex w-full max-w-[580px] flex-col gap-5 px-4 pt-2 pb-2 lg:gap-7 lg:px-4 lg:pt-3">
                <div className="flex items-center gap-4">
                  <span
                    className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                    EXPERIENCIA
                  </p>
                  <span
                    className="h-px w-[220px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="font-[var(--font-space-grotesk)] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#d9e2ec] sm:text-5xl lg:text-[64px]">
                  <span className="block">Aprender aqui e</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent [text-shadow:0_0_18px_rgba(91,192,235,0.22)]">
                      viver
                    </span>
                    <span> o conhecimento.</span>
                  </span>
                </h2>

                <div className="space-y-4">
                  <span className="block h-px w-[320px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent" />
                  <div className="w-[560px] space-y-1">
                    <p className="text-[22px] leading-[1.55] text-[#d9e2ec]">
                      Lucas entra no Mnemos Mundi. Escolhe Astronomia. Responde,
                      conquista e deixa seu legado registrado na blockchain.
                    </p>
                    <p className="text-[22px] leading-[1.55] font-semibold text-[#5bc0eb] [text-shadow:0_0_8px_rgba(91,192,235,0.4)]">
                      Para sempre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-w-0 flex-1" />
          </div>

          <div className="relative min-h-0 w-full">
            <div className="absolute left-5 top-10 flex h-[332px] w-[1712px] items-start gap-4">
              {journeyCards.map((card) => (
                <div
                  key={card.step}
                  className="flex h-[332px] w-[272px] shrink-0 flex-col items-center gap-3 rounded-[28px] border border-[#78dcff2e] bg-[#141e3c6b] px-[18px] py-4 backdrop-blur-[16px]"
                >
                  <div
                    className="relative h-[38px] w-[38px] rounded-full bg-[#1b2f55d9]"
                    style={{ border: `1px solid ${card.accent}73` }}
                  >
                    <span
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] font-bold"
                      style={{ color: card.accent }}
                    >
                      {card.step}
                    </span>
                  </div>

                  <div className="relative h-[124px] w-[124px] rounded-[20px] border border-[#7ddcff5c] bg-[#1a2e57a3] shadow-[0_0_20px_rgba(57,200,255,0.3)]">
                    <div
                      className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_16px_rgba(57,200,255,0.4)]"
                      style={{ background: card.orb }}
                    />
                  </div>

                  <p
                    className="w-[226px] text-center font-[var(--font-space-grotesk)] text-[17px] font-semibold leading-[1.18]"
                    style={{ color: card.accent }}
                  >
                    {card.title}
                  </p>

                  <p className="w-[226px] text-center text-[13px] font-normal leading-[1.45] text-[#d9e2ec]">
                    {card.description}
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
