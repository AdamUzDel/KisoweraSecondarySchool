import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AccessibilityWidget from "@/components/accessibility-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kisowera Secondary School",
  description: "Empowering minds, shaping futures",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
          <AccessibilityWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}

