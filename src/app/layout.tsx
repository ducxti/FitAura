import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22c55e", // The green theme color
}

export const metadata: Metadata = {
  title: "FitAura | Weight Loss Assessment",
  description: "Find out if you're eligible for our personalized weight loss program to achieve your health goals.",
  keywords: ["weight loss", "health assessment", "diet", "fitness", "FitAura", "personalized plan"],
  authors: [{ name: "FitAura Health Team" }],
  applicationName: "FitAura Assessment",
  appleWebApp: {
    capable: true,
    title: "FitAura",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitaura.com/assessment",
    siteName: "FitAura",
    title: "FitAura Weight Loss Assessment",
    description: "Find out if you're eligible for our personalized weight loss program.",
    images: [{
      url: "https://fitaura.com/og-image.jpg", // placeholder URL
      width: 1200,
      height: 630,
      alt: "FitAura Weight Loss Assessment",
    }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
