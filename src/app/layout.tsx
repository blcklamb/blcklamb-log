import IconLoader from "@/components/IconLoader";
import NavigationLoadingCursor from "@/components/NavigationLoadingCursor";
import SiteHeader from "@/components/SiteHeader";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.blcklamb.net"),
  title: "blog blcklamb | 김채정",
  description: "프론트엔드 기술 학습 및 공유를 합니다.",
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "blog.blcklamb",
    description: "프론트엔드 기술 학습 및 공유를 합니다.",
    url: "/",
    siteName: "blog.blcklamb",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "blog.blcklamb",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "blog.blcklamb",
    description: "프론트엔드 기술 학습 및 공유를 합니다.",
    images: ["/og-image.png"],
  },
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
