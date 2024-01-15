import Image from 'next/image'
import AboutUsPage from '@/app/[locale]/company/about/page'
import LandingMainPage from '@/components/landing-main'
import Partners from '@/components/partners'
import { Separator } from '@/components/ui/separator'
import MissionVision from '@/components/mission-vision'
import CompanyFeaturesMarquee from '@/components/company-features-marquee'

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <LandingMainPage />
      <MissionVision />
      <CompanyFeaturesMarquee />
      <Partners />
    </main>
  )
}
