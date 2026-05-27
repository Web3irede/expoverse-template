type SectionEightProps = {
  className?: string;
};

export function SectionEight({ className }: SectionEightProps) {
  return (
    <section
      aria-label="Sessao 8"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* MAIN WRAPPER */}
      <div className="mx-auto flex h-full w-full max-w-[1920px] px-4 py-4 sm:px-8 md:px-12 lg:px-8 lg:py-6">
        {/* CONTENT DISTRIBUTION */}
        <div className="relative mx-auto flex h-full w-full max-w-[1760px] items-center justify-center">
          {/* CENTER CONTENT */}
          <div className="flex h-full w-[72%] min-w-0 flex-col items-center">
            {/* VERTICAL FLOW */}
            <div className="flex h-full w-full max-w-[1280px] flex-col items-center">
              {/* ================================================= */}
              {/* BRANDING CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[64px] w-fit shrink-0 items-center justify-center gap-4 px-8">
                {/* LEFT LINE */}
                <div className="h-px w-[110px] shrink-0 bg-[#2ad0ff]/40" />

                {/* LOGO */}
                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-md border border-[#2ad0ff]/40 bg-[#0b1220]/80">
                  <span className="bg-gradient-to-b from-[#35d6ff] to-[#9d7dff] bg-clip-text text-[length:var(--text-body-lg)] font-bold text-transparent">
                    M
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex items-center">
                  <span className="font-heading text-[length:var(--text-body-lg)] font-medium uppercase tracking-[0.32em] text-text-secondary">
                    Mnemos Mundi
                  </span>
                </div>

                {/* RIGHT LINE */}
                <div className="h-px w-[110px] shrink-0 bg-[#2ad0ff]/40" />
              </div>

              {/* SPACING */}
              <div className="h-[42px] shrink-0" />

              {/* ================================================= */}
              {/* HERO TEXT CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[220px] w-full max-w-[1180px] shrink-0 flex-col items-center justify-center gap-2 text-center">
                {/* LINE 1 */}
                <h1 className="font-heading text-[length:var(--text-mobile-h1)] leading-[0.95] font-light tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-display)]">
                  Não é sobre aprender.
                </h1>

                {/* LINE 2 */}
                <h1 className="font-heading text-[length:var(--text-mobile-h1)] leading-[0.95] font-light tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-display)]">
                  É sobre{" "}
                  <span className="bg-gradient-to-r from-[#35d6ff] via-[#3ddcff] to-[#b56cff] bg-clip-text text-transparent">
                    viver o conhecimento.
                  </span>
                </h1>
              </div>

              {/* SPACING */}
              <div className="h-[36px] shrink-0" />

              {/* ================================================= */}
              {/* SUPPORTING TEXT CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[110px] w-full max-w-[680px] shrink-0 flex-col items-center justify-center gap-1 text-center">
                <p className="text-[length:var(--text-body-lg)] leading-[1.3] font-normal text-text-secondary lg:text-[length:var(--text-h3)]">
                  O futuro da educação está aberto.
                </p>

                <p className="text-[length:var(--text-body-lg)] leading-[1.3] font-normal text-text-secondary lg:text-[length:var(--text-h3)]">
                  E <span className="font-semibold text-[#35d6ff]">você</span>{" "}
                  pode fazer parte.
                </p>
              </div>

              {/* SPACING */}
              <div className="h-[52px] shrink-0" />

              {/* ================================================= */}
              {/* FEATURES ROW CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[170px] w-full max-w-[1180px] shrink-0 items-start justify-center">
                {/* ================================================= */}
                {/* FEATURE ITEM */}
                {/* ================================================= */}
                <div className="relative flex h-full w-[220px] shrink-0 flex-col items-center">
                  {/* TOP CONNECTOR */}
                  <div className="absolute top-[34px] left-[190px] h-px w-[90px] bg-gradient-to-r from-[#35d6ff]/60 to-transparent" />

                  {/* ICON */}
                  <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#35d6ff]/50 bg-[#0d1628]/70 shadow-[0_0_30px_rgba(53,214,255,0.25)]">
                    <div className="h-[34px] w-[34px] rounded-full border border-[#35d6ff]/40" />
                  </div>

                  {/* SPACING */}
                  <div className="h-4 shrink-0" />

                  {/* TITLE */}
                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Explore.
                  </h3>

                  {/* SPACING */}
                  <div className="h-2 shrink-0" />

                  {/* DESCRIPTION */}
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Novos mundos
                    </p>

                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      do conhecimento.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[120px] rounded-full bg-[#35d6ff]/90 shadow-[0_0_18px_rgba(53,214,255,0.9)]" />
                </div>

                {/* ================================================= */}
                {/* FEATURE ITEM */}
                {/* ================================================= */}
                <div className="relative flex h-full w-[220px] shrink-0 flex-col items-center">
                  {/* TOP CONNECTOR */}
                  <div className="absolute top-[34px] left-[190px] h-px w-[90px] bg-gradient-to-r from-[#b56cff]/60 to-transparent" />

                  {/* ICON */}
                  <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#b56cff]/50 bg-[#0d1628]/70 shadow-[0_0_30px_rgba(181,108,255,0.25)]">
                    <div className="h-[34px] w-[34px] rounded-full border border-[#b56cff]/40" />
                  </div>

                  {/* SPACING */}
                  <div className="h-4 shrink-0" />

                  {/* TITLE */}
                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Conquiste.
                  </h3>

                  {/* SPACING */}
                  <div className="h-2 shrink-0" />

                  {/* DESCRIPTION */}
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Conquistas reais
                    </p>

                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      que ficam com você.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[120px] rounded-full bg-[#b56cff]/90 shadow-[0_0_18px_rgba(181,108,255,0.9)]" />
                </div>

                {/* ================================================= */}
                {/* FEATURE ITEM */}
                {/* ================================================= */}
                <div className="relative flex h-full w-[220px] shrink-0 flex-col items-center">
                  {/* TOP CONNECTOR */}
                  <div className="absolute top-[34px] left-[190px] h-px w-[90px] bg-gradient-to-r from-[#ffb347]/60 to-transparent" />

                  {/* ICON */}
                  <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#ffb347]/50 bg-[#0d1628]/70 shadow-[0_0_30px_rgba(255,179,71,0.25)]">
                    <div className="h-[34px] w-[34px] rounded-full border border-[#ffb347]/40" />
                  </div>

                  {/* SPACING */}
                  <div className="h-4 shrink-0" />

                  {/* TITLE */}
                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Crie.
                  </h3>

                  {/* SPACING */}
                  <div className="h-2 shrink-0" />

                  {/* DESCRIPTION */}
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Construa experiências
                    </p>

                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      e deixe sua marca.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[120px] rounded-full bg-[#ffb347]/90 shadow-[0_0_18px_rgba(255,179,71,0.9)]" />
                </div>

                {/* ================================================= */}
                {/* FEATURE ITEM */}
                {/* ================================================= */}
                <div className="relative flex h-full w-[220px] shrink-0 flex-col items-center">
                  {/* ICON */}
                  <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#6f8cff]/50 bg-[#0d1628]/70 shadow-[0_0_30px_rgba(111,140,255,0.25)]">
                    <div className="h-[34px] w-[34px] rounded-full border border-[#6f8cff]/40" />
                  </div>

                  {/* SPACING */}
                  <div className="h-4 shrink-0" />

                  {/* TITLE */}
                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Transforme.
                  </h3>

                  {/* SPACING */}
                  <div className="h-2 shrink-0" />

                  {/* DESCRIPTION */}
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Impacte vidas e
                    </p>

                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      construa o futuro.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[120px] rounded-full bg-[#6f8cff]/90 shadow-[0_0_18px_rgba(111,140,255,0.9)]" />
                </div>
              </div>

              {/* SPACING */}
              <div className="h-[48px] shrink-0" />

              {/* ================================================= */}
              {/* CTA ROW CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[104px] w-full max-w-[980px] shrink-0 items-center justify-center gap-6">
                {/* ================================================= */}
                {/* PRIMARY CTA */}
                {/* ================================================= */}
                <button className="group relative flex h-[92px] w-[500px] shrink-0 items-center gap-5 overflow-hidden rounded-[28px] border border-[#35d6ff]/50 bg-[#101624]/80 px-7 backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.015]">
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,214,255,0.22),transparent_72%)]" />

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[28px] shadow-[0_0_40px_rgba(53,214,255,0.28)]" />

                  {/* ICON */}
                  <div className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-[#35d6ff]/40 bg-[#0c1c30]/80">
                    <div className="h-[22px] w-[22px] rounded-full border border-[#35d6ff]/50" />
                  </div>

                  {/* TEXT GROUP */}
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="font-heading text-[length:var(--text-body-lg)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h4)]">
                      Entrar no Mnenus
                    </span>

                    <span className="mt-2 text-[length:var(--text-body)] leading-none font-normal text-text-secondary">
                      Ver demonstração do protótipo
                    </span>
                  </div>
                </button>

                {/* ================================================= */}
                {/* SECONDARY CTA */}
                {/* ================================================= */}
                <button className="group relative flex h-[92px] w-[360px] shrink-0 items-center gap-5 overflow-hidden rounded-[28px] border border-[#b56cff]/40 bg-[#101624]/80 px-7 backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.015]">
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,108,255,0.16),transparent_72%)]" />

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[28px] shadow-[0_0_35px_rgba(181,108,255,0.18)]" />

                  {/* ICON */}
                  <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] border border-[#b56cff]/35 bg-[#171028]/80">
                    <div className="h-[20px] w-[20px] rounded-sm border border-[#b56cff]/50" />
                  </div>

                  {/* TEXT GROUP */}
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="font-heading text-[length:var(--text-body-lg)] leading-none font-medium tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h4)]">
                      Pitch Deck
                    </span>

                    <span className="mt-2 text-[length:var(--text-body-sm)] leading-none font-normal text-text-secondary">
                      Baixar apresentação
                    </span>
                  </div>
                </button>
              </div>

              {/* SPACING */}
              <div className="h-[34px] shrink-0" />

              {/* ================================================= */}
              {/* FOOTER PHRASE CONTAINER */}
              {/* ================================================= */}
              <div className="flex h-[40px] w-fit shrink-0 items-center justify-center gap-5 px-5">
                {/* LEFT LINE */}
                <div className="h-px w-[120px] bg-gradient-to-r from-transparent to-[#35d6ff]/60" />

                {/* TEXT */}
                <p className="text-[length:var(--text-body-lg)] leading-none font-normal tracking-[-0.02em] text-text-secondary lg:text-[length:var(--text-h4)]">
                  Vamos construir o futuro juntos.
                </p>

                {/* RIGHT LINE */}
                <div className="h-px w-[120px] bg-gradient-to-l from-transparent to-[#35d6ff]/60" />
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* QR CODE FLOATING CARD */}
          {/* ================================================= */}
          <div className="absolute right-0 bottom-[8%] flex h-[500px] w-[360px] shrink-0 flex-col items-center overflow-hidden rounded-[36px] border border-[#b56cff]/50 bg-[#101624]/80 p-8 backdrop-blur-[16px] shadow-[0_0_50px_rgba(181,108,255,0.28)]">
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(181,108,255,0.22),transparent_68%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,214,255,0.12),transparent_72%)]" />

            {/* CONTENT */}
            <div className="relative z-10 flex w-full flex-col items-center">
              {/* TITLE */}
              <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary">
                Experimente agora
              </h3>

              {/* SPACING */}
              <div className="h-4 shrink-0" />

              {/* SUBTITLE */}
              <div className="flex flex-col items-center text-center">
                <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                  Escaneie para acessar
                </p>

                <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                  o protótipo interativo
                </p>
              </div>

              {/* SPACING */}
              <div className="h-8 shrink-0" />

              {/* QR BOX */}
              <div className="relative flex h-[250px] w-[250px] shrink-0 items-center justify-center rounded-[24px] border border-[#35d6ff]/70 bg-white p-3 shadow-[0_0_35px_rgba(53,214,255,0.45)]">
                {/* QR PLACEHOLDER */}
                <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-1 bg-white p-2">
                  {Array.from({ length: 49 }).map((_, index) => (
                    <div
                      key={index}
                      className={[
                        "rounded-[2px]",
                        index % 2 === 0 ||
                        index % 5 === 0 ||
                        index === 8 ||
                        index === 12 ||
                        index === 36 ||
                        index === 40
                          ? "bg-[#151a3a]"
                          : "bg-transparent",
                      ].join(" ")}
                    />
                  ))}
                </div>

                {/* CENTER LOGO */}
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#35d6ff]/50 bg-[#101624] shadow-[0_0_22px_rgba(53,214,255,0.65)]">
                  <span className="bg-gradient-to-b from-[#35d6ff] to-[#b56cff] bg-clip-text text-[length:var(--text-h3)] font-bold text-transparent">
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
