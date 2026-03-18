export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold">
                Q
              </div>
              <span className="text-lg font-bold text-white">
                The Quokka Company
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              스타트업을 위한 클라우드 아키텍처 &amp; 교육 컨설팅
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm text-slate-400 md:items-end">
            <p>사업자등록번호: 000-00-00000</p>
            <p>대표: 장지수 | 정보통신업</p>
            <p>이메일: hello@thequokka.co</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} The Quokka Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
