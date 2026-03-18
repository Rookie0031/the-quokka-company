export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-accent">
              스타트업 전문 클라우드 컨설턴트
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            클라우드 위에서
            <br />
            <span className="text-accent">더 빠르게 성장</span>하세요
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            스타트업의 규모와 단계에 맞는 최적의 클라우드 아키텍처를 설계하고,
            팀의 클라우드 역량을 성장시킵니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
            >
              무료 상담 신청
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border px-8 text-base font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              서비스 알아보기
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 8h8m-4-4l4 4-4 4" />
              </svg>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { value: "50+", label: "프로젝트 수행" },
              { value: "10년+", label: "클라우드 경험" },
              { value: "AWS·GCP", label: "멀티 클라우드" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
