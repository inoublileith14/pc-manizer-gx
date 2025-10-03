"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { EditorSection } from "@/components/editor-section"
import { GamingSection } from "@/components/gaming-section"
import { CommunitySection } from "@/components/community-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <EditorSection />
      <GamingSection />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
