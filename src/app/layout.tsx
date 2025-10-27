import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GrowthBook } from '@growthbook/growthbook';
import ClientGrowthBookProvider from '@/components/growthbook-provider';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Завантажуємо features НА СЕРВЕРІ
  const gb = new GrowthBook({
    apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST || 'https://cdn.growthbook.io',
    clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
  });
  
  await gb.loadFeatures({ timeout: 1000 });
  const features = gb.getFeatures();
  gb.destroy();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientGrowthBookProvider features={features}>
          {children}
        </ClientGrowthBookProvider>
      </body>
    </html>
  );
}