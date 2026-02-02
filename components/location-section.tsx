'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle2,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Saharanpur Rd, beside Hotel Laxmi Palace & Bar,\nSewla Kalan, Majra, Dehradun, Uttarakhand 248171',
    action: 'Get Directions',
    link: 'https://maps.google.com/?q=Sumukha+Sports+Arena+Saharanpur+Road+Dehradun',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '094567 00459\n8077386829',
    action: 'Call Now',
    link: 'tel:+919456700459',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sumukhasportsarena@gmail.com',
    action: 'Send Email',
    link: 'mailto:sumukhasportsarena@gmail.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Sun: 6:00 AM - 12:00 AM',
    action: 'Check Status',
    link: '#',
  },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/sumukha_sports_arena' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919456700459' }
]

const quickFaqs = [
  { q: 'Do I need to book in advance?', a: 'Yes, we recommend booking at least 24 hours in advance to secure your preferred slot.' },
  { q: 'Is equipment provided?', a: 'Basic equipment like balls and bibs are available. Personal gear is recommended.' },
  { q: 'What about cancellations?', a: 'Cancellation up to 12 hours before your booking.' },
]

export function LocationSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(true) // Simulating current status

  return (
    <section id="location" className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-turf-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Find Us
          </span>
          <h2 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-turf-charcoal mb-6">
            Visit <span className="text-turf-primary">Sumukha</span> Sports Arena
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conveniently located with easy access from all parts of the city. 
            Come experience our facility in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <div className="flex items-center space-x-3 mb-8">
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className="text-gray-700 font-medium">
                Currently {isOpen ? 'Open' : 'Closed'} 
              </span>
              <span className="text-gray-500">
                • Closes at 12:00 AM
              </span>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turf-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-turf-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-turf-charcoal mb-1">{info.title}</h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line mb-3">{info.content}</p>
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-turf-primary font-medium text-sm hover:underline inline-flex items-center"
                      >
                        {info.action}
                        <Navigation className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="font-semibold text-turf-charcoal mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-turf-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="font-semibold text-turf-charcoal mb-4">Quick FAQs</h3>
              <div className="space-y-3">
                {quickFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="font-medium text-gray-700">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-turf-primary text-xl">+</span>
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: activeFaq === index ? 'auto' : 0,
                        opacity: activeFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm mt-2">{faq.a}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[500px]">
              {/* Map Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-turf-primary" />
                  <span className="font-semibold text-turf-charcoal">Sumukha Sports Arena</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Sumukha+Sports+Arena+Saharanpur+Road+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-turf-primary hover:underline"
                >
                  Open in Maps
                </a>
              </div>
              
              {/* Embedded Map */}
              <div className="relative h-[calc(100%-65px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.456370665442!2d77.9262513154296!3d30.33547128177476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2df94d3d54f1%3A0x6e4cdfe5ce2a43c1!2sSumukha%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1706789012345!"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] contrast-[1.1]"
                />
                
                {/* Custom Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="relative"
                  >
                    <div className="w-12 h-12 bg-turf-primary rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-turf-primary rotate-45" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-4 right-4 bg-turf-primary rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <p className="font-semibold">Ready to play?</p>
                  <p className="text-sm text-white/70">Book your slot now</p>
                </div>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => window.open('https://wa.me/919456700459?text=Hi! I would like to book a slot at Sumukha Sports Arena', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
