type SectionFiveProps = {
  className?: string;
};

function SmartContractsCard() {
  return (
    <article
      className="
  relative flex items-center gap-6 overflow-hidden
  rounded-[28px]
  border border-[#7ecbff80]
  bg-[linear-gradient(145deg,rgba(12,28,58,0.72)_0%,rgba(8,18,42,0.66)_55%,rgba(16,39,78,0.58)_100%)]
  px-3 py-5
  shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_0_1px_rgba(126,203,255,0.16),0_0_28px_rgba(91,192,235,0.22)]
  backdrop-blur-[24px]
  before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px]
  before:bg-[linear-gradient(135deg,rgba(180,235,255,0.42)_0%,rgba(91,192,235,0.16)_28%,transparent_52%,rgba(91,192,235,0.22)_100%)]
  before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
  before:p-px before:[mask-composite:exclude]
"
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(173,232,255,0.18),transparent_42%),radial-gradient(circle_at_80%_100%,rgba(77,147,255,0.14),transparent_48%)]"
        aria-hidden="true"
      />

      <div className="relative h-[180px] w-[180px] shrink-0 rounded-full border border-[#bfefff8c] bg-[radial-gradient(circle_at_center,rgba(32,75,122,0.8)_0%,rgba(20,49,95,0.72)_55%,rgba(11,24,51,0.9)_100%)] shadow-[0_0_18px_rgba(56,182,255,0.42),0_0_10px_rgba(166,230,255,0.22)]" />

      <div className="relative z-10 w-[220px] min-w-0 space-y-2 space-y-3">
        <h4 className="font-[var(--font-space-grotesk)] text-[18px] font-semibold tracking-[0.035em] text-[#5bc0eb]">
          1. SMART CONTRACTS
        </h4>

        <p className="text-[16px] leading-[1.35] text-[#d9e2ec]">
          Conquistas registradas de forma permanente e verificavel.
        </p>
        <p className="text-[16px] leading-[1.35] text-[#d9e2ec]">
          Emissao automatica e segura de badges e certificados.
        </p>
      </div>
    </article>
  );
}

export function SectionFive({ className }: SectionFiveProps) {
  return (
    <section
      aria-label="Sessao 5"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-[#050816] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-6 sm:px-10 md:px-16 lg:px-16 lg:py-10">
        <div className="mx-auto grid h-full w-full max-w-[1760px] min-h-0 grid-rows-[auto_1fr_auto] gap-4">
          {/* Header row */}
          <div className="min-h-0 w-full">
            <div className="flex w-full max-w-[1080px] flex-col gap-5 px-4 pt-2">
              <div className="flex items-center gap-4">
                <span
                  className="h-[18px] w-[18px] rounded-full border-[1.5px] border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                  aria-hidden="true"
                />

                <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                  WEB3 NA PRÁTICA
                </p>

                <span
                  className="h-px w-[120px] bg-gradient-to-r from-[#2ad0ff] to-transparent shadow-[0_0_6px_rgba(42,208,255,0.4)]"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-1 font-[var(--font-space-grotesk)] text-[#f8fafc]">
                <h2 className="text-3xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                  Tecnologia que transforma
                </h2>

                <h3 className="text-3xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                  <span>aprendizado em </span>
                  <span className="bg-gradient-to-r from-[#ffb84d] to-[#ffd978] bg-clip-text text-transparent">
                    legado.
                  </span>
                </h3>
              </div>

              <div className="flex items-start gap-5">
                <span
                  className="mt-1 h-[78px] w-[2px] bg-gradient-to-b from-[#31c8ff00] via-[#31c8ff] to-[#31c8ff00] shadow-[0_0_10px_rgba(49,200,255,0.4)]"
                  aria-hidden="true"
                />

                <div className="space-y-1 text-[18px] leading-[1.4] text-[#d9e2ec] lg:text-[18px] lg:leading-[1.32]">
                  <p className="max-w-[520px]">
                    Uma experiencia imersiva para que suas conquistas digitais e
                    seu conhecimento
                    <span className="font-semibold text-[#5bc0eb]">
                      {" "}
                      permanecam com voce.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards row */}
          <div className="min-h-0 w-full overflow-hidden rounded-[28px] px-6 py-2">
            <div className="grid h-full min-h-0 w-full grid-cols-3 gap-6 lg:grid-cols-[460px_1fr_460px] lg:gap-[64px]">
              {/* Left column */}
              <div className="flex h-full flex-col justify-between gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>

              {/* Center column */}
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center px-6 py-4">
                  <div className="space-y-1 text-center text-[14px] font-medium tracking-[0.28em] text-[#d9e2ec] lg:text-[14px] lg:tracking-[0.28em]">
                    <p>
                      <span className="text-[#f4c95d]">CONHECIMENTO</span>
                      <span> COM</span>
                    </p>
                    <p>MEMORIA. IDENTIDADE.</p>
                    <p className="text-[#f4c95d]">E PERMANENCIA.</p>
                  </div>
                </div>

                <div className="min-h-0 w-full flex-1" />
              </div>

              {/* Right column */}
              <div className="flex h-full flex-col justify-between gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex min-h-0 w-full items-center justify-center rounded-[20px]">
  <div
    className="
      relative
      flex h-full w-[56%] min-h-0 items-center justify-between gap-5
      overflow-hidden
      rounded-[28px]
      border border-[#f4c95d30]
      bg-[linear-gradient(145deg,rgba(10,18,39,0.92)_0%,rgba(9,15,32,0.86)_55%,rgba(23,38,74,0.68)_100%)]
      px-5 py-3
      shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_0_1px_rgba(244,201,93,0.08),0_0_36px_rgba(244,201,93,0.18)]
      backdrop-blur-[24px]

      before:pointer-events-none
      before:absolute
      before:inset-0
      before:rounded-[28px]
      before:bg-[linear-gradient(135deg,rgba(255,233,166,0.32)_0%,rgba(244,201,93,0.12)_30%,transparent_55%,rgba(244,201,93,0.18)_100%)]
      before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
      before:[mask-composite:exclude]
      before:p-px
    "
  >
    {/* Glow decorativo */}
    <span
      className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_15%_50%,rgba(244,201,93,0.12),transparent_35%),radial-gradient(circle_at_85%_50%,rgba(91,192,235,0.08),transparent_35%)]
      "
      aria-hidden="true"
    />

    <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-[#f4c95d80] bg-[radial-gradient(circle_at_center,rgba(255,217,120,0.16)_0%,rgba(255,217,120,0.05)_65%,transparent_100%)] shadow-[0_0_26px_rgba(244,201,93,0.34)]">
      <span className="text-[32px] text-[#f4c95d]">🛡</span>
    </div>

    <div className="relative min-w-0 flex-1 space-y-1">
      <p className="text-[20px] font-medium text-[#f8fafc] lg:text-[26px]">
        O conhecimento so tem valor real
      </p>

      <p className="text-[20px] font-medium text-[#f8fafc] lg:text-[26px]">
        <span>quando pode </span>

        <span className="bg-gradient-to-r from-[#f4c95d] to-[#ffd978] bg-clip-text text-transparent">
          permanecer.
        </span>
      </p>
    </div>

    <div className="relative h-[64px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#ffffff30] to-transparent" />

    <p className="relative w-[34%] min-w-[180px] text-[14px] leading-[1.45] text-[#d9e2ec] lg:text-[18px]">
      Web3 nao e sobre moda.
      <br />
      E sobre construir confianca,
      <br />
      transparencia e legado.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
