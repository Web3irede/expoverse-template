import { FeatureCard } from "../section-three/feature-card";

type SectionThreeProps = {
  className?: string;
};

const featureCards = [
  {
    title: "Aprender",
    description:
      "Descubra novos significados e desenvolva habilidades que ficam com voce.",
    indexLabel: "01",
    indexColorClass: "text-[#5bc0eb]",
    titleColorClass: "text-[#5bc0eb]",
  },
  {
    title: "Explorar",
    description:
      "Navegue por mundos de conhecimento vivos, cheios de misterios e conexoes.",
    indexLabel: "02",
    indexColorClass: "text-[#9d7dff]",
    titleColorClass: "text-[#9d7dff]",
  },
  {
    title: "Criar",
    description:
      "Transforme seu aprendizado em expressao, construindo experiencias unicas.",
    indexLabel: "03",
    indexColorClass: "text-[#f4c95d]",
    titleColorClass: "text-[#f4c95d]",
  },
  {
    title: "Conquistar",
    description:
      "Alcance marcos, receba reconhecimento e construa um legado verificavel.",
    indexLabel: "04",
    indexColorClass: "text-[#7bd389]",
    titleColorClass: "text-[#7bd389]",
  },
] as const;

export function SectionThree({ className }: SectionThreeProps) {
  return (
    <section
      aria-label="Sessao 3 - Estrutural"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-[#050816] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-4 pt-4 pb-1 sm:px-10 md:px-16 lg:px-8 lg:pt-6 lg:pb-1">
        <div className="mx-auto flex h-full w-full max-w-[1760px] min-h-0 flex-col gap-3 lg:gap-4">
          <div className="h-[49%] min-h-0 w-full shrink-0">
            <div className="grid h-full w-full grid-cols-1 items-start gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
              <div className="w-full max-w-[760px]">
                <div className="flex w-full max-w-[620px] flex-col gap-7 px-4 pt-2 pb-3 lg:gap-9 lg:px-4 lg:pt-3">
                  <div className="flex items-center gap-4">
                    <span
                      className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                      aria-hidden="true"
                    />
                    <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                      REVELACAO
                    </p>
                    <span className="h-px w-[280px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent" aria-hidden="true" />
                  </div>

                  <h2 className="font-[var(--font-sora)] text-5xl leading-[1.02] font-light tracking-[-0.04em] text-[#f8fafc] sm:text-6xl lg:text-[72px]">
                    <span className="block">O conhecimento</span>
                    <span className="block bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
                      ganha forma.
                    </span>
                    <span className="block">E um novo mundo nasce.</span>
                  </h2>

                  <div className="space-y-5">
                    <span className="block h-px w-[360px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent" />
                    <p className="max-w-[560px] text-base leading-[1.55] text-[#d9e2ec] lg:text-[19px]">
                      <span className="text-[#35d6ff]">Mnemos Mundi</span> e um universo educacional onde o conhecimento tem peso, forma e valor - <span className="text-[#35e7ff]">e fica com voce para sempre.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[33%] min-h-0 w-full shrink-0 pt-1 lg:pt-0">
            <div className="flex h-full w-full flex-col gap-3 lg:gap-4">
              <div className="flex h-[16%] min-h-0 w-full items-center justify-center px-2">
                <p className="text-center font-[var(--font-space-grotesk)] text-sm font-light tracking-[0.26em] text-[#d9e2ec] lg:text-[20px] lg:tracking-[0.38em]">
                  VOCE NAO APENAS APRENDE. VOCE SE TRANSFORMA.
                </p>
              </div>

              <div className="h-[84%] min-h-0 w-full rounded-[34px] border border-[#6fcbff33] bg-gradient-to-b from-[#0b1730c9] to-[#091428b8] shadow-[0_14px_42px_rgba(10,22,51,0.4)]">
                <div className="grid h-full w-full grid-cols-4 overflow-hidden rounded-[34px]">
                  {featureCards.map((card, index) => (
                    <FeatureCard
                      key={card.indexLabel}
                      title={card.title}
                      description={card.description}
                      indexLabel={card.indexLabel}
                      indexColorClass={card.indexColorClass}
                      titleColorClass={card.titleColorClass}
                      showDivider={index < featureCards.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[11%] min-h-0 w-full shrink-0 pt-1">
            <div className="flex h-full w-full items-center rounded-[24px] border border-[#2b5ea1]/40 bg-gradient-to-r from-[#040c1b]/95 via-[#051228]/92 to-[#030a18]/95 px-4 shadow-[0_10px_34px_rgba(8,20,43,0.48)] lg:px-8">
              <div className="mr-3 inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#2b5ea1]/60 bg-[#071126] shadow-[0_0_18px_rgba(43,94,161,0.3)] lg:mr-6 lg:h-[60px] lg:w-[60px]">
                <span className="h-[22px] w-[22px] rounded-full border border-[#5bc0eb]/70 shadow-[0_0_10px_rgba(91,192,235,0.4)] lg:h-[30px] lg:w-[30px]" />
              </div>

              <p className="w-full text-center text-sm font-light leading-[1.35] text-[#d9e2ec] lg:text-[22px]">
                Nao e so sobre estudar. E sobre{" "}
                <span className="bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
                  deixar sua marca
                </span>{" "}
                no universo do conhecimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
