'use client'

import React, { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Trophy, Users, Clock, Calendar } from 'lucide-react'
import Image from 'next/image'

const stats = [
  {
    icon: Trophy,
    value: 500,
    suffix: '+',
    label: 'Matches Played',
    description: 'Successful games hosted'
  },
  {
    icon: Users,
    value: 2000,
    suffix: '+',
    label: 'Happy Players',
    description: 'Satisfied customers'
  },
  {
    icon: Clock,
    value: 17,
    suffix: ' hrs',
    label: 'Daily Operations',
    description: '7:00 AM - 12:00 AM'
  },
  {
    icon: Calendar,
    value: 2,
    suffix: '+ yrs',
    label: 'Experience',
    description: 'Serving Dehradun'
  },
]

const features = [
  {
    title: 'FIFA Certified 7-a-side Turf',
    description: 'Our artificial grass meets international FIFA standards for 7-a-side football, providing optimal ball roll, bounce, and player safety.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80', // Night turf
  },
  {
    title: 'Cricket Practice Box',
    description: 'Dedicated cricket box with high-quality surface perfect for batting and bowling practice. Netted enclosure for safe practice sessions.',
    image: 'https://turftown.s3.ap-south-1.amazonaws.com/super_admin/tt-1732112437491.webp', // User provided cricket image
  },
  {
    title: 'Professional Floodlights',
    description: 'High-quality LED floodlights illuminate the entire field for perfect night visibility. Play comfortably even after sunset.',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=80', // Lights
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useTransform(motionValue, (current) => Math.round(current))
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  React.useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      })
    }
  }, [isInView, value, motionValue])

  return (
    <span ref={ref} className="font-bebas text-5xl sm:text-6xl md:text-7xl text-turf-primary">
      <motion.span>{springValue}</motion.span>
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1B5E20 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-turf-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            About Our Facility
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-turf-charcoal mb-6"
          >
            Where <span className="text-turf-primary">Passion</span> Meets{' '}
            <span className="text-turf-gold">Perfection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Sumukha Sports Arena brings world-class sports facilities to Dehradun. Our FIFA-certified
            7-a-side football turf and cricket box provide the perfect venue for sports enthusiasts.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group"
            >
              <div className="w-14 h-14 bg-turf-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-turf-primary group-hover:text-white transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-turf-primary group-hover:text-white transition-colors" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-semibold text-turf-charcoal mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards with Alternating Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-turf-gold rounded-full" />
                  <span className="text-turf-primary font-semibold uppercase tracking-wider text-sm">
                    Feature {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-montserrat text-3xl sm:text-4xl font-bold text-turf-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center text-turf-primary font-semibold group"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-turf-gradient rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-montserrat text-3xl sm:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of players who have made Premier Turf Arena their home ground.
                Book your slot today and feel the premium difference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919456700459?text=Hi! I would like to book a slot at Sumukha Sports Arena', '_blank')}
                className="bg-turf-gold text-turf-charcoal font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Book Your Game Now
              </motion.button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
