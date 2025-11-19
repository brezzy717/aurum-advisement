import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aurum Advisement | Business Formation & Credit Building',
  description: 'Comprehensive business formation, registered agent services, marketing automation, and credit building platform. Form your entity, build business credit, and dominate your industry.',
  keywords: 'LLC formation, business credit, registered agent, business formation, credit building, Paydex score, marketing automation',
  authors: [{ name: 'Aurum Advisement' }],
  openGraph: {
    title: 'Aurum Advisement | Business Formation & Credit Building',
    description: 'Form your entity, build business credit, and dominate your industry.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aurum Advisement',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurum Advisement | Business Formation & Credit Building',
    description: 'Form your entity, build business credit, and dominate your industry.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <body className="min-h-screen bg-neutral-950 font-sans">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
