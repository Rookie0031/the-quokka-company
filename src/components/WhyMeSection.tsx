const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "빠른 의사결정",
    description:
      "대형 컨설팅펌과 다릅니다. 불필요한 보고 체계 없이 빠르게 의사결정하고, 곧바로 실행합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "스타트업 맞춤형",
    description:
      "제한된 예산과 빠른 성장이라는 스타트업의 현실을 이해합니다. 과잉 설계 없이 꼭 필요한 만큼만 설계합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "지식 전수",
    description:
      "단순 외주가 아닙니다. 팀이 스스로 운영할 수 있도록 지식을 전수하고, 장기적인 기술 자립을 돕습니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "실전 경험",
    description:
      "다양한 스타트업과 엔터프라이즈 프로젝트 경험을 바탕으로, 검증된 아키텍처 패턴을 적용합니다.",
  },
];

export default function WhyMeSection() {
  return (
    <section id="why-me" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Why Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            왜 더쿼카 컴퍼니인가
          </h2>
          <p className="mt-4 text-text-secondary">
            대형 컨설팅펌이 아닌, 스타트업 전문 파트너를 선택해야 하는 이유
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 rounded-2xl border border-border p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                {reason.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
