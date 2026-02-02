'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroHeadlines = [
  'FIFA Certified 7-a-side',
  'Cricket Box & Football',
  'Play Like a Pro',
]

export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Typing effect for headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % heroHeadlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Using high-quality image for now - can be replaced with video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Fallback gradient overlay in case image fails */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        {/* Animated particles overlay for depth */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-turf-gold rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-turf-gold rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        style={{ y: y1, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-turf-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">FIFA Certified 7-a-side Football & Cricket Box</span>
          </motion.div>

          {/* Main Headline with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-wider">
              {heroHeadlines.map((headline, index) => (
                <motion.span
                  key={headline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentHeadline === index ? 1 : 0,
                    y: currentHeadline === index ? 0 : -20,
                    display: currentHeadline === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {headline}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10"
          >
            Experience world-class sports on our FIFA-certified 7-a-side football turf and cricket box. 
            Located on Saharanpur Road, Dehradun. Perfect for matches, practice, and tournaments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="gold"
              size="xl"
              className="group cta-button"
              onClick={() => window.open('https://wa.me/919456700459?text=Hi! I would like to book a slot at Sumukha Sports Arena', '_blank')}
            >
              <span>Book Your Slot</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:text-turf-gold"
              onClick={() => scrollToSection('#virtual-tour')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              <span>Take Virtual Tour</span>
            </Button>
          </motion.div>

          {/* Quick Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-12"
          >
            {[
              { icon: '⚽', text: 'FIFA 7-a-side' },
              { icon: '🏏', text: 'Cricket Box' },
              { icon: '💡', text: 'Pro Lighting' },
              { icon: '🚗', text: 'Free Parking' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-turf-gold rounded-full"
            />
          </div>
          <ChevronDown className="w-5 h-5 text-turf-gold animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating Contact Button (Mobile) */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        href="tel:+919456700459"
        className="fixed bottom-6 right-6 z-50 lg:hidden"
      >
        <div className="w-14 h-14 bg-turf-gold rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40 animate-pulse">
          <Phone className="w-6 h-6 text-turf-charcoal" />
        </div>
      </motion.a>
    </section>
  )
}
