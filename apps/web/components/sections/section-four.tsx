type SectionFourProps = {
  className?: string;
};

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
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-6 sm:px-10 md:px-16 lg:px-16 lg:py-14">
        <div className="mx-auto grid h-full w-full max-w-[1760px] min-h-0 grid-rows-[460fr_480fr] gap-7">
          <div className="flex min-h-0 w-full gap-8">
            <div className="h-full w-[760px] shrink-0">
              <div className="flex w-full max-w-[620px] flex-col gap-7 px-4 pt-2 pb-3 lg:gap-9 lg:px-4 lg:pt-3">
                <div className="flex items-center gap-4">
                  <span
                    className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                    EXPERIENCIA
                  </p>
                  <span
                    className="h-px w-[280px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="font-[var(--font-space-grotesk)] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#d9e2ec] sm:text-6xl lg:text-[72px]">
                  <span className="block">Aprender aqui e</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent [text-shadow:0_0_18px_rgba(91,192,235,0.22)]">
                      viver
                    </span>
                    <span> o conhecimento.</span>
                  </span>
                </h2>

                <div className="space-y-5">
                  <span className="block h-px w-[360px] bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent" />
                  <div className="w-[604px] space-y-1.5">
                    <p className="text-[28px] leading-[1.6] text-[#d9e2ec]">
                      Lucas entra no Mnemos Mundi. Escolhe Astronomia. Responde,
                      conquista e deixa seu legado registrado na blockchain.
                    </p>
                    <p className="text-[28px] leading-[1.6] font-semibold text-[#5bc0eb] [text-shadow:0_0_8px_rgba(91,192,235,0.4)]">
                      Para sempre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-w-0 flex-1" />
          </div>

          <div className="relative min-h-0 w-full">
          
          </div>
        </div>
      </div>
    </section>
  );
}
