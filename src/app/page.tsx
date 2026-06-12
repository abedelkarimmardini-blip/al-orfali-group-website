'use client'
import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/components/ui/Cursor'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false })
const ScrollRevealInit = dynamic(() => import('@/components/ui/ScrollRevealInit'), { ssr: false })
const StickyWhatsApp = dynamic(() => import('@/components/ui/StickyWhatsApp'), { ssr: false })

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import Units from '@/components/sections/Units'
import Availability from '@/components/sections/Availability'
import Location from '@/components/sections/Location'
import Gallery from '@/components/sections/Gallery'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <Units />
        <Availability />
        <Location />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
