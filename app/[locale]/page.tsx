"use client"

import LandingMainPage from '@/components/landing-main'
import Partners from '@/components/partners'
import MissionVision from '@/components/mission-vision'
import CompanyFeaturesMarquee from '@/components/company-features-marquee'
import OurAchievements from '@/components/our-achievements'

export default function Home() {
  return (
    <main className="flex flex-col justify-between space-y-10 pb-24">
      <LandingMainPage />
      <MissionVision />
      <CompanyFeaturesMarquee />
      <OurAchievements />
      <Partners />
    </main>
  )
}
