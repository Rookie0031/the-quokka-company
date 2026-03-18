import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Quokka Company | 스타트업 클라우드 아키텍처 & 교육 컨설팅",
  description:
    "스타트업의 규모와 단계에 맞는 최적의 클라우드 아키텍처를 설계하고, 팀의 클라우드 역량을 성장시킵니다. AWS, GCP 전문 컨설팅.",
  keywords: [
    "클라우드 아키텍처",
    "클라우드 컨설팅",
    "스타트업 클라우드",
    "AWS 컨설팅",
    "GCP 컨설팅",
    "클라우드 교육",
    "DevOps 컨설팅",
    "Kubernetes 교육",
    "Terraform",
    "클라우드 마이그레이션",
  ],
  openGraph: {
    title: "The Quokka Company | 스타트업 클라우드 아키텍처 & 교육 컨설팅",
    description:
      "스타트업의 규모와 단계에 맞는 최적의 클라우드 아키텍처를 설계하고, 팀의 클라우드 역량을 성장시킵니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "The Quokka Company",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
