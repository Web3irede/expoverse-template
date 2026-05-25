import { ProblemEyebrow } from "../section-two/problem-eyebrow";
import { ProblemHeadline } from "../section-two/problem-headline";
import { ProblemStatsPanel } from "../section-two/problem-stats-panel";
import { ProblemSupportText } from "../section-two/problem-support-text";

type SectionTwoProps = {
  className?: string;
};

export function SectionTwo({ className }: SectionTwoProps) {
  return (
    <section
      aria-label="Sessao 2 - Problema"
      className={[
        "relative min-h-[1280px] overflow-hidden bg-[#050816] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-12 sm:px-10 md:px-16 lg:px-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1760px]">
          <div className="min-h-[1100px] w-full">
            <div className="grid min-h-[968px] w-full grid-cols-1 gap-8 lg:grid-cols-[1008px_672px] lg:gap-[80px]">
              <div className="min-h-[968px] w-full pt-4 lg:pl-4">
                <div className="flex min-h-[480px] w-full max-w-[760px] flex-col gap-6">
                  <ProblemEyebrow label="PROBLEMA - O MUNDO REAL FALHOU" />

                  <ProblemHeadline
                    lines={["O conhecimento", "deveria", "permanecer."]}
                    highlightedIndex={2}
                  />

                  <div className="pt-6">
                    <ProblemSupportText text="Mas a maior parte das experiencias educacionais desaparece assim que a aula termina." />
                  </div>
                </div>
              </div>

              <div className="flex min-h-[968px] w-full items-end pb-6">
                <ProblemStatsPanel />
              </div>
            </div>

            <div className="mt-[-38px] flex justify-center lg:mt-0 lg:pt-[62px]">
              <div className="min-h-[150px] w-full max-w-[760px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
