type MnemosMundiPlayerProps = {
  className?: string;
};

export function MnemosMundiPlayer({ className }: MnemosMundiPlayerProps) {
  return (
    <main
      className={[
        "flex flex-col justify-between items-center min-h-screen w-full overflow-hidden bg-[#020817] text-white pt-6 pb-15",
        "bg-[radial-gradient(circle_at_50%_20%,rgba(35,107,180,0.22),transparent_45%),linear-gradient(180deg,#03111f_0%,#020817_100%)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* HEADER */}
      <header className="h-[70px] max-w-full w-[96vw] rounded-[22px] border border-cyan-200/15 bg-[#07172b]/70 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-xl">
        <div className="flex h-full w-full items-center px-5">
          {/* HEADER LEFT */}
          <div className="flex h-full min-w-[340px] items-center gap-4 pr-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-white/5">
              {/* LOGO IMAGE */}
              <img src="./public/images/logo-oficial.png" alt="Mnemos Mundi Logo" className="h-6 w-6 object-contain" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-medium uppercase tracking-[0.28em] text-white">
                MNEMOS MUNDI
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-cyan-100/60">
                EXPLORE. APRENDA. TRANSFORME
              </span>
            </div>
          </div>

          <div className="h-9 w-px bg-cyan-100/10" />

          {/* HEADER CENTER */}
          <div className="flex h-full flex-1 items-center px-8">
            {/* EMPTY CENTER CONTENT */}
          </div>

          <div className="h-9 w-px bg-cyan-100/10" />

          {/* HEADER RIGHT */}
          <div className="flex h-full min-w-[210px] items-center justify-end gap-5 pl-8">
            <button
              type="button"
              aria-label="Notificações"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-cyan-50/85 hover:bg-white/5"
            >
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
              🔔
            </button>

            <button
              type="button"
              aria-label="Configurações"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cyan-50/85 hover:bg-white/5"
            >
              ⚙️
            </button>

            <div className="relative h-12 w-12 rounded-full border border-cyan-200/50 bg-[#0b2442] shadow-[0_0_22px_rgba(56,189,248,0.18)]">
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#07172b] bg-emerald-400" />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN WEBGL FRAME */}
      <section className="relative h-[calc(100vh-200px)] w-[86.5vw] rounded-[28px] border border-cyan-200/60 bg-[#071b35]/35 shadow-[inset_0_0_80px_rgba(56,189,248,0.08),0_0_45px_rgba(56,189,248,0.12)] backdrop-blur-[2px]">
        {/* FRAME STATUS - BOTTOM LEFT */}
        {/* <div className="absolute bottom-4 left-5 flex h-[54px] items-center overflow-hidden rounded-[16px] border border-cyan-200/20 bg-[#07172b]/75 shadow-[0_0_24px_rgba(56,189,248,0.08)] backdrop-blur-xl">
          <div className="flex h-full items-center gap-3 px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]" />
            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-cyan-50/85">
              Mundo conectado
            </span>
          </div>

          <div className="h-6 w-px bg-cyan-100/10" />

          <div className="px-5 text-[12px] tracking-[0.08em] text-cyan-100/55">
            WebGL • Unity
          </div>
        </div> */}

        {/* FRAME CONTROLS - BOTTOM RIGHT */}
        <div className="absolute bottom-4 right-5 flex h-[54px] items-center gap-3      ">
          <button className="flex h-9 w-9 items-center justify-center rounded-xl text-cyan-50/80 hover:bg-white/5">
            ⛶
          </button>

          {/* <button className="flex h-9 w-9 items-center justify-center rounded-xl text-cyan-50/80 hover:bg-white/5">
            ⧉
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl text-cyan-50/80 hover:bg-white/5">
            📷
          </button>

          <button className="flex h-9 items-center gap-3 rounded-xl border border-cyan-100/10 bg-white/[0.03] px-4 text-[13px] text-cyan-50/90 hover:bg-white/5">
            Mais
            <span className="text-cyan-100/60">⌄</span>
          </button> */}
        </div>
      </section>

      {/* BOTTOM MENU */}
      {/* <nav className="relative flex h-[74px] max-w-full w-[64vw] items-center justify-between rounded-full border border-cyan-200/35 bg-[#071b35]/75 px-7 shadow-[0_0_40px_rgba(56,189,248,0.18)] backdrop-blur-xl">
        <button className="flex h-12 min-w-[160px] items-center justify-center gap-3 rounded-full bg-white/[0.03] text-[13px] uppercase tracking-[0.12em] text-cyan-50/80 cursor-pointer hover:bg-[#0b2c56]/90 transition">
          <span className="text-xl">✦</span>
          Menu 1
        </button>

        <button className="flex h-12 min-w-[160px] items-center justify-center gap-3 rounded-full bg-white/[0.03] text-[13px] uppercase tracking-[0.12em] text-cyan-50/80 cursor-pointer hover:bg-[#0b2c56]/90 transition">
          <span className="text-xl">▣</span>
          Menu 2
        </button>

        <button className="absolute left-1/2 top-1/2 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/60 bg-[#0b2c56] text-3xl text-cyan-50 shadow-[0_0_15px_rgba(56,189,248,0.65),inset_0_0_16px_rgba(56,189,248,0.18)] cursor-pointer hover:bg-[#0b2c56]/90 transition hover:shadow-[0_0_26px_rgba(56,189,248,0.85),inset_0_0_20px_rgba(56,189,248,0.25)]">
          ▶
        </button>

        <button className="flex h-12 min-w-[160px] items-center justify-center gap-3 rounded-full bg-white/[0.03] text-[13px] uppercase tracking-[0.12em] text-cyan-50/80 cursor-pointer hover:bg-[#0b2c56]/90 transition">
          <span className="text-xl">◎</span>
          Menu 3
        </button>

        <button className="flex h-12 min-w-[160px] items-center justify-center gap-3 rounded-full bg-white/[0.03] text-[13px] uppercase tracking-[0.12em] text-cyan-50/80 cursor-pointer hover:bg-[#0b2c56]/90 transition">
          <span className="text-xl">⬡</span>
          Menu 4
        </button>
      </nav> */}
    </main>
  );
}
