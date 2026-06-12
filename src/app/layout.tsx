import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Al Orfali Group | H7 Tower',
  description: 'Discover H7 Tower, a sculptural residential landmark by Al Orfali Group.',
  metadataBase: new URL('https://al-orfali-group.up.railway.app'),
  openGraph: {
    title: 'Al Orfali Group | H7 Tower',
    description: 'Discover H7 Tower, a sculptural residential landmark by Al Orfali Group.',
    images: ['/images/official/hero-official.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#101D2B]">
      <body>{children}</body>
    </html>
  )
}

