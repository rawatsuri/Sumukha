'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { GallerySection } from '@/components/gallery-section'
import { FeaturesSection } from '@/components/features-section'
import { VirtualTourSection } from '@/components/virtual-tour-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FeaturesSection />
      <VirtualTourSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
