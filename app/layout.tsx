import type { Metadata } from 'next'
import { Inter, Montserrat, Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: '400',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sumukha Sports Arena | FIFA Certified 7-a-side Football Turf Dehradun',
  description: 'Play on our FIFA Certified 7-a-side Football Turf & Cricket Box in Dehradun. Premium turf with floodlights, ₹1500 per slot. Book now: 09456700459. Located on Saharanpur Road near Hotel Laxmi Palace.',
  keywords: 'Sumukha Sports Arena, Football Turf Dehradun, Cricket Box Dehradun, 7-a-side football, FIFA certified turf, Sports ground Dehradun, Saharanpur Road, Majra Dehradun, Football ground booking, Turf rental Dehradun',
  openGraph: {
    title: 'Sumukha Sports Arena | FIFA Certified Football Turf Dehradun',
    description: 'FIFA Certified 7-a-side Football Turf & Cricket Box in Dehradun. Premium turf with floodlights. Book your slot now!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sumukha Sports Arena',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumukha Sports Arena | FIFA Certified Football Turf Dehradun',
    description: 'FIFA Certified 7-a-side Football Turf & Cricket Box. Book your slot now!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sumukhasportsarena.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="theme-color" content="#1B5E20" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsActivityLocation',
              name: 'Sumukha Sports Arena',
              description: 'FIFA Certified 7-a-side Football Turf and Cricket Box in Dehradun',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Saharanpur Rd, beside Hotel Laxmi Palace & Bar, Sewla Kalan, Majra',
                addressLocality: 'Dehradun',
                addressRegion: 'Uttarakhand',
                postalCode: '248171',
                addressCountry: 'IN',
              },
              telephone: ['+919456700459', '+918077386829'],
              openingHours: ['Mo-Su 07:00-24:00'],
              priceRange: '₹₹',
              image: 'https://sumukhasportsarena.com/og-image.jpg',
              url: 'https://sumukhasportsarena.com',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.6',
                reviewCount: '67',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
