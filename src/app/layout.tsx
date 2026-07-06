import IconLoader from "@/components/IconLoader";
import NavigationLoadingCursor from "@/components/NavigationLoadingCursor";
import SiteHeader from "@/components/SiteHeader";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog blcklamb | 김채정",
  description: "프론트엔드 기술 학습 및 공유를 합니다.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <NavigationLoadingCursor />
        <IconLoader />
      </body>
    </html>
  );
}
