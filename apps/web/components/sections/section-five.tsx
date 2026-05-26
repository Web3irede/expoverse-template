type SectionFiveProps = {
  className?: string;
};

function SmartContractsCard() {
  return (
    <article className="relative flex h-full min-h-0 items-center gap-5 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,rgba(16,31,63,0.66)_0%,rgba(9,18,42,0.62)_52%,rgba(22,45,85,0.52)_100%)] px-6 py-5 shadow-[inset_0_1px_0_rgba(220,244,255,0.22),0_0_36px_rgba(91,192,235,0.32)] backdrop-blur-[24px]">
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(173,232,255,0.18),transparent_42%),radial-gradient(circle_at_80%_100%,rgba(77,147,255,0.14),transparent_48%)]"
        aria-hidden="true"
      />

      <div className="relative h-[118px] w-[118px] shrink-0 rounded-full border border-[#bfefff8c] bg-[radial-gradient(circle_at_center,rgba(32,75,122,0.8)_0%,rgba(20,49,95,0.72)_55%,rgba(11,24,51,0.9)_100%)] shadow-[0_0_20px_rgba(56,182,255,0.45),0_0_12px_rgba(166,230,255,0.24)]" />

      <div className="relative z-10 w-[278px] min-w-0 space-y-3">
        <h4 className="font-[var(--font-space-grotesk)] text-[22px] font-semibold tracking-[0.035em] text-[#5bc0eb]">
          1. SMART CONTRACTS
        </h4>
        <p className="text-[16px] leading-[1.4] text-[#d9e2ec]">
          Conquistas registradas de forma permanente e verificavel.
          <br />
          <br />
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
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-6 sm:px-10 md:px-16 lg:px-16 lg:py-14">
        <div className="mx-auto grid h-full w-full max-w-[1760px] min-h-0 grid-rows-[30fr_52fr_18fr] gap-6">
          <div className="min-h-0 w-full">
            <div className="flex w-full max-w-[1080px] flex-col gap-7 px-4 pt-2">
              <div className="flex items-center gap-4">
                <span
                  className="h-[18px] w-[18px] rounded-full border-[1.5px] border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                  aria-hidden="true"
                />
                <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                  5. WEB3 NA PRATICA
                </p>
                <span
                  className="h-px w-[120px] bg-gradient-to-r from-[#2ad0ff] to-transparent shadow-[0_0_6px_rgba(42,208,255,0.4)]"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-1 font-[var(--font-space-grotesk)] text-[#f8fafc]">
                <h2 className="text-4xl font-bold leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-[74px]">
                  Tecnologia que transforma
                </h2>
                <h3 className="text-4xl font-bold leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-[74px]">
                  <span>aprendizado em </span>
                  <span className="bg-gradient-to-r from-[#ffb84d] to-[#ffd978] bg-clip-text text-transparent">
                    legado.
                  </span>
                </h3>
              </div>

              <div className="flex items-start gap-6">
                <span
                  className="mt-1 h-[96px] w-[2px] bg-gradient-to-b from-[#31c8ff00] via-[#31c8ff] to-[#31c8ff00] shadow-[0_0_10px_rgba(49,200,255,0.4)]"
                  aria-hidden="true"
                />
                <div className="space-y-1 text-[22px] leading-[1.45] text-[#d9e2ec] lg:text-[26px] lg:leading-[1.34]">
                  <p>
                    Uma experiencia imersiva para que suas conquistas digitais e
                    seu conhecimento
                  </p>
                  <p>
                    <span>permanecam com </span>
                    <span className="font-semibold text-[#5bc0eb]">voce.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-0 w-full rounded-[28px] p-6">
            <div className="grid h-full min-h-0 w-full grid-cols-3 gap-6 lg:grid-cols-[520px_1fr_520px] lg:gap-[72px]">
              <div className="grid min-h-0 grid-rows-2 gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>
              <div className="grid min-h-0 grid-rows-2 gap-5">
                <div className="flex min-h-0 items-start justify-center rounded-[24px] px-6 py-5">
                  <div className="space-y-1 text-center text-[14px] font-medium tracking-[0.28em] text-[#d9e2ec] lg:text-[18px] lg:tracking-[0.28em]">
                    <p>
                      <span className="text-[#f4c95d]">CONHECIMENTO</span>
                      <span> COM</span>
                    </p>
                    <p>MEMORIA. IDENTIDADE.</p>
                    <p className="text-[#f4c95d]">E PERMANENCIA.</p>
                  </div>
                </div>
                <div className="min-h-0 w-full"></div>
              </div>
              <div className="grid min-h-0 grid-rows-2 gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>
            </div>
          </div>

          <div className="min-h-0 w-full rounded-[20px] flex items-center justify-center">
            <div className="flex h-full w-[60%] min-h-0 items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-[#ffffff24] bg-[linear-gradient(145deg,rgba(10,18,39,0.9)_0%,rgba(9,15,32,0.82)_60%,rgba(23,38,74,0.64)_100%)] px-6 py-5 shadow-[0_0_28px_rgba(244,201,93,0.28)] backdrop-blur-[20px]">
              <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full border-2 border-[#f4c95d] bg-[#ffd9781a] shadow-[0_0_26px_rgba(244,201,93,0.4)]">
                <span className="text-[38px] text-[#f4c95d]">🛡</span>
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-[22px] font-medium text-[#f8fafc] lg:text-[30px]">
                  O conhecimento so tem valor real
                </p>
                <p className="text-[22px] font-medium text-[#f8fafc] lg:text-[30px]">
                  <span>quando pode </span>
                  <span className="text-[#f4c95d]">permanecer.</span>
                </p>
              </div>

              <div className="h-[72px] w-px shrink-0 bg-[#ffffff1a]" />

              <p className="w-[34%] min-w-[180px] text-[14px] leading-[1.5] text-[#d9e2ec] lg:text-[20px]">
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
