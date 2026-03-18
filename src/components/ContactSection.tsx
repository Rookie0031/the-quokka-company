export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wide text-accent uppercase">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              무료 상담 신청
            </h2>
            <p className="mt-4 text-text-secondary">
              클라우드에 대한 고민이 있으시다면, 부담 없이 연락주세요.
              <br />
              초기 상담은 무료로 진행됩니다.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            <div className="space-y-6 md:col-span-2">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary">이메일</p>
                    <p className="font-medium text-primary">
                      hello@thequokka.co
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary">위치</p>
                    <p className="font-medium text-primary">
                      서울특별시 (원격 근무)
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary">응답 시간</p>
                    <p className="font-medium text-primary">
                      24시간 이내 회신
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5 md:col-span-3">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-primary">
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-primary">
                    회사명
                  </label>
                  <input
                    type="text"
                    placeholder="스타트업 주식회사"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-primary">
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="hong@startup.com"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-primary">
                  관심 서비스
                </label>
                <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-secondary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10">
                  <option value="">선택해주세요</option>
                  <option value="architecture">클라우드 아키텍처 설계</option>
                  <option value="education">클라우드 교육 컨설팅</option>
                  <option value="operations">클라우드 운영 자문</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-primary">
                  문의 내용
                </label>
                <textarea
                  rows={4}
                  placeholder="프로젝트에 대해 간략히 알려주세요"
                  className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-accent py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
