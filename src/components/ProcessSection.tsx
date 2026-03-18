const steps = [
  {
    step: "01",
    title: "상담 & 요구사항 분석",
    description:
      "현재 인프라 상태, 비즈니스 목표, 기술적 과제를 파악합니다. 무료 초기 상담을 통해 프로젝트의 방향을 함께 설정합니다.",
  },
  {
    step: "02",
    title: "아키텍처 설계 & 제안",
    description:
      "요구사항에 기반한 최적의 클라우드 아키텍처를 설계하고, 상세한 제안서와 견적을 제공합니다.",
  },
  {
    step: "03",
    title: "구현 & 마이그레이션",
    description:
      "설계된 아키텍처를 실제로 구현합니다. IaC 기반으로 재현 가능한 인프라를 구축하고, 안전하게 마이그레이션합니다.",
  },
  {
    step: "04",
    title: "교육 & 인수인계",
    description:
      "구축된 인프라에 대한 운영 교육을 진행합니다. 팀이 자체적으로 운영하고 확장할 수 있도록 문서와 교육을 제공합니다.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Process
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            진행 프로세스
          </h2>
          <p className="mt-4 text-text-secondary">
            체계적인 4단계 프로세스로 프로젝트를 진행합니다
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex gap-6 md:gap-10">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-white font-bold text-lg shadow-lg shadow-accent/20">
                  {step.step}
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-surface-raised p-6 transition-all hover:border-accent/30 hover:shadow-md md:p-8">
                  <h3 className="mb-2 text-lg font-bold text-primary md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
