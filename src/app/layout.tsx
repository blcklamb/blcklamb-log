import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blcklamb log | 김채정",
  description: "프론트엔드 기술 학습 및 공유를 합니다.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
