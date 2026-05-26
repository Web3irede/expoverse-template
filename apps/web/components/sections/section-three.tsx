type SectionThreeProps = {
  className?: string;
};

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
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-6 sm:px-10 md:px-16 lg:px-20 lg:py-8">
        <div className="mx-auto flex h-full w-full max-w-[1760px] min-h-0 flex-col gap-4">
          <div className="h-[46%] min-h-0 w-full shrink-0">
            <div className="flex h-full w-full items-start">
              <div className="w-full max-w-[760px]">
                <div className="flex w-full max-w-[620px] flex-col gap-8 px-4 pt-5 pb-4 lg:gap-10 lg:px-4 lg:pt-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                      aria-hidden="true"
                    />
                    <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
                      REVELACAO
                    </p>
                    <span
                      className="h-px w-[120px] bg-gradient-to-r from-[#2ad0ff] to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="font-[var(--font-sora)] text-5xl leading-[1.02] font-light tracking-[-0.035em] text-[#f8fafc] sm:text-6xl lg:text-[72px]">
                    <span className="block">O conhecimento</span>
                    <span className="block bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
                      ganha forma.
                    </span>
                    <span className="block">E um novo mundo nasce.</span>
                  </h2>

                  <p className="max-w-[520px] text-base leading-[1.6] text-[#d9e2ec] lg:text-[20px]">
                    Mnemos Mundi e um universo educacional onde o conhecimento
                    tem peso, forma e valor - e fica com voce para sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[39%] min-h-0 w-full shrink-0">
            <div className="flex h-full w-full flex-col gap-6">
              <div className="h-[24%] min-h-0 w-full" />

              <div className="h-[76%] min-h-0 w-full rounded-[34px] border border-[#6fcbff33] bg-gradient-to-b from-[#0b1730c9] to-[#091428b8] shadow-[0_14px_42px_rgba(10,22,51,0.4)]" />
            </div>
          </div>

          <div className="h-[15%] min-h-0 w-full shrink-0 pt-2">
            <div className="h-full w-full rounded-[28px] border border-white/10 bg-[#081020ad] shadow-[0_10px_34px_rgba(8,20,43,0.48)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
