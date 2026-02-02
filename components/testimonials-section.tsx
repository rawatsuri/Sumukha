'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const testimonials = [
  {
    id: 1,
    name: 'Abhishek Rawat',
    role: 'Verified Google Review',
    initials: 'AR',
    rating: 5,
    text: "Amazing turf quality! The 7-a-side field is perfect for our weekend matches. The lighting is excellent for night games. The staff is very cooperative and the booking process is smooth. Best football turf in Dehradun!",
  },
  {
    id: 2,
    name: 'Karan Singh',
    role: 'Verified Google Review',
    initials: 'KS',
    rating: 5,
    text: "Sumukha Sports Arena has the best turf in Dehradun. The FIFA-certified surface gives professional feel. We play here regularly and the maintenance is top-notch. The location on Saharanpur Road is easily accessible too.",
  },
  {
    id: 3,
    name: 'Piyush Kumar',
    role: 'Verified Google Review',
    initials: 'PK',
    rating: 5,
    text: "Great experience! The cricket box is well-maintained and the football turf is fantastic. The floodlights make evening games enjoyable. Highly recommended for anyone looking for quality sports facilities in Dehradun.",
  },
  {
    id: 4,
    name: 'Ankit Sharma',
    role: 'Verified Justdial Review',
    initials: 'AS',
    rating: 5,
    text: "Excellent sports facility in Dehradun! The 7-a-side football turf is FIFA certified and the cricket practice box is very useful. Good parking space and the staff is friendly. Worth every penny at \u20B91500 per slot.",
  },
  {
    id: 5,
    name: 'Rohit Negi',
    role: 'Verified Google Review',
    initials: 'RN',
    rating: 5,
    text: "Love playing here! The artificial turf quality is premium and the lighting system is perfect for night matches. Opening till midnight is a big plus for working professionals like me. Best sports arena in Dehradun!",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1B5E20 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-40 h-40 text-turf-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-40 h-40 text-turf-primary" />
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
          <span className="inline-block text-turf-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Social Proof
          </span>
          <h2 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-turf-charcoal mb-6">
            What Players <span className="text-turf-primary">Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what sports enthusiasts have to say about their
            experience at Sumukha Sports Arena. Rated 4.6★ on Google (67 reviews) and 4.8★ on Justdial!
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
                  >
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-turf-gold fill-turf-gold" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-8 h-8 text-turf-primary/20 mb-4" />
                    <p className="text-gray-600 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-turf-gold flex items-center justify-center">
                        <span className="text-turf-charcoal font-bold text-xl">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-turf-charcoal">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-turf-primary hover:text-white transition-colors z-10 hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-turf-primary hover:text-white transition-colors z-10 hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index
                ? 'bg-turf-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Trusted by 340+ followers on Instagram | 67 Google Reviews | 4.8★ Justdial</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Dehradun FC', 'Local Teams', 'Cricket Clubs', 'Corporate Groups', 'Sports Enthusiasts'].map((team) => (
              <div key={team} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-turf-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{team.charAt(0)}</span>
                </div>
                <span className="text-turf-charcoal font-medium">{team}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
