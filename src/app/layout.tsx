import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Al Orfali Group | Private Residences in Beirut',
  description: 'A landmark collection of private residences above Beirut, crafted by Al Orfali Group.',
  metadataBase: new URL('https://al-orfali-group.up.railway.app'),
  openGraph: {
    title: 'Al Orfali Group | Private Residences in Beirut',
    description: 'A landmark collection of private residences above Beirut.',
    images: ['/images/al-orfali-hero.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#080806]">
      <body>{children}</body>
    </html>
  )
}
