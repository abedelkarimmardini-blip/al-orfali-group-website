'use client'
import Image from 'next/image'
import { LOCATION_TAGS } from '@/lib/data'
import { useReveal } from '@/lib/hooks'

export default function Location() {
  const titleRef = useReveal()

  return (
    <section id="location" className="py-24 bg-[#142438]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-10">
          <div className="section-label">Neighborhood</div>
          <h2 className="text-4xl font-medium text-white mt-2 mb-3">Prime Beirut location</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Strategically positioned in one of Beirut&apos;s most sought-after residential districts, with everything that matters at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="reveal-left relative rounded-2xl overflow-hidden h-72 md:h-auto border border-[#8FA7B8]/15">
            <Image
              src="/images/official/h7-night.jpg"
              alt="H7 Tower at Marota City"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142438]/80 to-transparent" />
            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="w-4 h-4 bg-[#8FA7B8] rounded-full border-2 border-white mx-auto mb-2 animate-pulse" />
              <div className="bg-black/75 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded font-medium whitespace-nowrap">
                Al Orfali Tower
              </div>
            </div>
            {/* Distance ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#8FA7B8]/20 rounded-full pointer-events-none animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-[#8FA7B8]/10 rounded-full pointer-events-none" />
          </div>

          {/* Tags */}
          <div className="reveal-right flex flex-col gap-3 justify-center">
            {LOCATION_TAGS.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/[0.03] border border-[#8FA7B8]/12 rounded-xl px-5 py-4 hover:border-[#8FA7B8]/35 transition-colors"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="text-2xl" role="img" aria-label={tag.name}>{tag.icon}</span>
                <div>
                  <div className="text-sm font-medium text-white">{tag.name}</div>
                  <div className="text-xs text-white/35 mt-0.5">{tag.dist}</div>
                </div>
                <div className="ml-auto text-[10px] text-[#8FA7B8] border border-[#8FA7B8]/30 px-2 py-1 rounded">
                  {tag.dist.split(' ')[0]} {tag.dist.split(' ')[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


