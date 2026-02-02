'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  X,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Compass,
  Info
} from 'lucide-react'

// Hotspot tour data - simulating different areas of the facility
const tourSpots = [
  {
    id: 1,
    name: 'Main Turf Field',
    description: 'Our flagship FIFA-certified artificial turf spanning 50m x 30m with professional markings.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1920&q=80',
    hotspots: [
      { x: 30, y: 40, label: 'Goal Post', description: 'Professional 5-a-side goals' },
      { x: 70, y: 50, label: 'Center Circle', description: 'Perfect turf maintenance' },
    ]
  },
  {
    id: 2,
    name: 'Night View Arena',
    description: 'Experience the magic of night games under our 200+ lux LED floodlighting system.',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1920&q=80',
    hotspots: [
      { x: 50, y: 20, label: 'LED Floodlights', description: 'Professional stadium lighting' },
      { x: 25, y: 60, label: 'Player Action', description: 'Perfect visibility for night games' },
    ]
  },
  {
    id: 3,
    name: 'Changing Rooms',
    description: 'Clean and spacious changing facilities equipped with showers and secure lockers.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1920&q=80',
    hotspots: [
      { x: 40, y: 35, label: 'Locker Area', description: 'Secure personal storage' },
      { x: 65, y: 55, label: 'Shower Facility', description: 'Hot water available' },
    ]
  },
  {
    id: 4,
    name: 'Parking & Entrance',
    description: 'Spacious parking area with security and easy access to the main facility.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1920&q=80',
    hotspots: [
      { x: 60, y: 45, label: 'Main Entrance', description: 'Welcoming reception area' },
      { x: 20, y: 70, label: 'Parking Lot', description: 'Free parking for 50+ vehicles' },
    ]
  },
]

export function VirtualTourSection() {
  const [currentSpot, setCurrentSpot] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  const nextSpot = () => {
    setCurrentSpot((prev) => (prev + 1) % tourSpots.length)
    setActiveHotspot(null)
  }

  const prevSpot = () => {
    setCurrentSpot((prev) => (prev - 1 + tourSpots.length) % tourSpots.length)
    setActiveHotspot(null)
  }

  return (
    <section id="virtual-tour" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('${tourSpots[currentSpot].image}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center space-x-2 text-turf-gold font-semibold text-sm uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            <span>Interactive Experience</span>
          </span>
          <h2 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Virtual <span className="text-turf-gold">Tour</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore our facility from every angle. Navigate through different areas and discover
            what makes Premier Turf Arena truly special.
          </p>
        </motion.div>

        {/* Tour Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Viewport */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpot}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={tourSpots[currentSpot].image}
                  alt={tourSpots[currentSpot].name}
                  className="w-full h-full object-cover"
                />

                {/* Hotspots */}
                {tourSpots[currentSpot].hotspots.map((hotspot, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="absolute cursor-pointer group"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                  >
                    <div className="relative">
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 w-8 h-8 bg-turf-gold/50 rounded-full animate-ping" />
                      {/* Main Dot */}
                      <div className="relative w-8 h-8 bg-turf-gold rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 hover:scale-110 transition-transform">
                        <MapPin className="w-4 h-4 text-turf-charcoal" />
                      </div>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {activeHotspot === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-xl p-3 z-20"
                          >
                            <h4 className="font-semibold text-turf-charcoal text-sm">{hotspot.label}</h4>
                            <p className="text-gray-600 text-xs mt-1">{hotspot.description}</p>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevSpot}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSpot}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
                    {tourSpots[currentSpot].name}
                  </h3>
                  <p className="text-white/70 text-sm max-w-xl">
                    {tourSpots[currentSpot].description}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/60 text-sm">
                    {currentSpot + 1} / {tourSpots.length}
                  </span>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="flex items-center space-x-2 bg-turf-gold hover:bg-yellow-400 text-turf-charcoal px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Fullscreen Hint */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Maximize2 className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-xs">Click hotspots to explore</span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {tourSpots.map((spot, index) => (
              <button
                key={spot.id}
                onClick={() => {
                  setCurrentSpot(index)
                  setActiveHotspot(null)
                }}
                className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${currentSpot === index
                  ? 'ring-2 ring-turf-gold ring-offset-2 ring-offset-gray-900'
                  : 'opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover"
                />
                {currentSpot === index && (
                  <div className="absolute inset-0 bg-turf-gold/20" />
                )}
              </button>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: Compass, title: '360° Views', desc: 'Explore every corner' },
              { icon: Info, title: 'Interactive', desc: 'Click hotspots for details' },
              { icon: Maximize2, title: 'High Quality', desc: 'Crystal clear imagery' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
              >
                <item.icon className="w-6 h-6 text-turf-gold mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-gray-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Placeholder - Replace with actual video embed */}
              <div className="w-full h-full flex items-center justify-center bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.instagram.com/reel/DULzJFyEyEn/embed"
                  title="Facility Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
