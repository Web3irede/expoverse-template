type SectionFiveProps = {
  className?: string;
};

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

          <div className="min-h-0 w-full rounded-[28px] border border-[#2b3d5e]" />

          <div className="min-h-0 w-full rounded-[20px] border border-[#2b3d5e]" />
        </div>
      </div>
    </section>
  );
}
