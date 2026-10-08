import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TrustStrip } from '@/components/trust-strip'
import { EarSection } from '@/components/ear-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <EarSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
