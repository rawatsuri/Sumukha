'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Features', href: '#features' },
  { name: 'Virtual Tour', href: '#virtual-tour' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#location' },
]

const services = [
  '7-a-side Football Booking',
  'Cricket Box Rental',
  'Tournament Hosting',
  'Corporate Events',
  'Training Sessions',
  'Equipment Rental',
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-turf-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-turf-gold rounded-full flex items-center justify-center">
                <span className="text-turf-dark font-bold text-xl font-montserrat">S</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">
                Sumukha<span className="text-turf-gold">Sports</span>
              </span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              FIFA Certified 7-a-side Football Turf & Cricket Box in Dehradun.
              Located on Saharanpur Road. Play like a pro!
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/sumukha_sports_arena' },
                { icon: Facebook, href: 'https://facebook.com/sumukhasportsarena' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-turf-gold hover:text-turf-dark transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-montserrat font-bold text-lg mb-6 text-turf-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-white/60 hover:text-turf-gold transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-turf-gold mr-0 group-hover:mr-2 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-lg mb-6 text-turf-gold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 hover:text-turf-gold transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-montserrat font-bold text-lg mb-6 text-turf-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-turf-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60">Saharanpur Rd, beside Hotel Laxmi Palace,<br />Sewla Kalan, Majra, Dehradun, Uttarakhand 248171</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-turf-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919456700459" className="text-white/60 hover:text-turf-gold transition-colors">
                    094567 00459
                  </a>
                  <a href="tel:+918077386829" className="text-white/60 hover:text-turf-gold transition-colors">
                    8077386829
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-turf-gold flex-shrink-0" />
                <a href="mailto:bookings@sumukhasports.com" className="text-white/60 hover:text-turf-gold transition-colors">
                  bookings@sumukhasports.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-turf-gold flex-shrink-0" />
                <span className="text-white/60">Daily: 7:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sumukha Sports Arena. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center relative z-50">
              Made by
              <motion.a
                href="https://www.instagram.com/_suri31/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-turf-gold inline-flex items-center gap-1"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 215, 0)",
                  color: "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Suraj Rawat
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-xs"
                >
                  ↗
                </motion.span>
              </motion.a>
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/40 hover:text-turf-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-turf-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-turf-gold text-turf-dark rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}
