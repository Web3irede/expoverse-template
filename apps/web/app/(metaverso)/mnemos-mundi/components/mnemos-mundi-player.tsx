type MnemosMundiPlayerProps = {
  className?: string;
};

export function MnemosMundiPlayer({ className }: MnemosMundiPlayerProps) {
  return (
    <main
      className={[
        "flex flex-col justify-between items-center min-h-screen w-full overflow-hidden bg-[#020817] text-white py-5",
        "bg-[radial-gradient(circle_at_50%_20%,rgba(35,107,180,0.22),transparent_45%),linear-gradient(180deg,#03111f_0%,#020817_100%)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* HEADER */}
      <header className=" h-[70px] max-w-full w-[96vw] rounded-[22px] border border-cyan-200/15 bg-[#07172b]/70 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-xl" />

      {/* MAIN WEBGL FRAME */}
      <section className="h-[calc(100vh-240px)] w-[86.5vw]  rounded-[28px] border border-cyan-200/70 bg-[#071b35]/35 shadow-[inset_0_0_80px_rgba(56,189,248,0.08),0_0_45px_rgba(56,189,248,0.12)] backdrop-blur-[2px]" />

      {/* BOTTOM MENU */}
      <nav className="h-[74px] max-w-full w-[64vw] rounded-full border border-cyan-200/35 bg-[#071b35]/75 shadow-[0_0_40px_rgba(56,189,248,0.18)] backdrop-blur-xl" />
    </main>
  );
}