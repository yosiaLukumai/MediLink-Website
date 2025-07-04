import { HeroSection } from "@/components/hero-section"
import { ProductOverview } from "@/components/product-overview"
import { PlatformDashboard } from "@/components/platform-dashboard"
import { QuickLogSection } from "@/components/quicklog-section"
import { EpidemiologicalInsights } from "@/components/epidemiological-insights"
import { WaitlistSection } from "@/components/waitlist-section"
import { DownloadsSection } from "@/components/downloads-section"
import { AboutSection } from "@/components/about-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <ProductOverview />
        <PlatformDashboard />
        <QuickLogSection />
        <EpidemiologicalInsights />
        <WaitlistSection />
        <DownloadsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
