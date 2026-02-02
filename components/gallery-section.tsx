'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Day View', 'Night Games', 'Facilities', 'Action Shots', 'Videos']

const galleryImages = [
  // Videos (Instagram Reels style placeholders)
  {
    id: 'v1',
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    category: 'Videos',
    alt: 'Match Highlights - Final 2024',
    type: 'video',
    videoUrl: 'https://www.instagram.com/reel/DULzJFyEyEn/embed'// User to replace
  },
  {
    id: 'v2',
    src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    category: 'Videos',
    alt: 'Training Session',
    type: 'video',
    videoUrl: 'https://www.instagram.com/reel/DULzJFyEyEn/embed'
  },
  // Existing Images - Updated for Realism
  { src: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80', category: 'Day View', alt: 'Turf Overview', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80', category: 'Night Games', alt: 'Floodlights On', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80', category: 'Facilities', alt: 'Player Dugout', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80', category: 'Day View', alt: 'Box Cricket Setup', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80', category: 'Facilities', alt: 'Parking Area', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1200&q=80', category: 'Day View', alt: 'Turf Quality', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80', category: 'Facilities', alt: 'Seating Area', type: 'image' },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }, [selectedImage, filteredImages.length])

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }, [selectedImage, filteredImages.length])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, nextImage, prevImage])

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-turf-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Visual Showcase
          </span>
          <h2 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-turf-charcoal mb-6">
            Explore Our <span className="text-turf-primary">Facility</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a visual tour through our world-class facility. From day to night,
            experience the beauty of Premier Turf Arena.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-turf-primary text-white shadow-lg shadow-turf-primary/30'
                : 'bg-white text-gray-600 hover:bg-turf-primary/10 hover:text-turf-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${index === 0 || index === 5 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${index === 0 || index === 5 ? 'aspect-[16/9] sm:aspect-square' : 'aspect-square'} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-turf-gold text-turf-charcoal text-xs font-semibold rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 sm:left-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 sm:right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Content */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages[selectedImage].type === 'video' ? (
                <div className="w-full h-full max-h-[80vh] aspect-video bg-black flex items-center justify-center">
                  {filteredImages[selectedImage].videoUrl && filteredImages[selectedImage].videoUrl !== '#' ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={filteredImages[selectedImage].videoUrl}
                      title={filteredImages[selectedImage].alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="text-white text-center">
                      <p className="mb-4 text-xl">Video Placeholder</p>
                      <p className="text-sm text-gray-400">Add your Instagram/YouTube embed link in the code</p>
                    </div>
                  )}
                </div>
              ) : (
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}

              {/* Image Info */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-medium">
                  {selectedImage + 1} / {filteredImages.length} - {filteredImages[selectedImage].alt}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
