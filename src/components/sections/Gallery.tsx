'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GALLERY } from '@/lib/data'
import { useReveal } from '@/lib/hooks'

type Cat = 'all' | 'exterior' | 'interior' | 'amenities'
const CATS: { value: Cat; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'exterior', label: 'Exterior' },
  { value: 'interior', label: 'Interior' },
  { value: 'amenities', label: 'Amenities' },
]

export default function Gallery() {
  const [cat, setCat] = useState<Cat>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const titleRef = useReveal()

  const filtered = cat === 'all' ? GALLERY : GALLERY.filter(g => g.cat === cat)

  return (
    <section id="gallery" className="py-24 bg-[#101D2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-10">
          <div className="section-label">The collection</div>
          <h2 className="font-serif text-5xl md:text-7xl text-white mt-2 mb-4">Designed for a life<br/><span className="text-[#E4EBEF] italic">without compromise.</span></h2>
          <p className="text-white/40 text-sm leading-relaxed">
            Explore the official architectural vision of H7 Tower, from the first sketch to its day and night presence.
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8">
          {CATS.map(c => (
            <button
              key={c.value}
              onClick={() => setCat(c.value)}
              className={`repel-tag px-4 py-2 rounded-full text-xs border transition-all ${
                cat === c.value
                  ? 'bg-[#8FA7B8] text-white border-[#8FA7B8]'
                  : 'bg-transparent text-white/50 border-[#8FA7B8]/25 hover:border-[#8FA7B8]/60 hover:text-white/80'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.id)}
              className={`relative overflow-hidden cursor-pointer group reveal ${
                i === 0 ? 'col-span-2 row-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`relative ${i === 0 ? 'h-[320px] md:h-[520px]' : 'h-[210px] md:h-[330px]'}`}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-white/80 tracking-wide">{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (() => {
          const item = GALLERY.find(g => g.id === lightbox)
          if (!item) return null
          return (
            <div
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white text-xl"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="relative w-full max-w-4xl max-h-[80vh] mx-6" onClick={e => e.stopPropagation()}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={1200}
                  height={700}
                  className="rounded-xl object-contain w-full max-h-[80vh]"
                />
                <p className="text-white/50 text-sm text-center mt-4 tracking-wide">{item.caption}</p>
              </div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}


