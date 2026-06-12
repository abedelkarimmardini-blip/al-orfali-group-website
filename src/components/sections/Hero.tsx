'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const STATS = [
  { num: '24', label: 'Private floors' },
  { num: '96', label: 'Residences' },
  { num: 'Q3 2026', label: 'Completion' },
  { num: '62%', label: 'Reserved' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      if (imageRef.current) imageRef.current.style.transform = `scale(1.06) translate(${x * -12}px, ${y * -8}px)`
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 scale-[1.06] transition-transform duration-700 ease-out">
        <Image src="/images/al-orfali-hero.png" alt="Al Orfali private residences in Beirut" fill priority sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,.94)_0%,rgba(5,5,4,.54)_48%,rgba(5,5,4,.14)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080806] via-transparent to-black/35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd84]/40 to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 md:pb-16 pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[#d8bd84] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8bd84] animate-pulse" />
            A landmark collection · Beirut
          </div>
          <h1 className="font-serif text-[3.4rem] sm:text-7xl lg:text-[6.8rem] font-normal text-white leading-[0.88] tracking-[-0.045em] mb-7">
            Life, elevated<br />
            <span className="text-[#d8bd84] italic">above Beirut.</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-9 max-w-lg">
            A private residential address shaped by Mediterranean light, timeless materials, and uninterrupted views. Created by Al Orfali Group for a rare way of living.
          </p>
          <div className="flex items-center gap-3 flex-wrap mb-12">
            <button onClick={() => scrollTo('#units')} className="magnetic bg-[#c7a45d] hover:bg-[#ddc07e] text-[#11100d] text-[10px] font-semibold uppercase tracking-[0.18em] px-7 py-4 transition-colors">
              Discover residences
            </button>
            <button onClick={() => scrollTo('#gallery')} className="magnetic text-[10px] uppercase tracking-[0.18em] text-white/70 hover:text-white border border-white/25 hover:border-white/50 px-7 py-4 transition-colors">
              Explore the collection
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 border-t border-white/15 pt-6 max-w-2xl">
            {STATS.map((stat, index) => (
              <div key={stat.label} className={index > 0 ? 'sm:pl-5 sm:border-l border-white/10' : ''}>
                <div className="font-serif text-2xl text-[#d8bd84]">{stat.num}</div>
                <div className="text-[9px] text-white/40 mt-1 tracking-[0.14em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase text-white/35">
        Scroll to discover <span className="block w-14 h-px bg-[#d8bd84]/50" />
      </div>
    </section>
  )
}

