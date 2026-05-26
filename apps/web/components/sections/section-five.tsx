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
        <div className="mx-auto flex h-full w-full max-w-[1760px] min-h-0 flex-col" />
      </div>
    </section>
  );
}
