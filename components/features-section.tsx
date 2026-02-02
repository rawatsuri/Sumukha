'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  Lightbulb, 
  ShowerHead, 
  Car, 
  Droplets, 
  Stethoscope, 
  ShoppingBag, 
  Coffee,
  Shield,
  Clock,
  Trophy,
  Users
} from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'FIFA-Standard Turf',
    description: 'Certified artificial grass that meets international standards for professional play.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Lightbulb,
    title: 'Pro Floodlighting',
    description: '200+ lux LED lights illuminate the entire field for perfect night visibility.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: ShowerHead,
    title: 'Premium Changing Rooms',
    description: 'Clean, spacious changing facilities with hot showers and lockers.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Car,
    title: 'Ample Parking',
    description: 'Free parking space for over 50 vehicles with security surveillance.',
    color: 'from-gray-500 to-slate-600',
  },
  {
    icon: Droplets,
    title: 'Water Facilities',
    description: 'Drinking water stations and cooling mist system for hot days.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Stethoscope,
    title: 'First Aid Available',
    description: 'On-site first aid kit and trained staff for emergency situations.',
    color: 'from-red-400 to-rose-500',
  },
  {
    icon: ShoppingBag,
    title: 'Equipment Rental',
    description: 'Quality footballs, bibs, cones, and other training equipment available.',
    color: 'from-purple-400 to-violet-500',
  },
  {
    icon: Coffee,
    title: 'Refreshment Area',
    description: 'Café serving beverages, snacks, and light meals for players.',
    color: 'from-orange-400 to-amber-500',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security personnel and CCTV surveillance.',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Open from 7:00 AM to 12:00 AM (midnight), 7 days a week including holidays.',
    color: 'from-teal-400 to-emerald-500',
  },
  {
    icon: Trophy,
    title: 'Tournament Ready',
    description: 'Complete setup for hosting tournaments including scoreboards.',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Users,
    title: 'Spectator Seating',
    description: 'Comfortable seating area for up to 100 spectators with shade.',
    color: 'from-pink-400 to-rose-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-turf-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-turf-gold font-semibold text-sm uppercase tracking-wider mb-4">
            World-Class Amenities
          </span>
          <h2 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Features & <span className="text-turf-gold">Amenities</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need for the perfect football experience. 
            We have thought of every detail so you can focus on your game.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="font-montserrat text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-turf-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-lg mb-6">
            And many more features waiting for you to discover...
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/919456700459?text=Hi! I would like to know more about your facilities', '_blank')}
            className="bg-white text-turf-primary font-bold py-4 px-10 rounded-full hover:bg-turf-gold hover:text-turf-charcoal transition-colors shadow-lg"
          >
            Enquire Now
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-turf-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
    </section>
  )
}
