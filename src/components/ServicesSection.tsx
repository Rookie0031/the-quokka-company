const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "클라우드 아키텍처 설계",
    description:
      "스타트업의 성장 단계에 맞춘 확장 가능한 클라우드 인프라를 설계합니다. MVP부터 스케일업까지 단계별 로드맵을 제공합니다.",
    features: [
      "AWS / GCP 멀티클라우드 설계",
      "비용 최적화 아키텍처",
      "보안 및 컴플라이언스 설계",
      "DevOps 파이프라인 구축",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "클라우드 교육 컨설팅",
    description:
      "실무 중심의 클라우드 교육으로 팀의 기술 역량을 끌어올립니다. 이론이 아닌, 바로 적용 가능한 핸즈온 교육을 제공합니다.",
    features: [
      "AWS / GCP 자격증 준비 과정",
      "Kubernetes & 컨테이너 교육",
      "IaC (Terraform) 실습 과정",
      "맞춤형 팀 교육 프로그램",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "클라우드 운영 자문",
    description:
      "이미 클라우드를 사용하고 있지만, 비용·성능·보안에 고민이 있다면. 현재 아키텍처를 진단하고 개선 방안을 제시합니다.",
    features: [
      "클라우드 비용 절감 컨설팅",
      "성능 병목 분석 및 튜닝",
      "모니터링 체계 구축",
      "장애 대응 프로세스 수립",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            제공 서비스
          </h2>
          <p className="mt-4 text-text-secondary">
            스타트업이 가장 필요로 하는 클라우드 전문 서비스를 제공합니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-surface-raised p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
