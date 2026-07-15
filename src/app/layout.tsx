import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitAura - Weight Loss Journey",
  description: "Begin your personalized weight loss program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Anti-flicker boot: синхронно (beforeInteractive, до першого paint) реєструє стиль
            .gb-prehide, яким ai-bridge ховає target-и експериментів до підміни варіанту.
            Незалежний timeout-fallback розховує все через 2s — контент НІКОЛИ не лишиться
            прихованим, навіть якщо ai-bridge.js не завантажився/впав (інваріант VWO). */}
        <Script id="gb-antiflicker-boot" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var s = document.createElement("style");
                s.id = "gb-antiflicker";
                s.textContent = ".gb-prehide{visibility:hidden !important;}";
                (document.head || document.documentElement).appendChild(s);
                setTimeout(function () {
                  var h = document.querySelectorAll(".gb-prehide");
                  for (var i = 0; i < h.length; i++) h[i].classList.remove("gb-prehide");
                }, 2000);
              } catch (e) {}
            })();
          `}
        </Script>

        {/* GrowthBook AI Bridge — глобальні змінні для bridge */}
        <Script id="gb-ai-bridge-config" strategy="beforeInteractive">
          {`
            window.GB_API_HOST = "https://qagrowthappai.duckdns.org";
            window.GB_SDK_KEY  = "sdk-AGFfL8SiNWoatL7K";
          `}
        </Script>

        {/* GrowthBook SDK auto bundle: завантажує фічі, ставить window._growthbook */}
        {/* beforeInteractive — щоб document.currentScript був валідний і data-* атрибути зчитались */}
        <Script
          id="gb-sdk-auto"
          src="https://cdn.jsdelivr.net/npm/@growthbook/growthbook/dist/bundles/auto.min.js"
          strategy="beforeInteractive"
          data-client-key="sdk-AGFfL8SiNWoatL7K"
          data-api-host="https://qagrowthappai.duckdns.org"
        />

        {/* AI bridge: інвентар DOM, трекінг подій, застосування A/B варіантів */}
        {/* afterInteractive — щоб window._growthbook вже існував коли bridge стартує */}
        <Script
          id="gb-ai-bridge"
          src="https://qagrowthappai.duckdns.org/static/ai-bridge.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
