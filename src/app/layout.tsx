import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "./providers";
import { MatrixRain } from "@/components/MatrixRain";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XRPL Universe | Discover the Future of Decentralized Apps",
  description: "XRPレジャー上の革新的なdAppsを探索しよう。DeFi、NFT、そしてその先へ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} antialiased`}>
        <Providers>
          <MatrixRain />
          {children}
        </Providers>
      </body>
    </html>
  );
}
