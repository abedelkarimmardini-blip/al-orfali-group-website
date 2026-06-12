'use client'
import { useState } from 'react'
import Image from 'next/image'
import { UNITS } from '@/lib/data'
import { useReveal } from '@/lib/hooks'

type Filter = 'all' | '1br' | '2br' | '3br' | 'ph'

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All units' },
  { value: '1br', label: '1 Bedroom' },
  { value: '2br', label: '2 Bedrooms' },
  { value: '3br', label: '3 Bedrooms' },
  { value: 'ph', label: 'Penthouse' },
]

const STATUS_STYLES = {
  available: 'bg-green-900/30 text-green-400 border-green-800/30',
  reserved:  'bg-amber-900/30 text-amber-400 border-amber-800/30',
  sold:      'bg-red-900/30 text-red-400 border-red-800/30',
}

const FEATURES = [
  'Private parking bay',
  'Central A/C system',
  'High-speed elevator',
  '24/7 security & concierge',
  'Rooftop pool access',
  'Landscaped gardens',
]

function openWhatsApp(unitName: string, price: string) {
  const msg = encodeURIComponent(`Hello Al Orfali Group! I'm interested in ${unitName} priced at ${price}. Please send me more details.`)
  window.open(`https://wa.me/9611234567?text=${msg}`, '_blank')
}

export default function Units() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<number | null>(null)
  const titleRef = useReveal()

  const filtered = filter === 'all' ? UNITS : UNITS.filter(u => u.type === filter)
  const selectedUnit = UNITS.find(u => u.id === selected)

  return (
    <section id="units" className="py-24 bg-[#101D2B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-10">
          <div className="section-label">Floor plans</div>
          <h2 className="font-serif text-5xl md:text-7xl text-white mt-2 mb-4">A residence<br/><span className="text-[#E4EBEF] italic">entirely your own.</span></h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            4 unit types across 24 floors. Click any unit to view the full floor plan, interior renders, and pricing details.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex gap-2 flex-wrap mb-8">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => { setFilter(f.value); setSelected(null) }}
              className={`repel-tag px-4 py-2 rounded-full text-xs border transition-all ${
                filter === f.value
                  ? 'bg-[#8FA7B8] text-white border-[#8FA7B8]'
                  : 'bg-transparent text-white/50 border-[#8FA7B8]/25 hover:border-[#8FA7B8]/60 hover:text-white/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((unit, i) => (
            <div
              key={unit.id}
              onClick={() => setSelected(selected === unit.id ? null : unit.id)}
              className={`unit-card rounded-xl overflow-hidden cursor-pointer bg-white/[0.02] ${
                selected === unit.id ? 'selected' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={unit.img}
                  alt={unit.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-full border ${STATUS_STYLES[unit.status]} font-medium`}>
                  {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-white">{unit.name}</span>
                  <span className="text-xs text-white/40">Floor {unit.floor}</span>
                </div>
                <div className="text-xs text-white/40 mb-3 leading-relaxed">
                  {unit.area} m² &nbsp;·&nbsp; {unit.beds} bed &nbsp;·&nbsp; {unit.baths} bath &nbsp;·&nbsp; {unit.view}
                </div>
                <div className="font-serif text-xl text-[#E4EBEF]">{unit.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {selectedUnit && (
          <div className="mt-6 rounded-xl overflow-hidden border border-[#8FA7B8]/25 bg-white/[0.02] animate-[fadeIn_0.3s_ease]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#8FA7B8]/15">
              <div>
                <span className="text-base font-medium text-white">{selectedUnit.name}</span>
                <span className="text-white/40 text-sm ml-3">{selectedUnit.type.toUpperCase().replace('PH', 'Penthouse').replace('1BR','1 Bedroom').replace('2BR','2 Bedrooms').replace('3BR','3 Bedrooms')}</span>
              </div>
              <span className="text-xl font-medium text-[#8FA7B8]">{selectedUnit.price}</span>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Left — image + specs */}
              <div>
                <div className="relative h-56">
                  <Image src={selectedUnit.intImg} alt={`${selectedUnit.name} interior`} fill className="object-cover" />
                </div>
                <div className="p-5">
                  {[
                    ['Area', `${selectedUnit.area} m²`],
                    ['Floor', `${selectedUnit.floor} of 24`],
                    ['Bedrooms', selectedUnit.beds],
                    ['Bathrooms', selectedUnit.baths],
                    ['View', selectedUnit.view],
                    ['Payment', selectedUnit.payment],
                    ['Delivery', 'Q3 2026'],
                  ].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between text-xs py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-white/40">{k}</span>
                      <span className="text-white font-medium">{String(v)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — description + features + CTA */}
              <div className="p-5 border-t md:border-t-0 md:border-l border-[#8FA7B8]/15 flex flex-col">
                <p className="text-sm text-white/50 leading-relaxed mb-5">{selectedUnit.desc}</p>

                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#8FA7B8] mb-3">Included features</div>
                  <div className="grid grid-cols-1 gap-2">
                    {FEATURES.concat(selectedUnit.type === 'ph' ? ['Private rooftop terrace'] : []).map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-[#8FA7B8] flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  {selectedUnit.status !== 'sold' ? (
                    <>
                      <button
                        onClick={() => openWhatsApp(selectedUnit.name, selectedUnit.price)}
                        className="magnetic w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc59] text-white text-sm font-medium py-3 rounded transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                        </svg>
                        Inquire on WhatsApp
                      </button>
                      <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="magnetic w-full text-sm text-white/60 border border-white/15 hover:border-[#8FA7B8]/50 hover:text-white py-3 rounded transition-all"
                      >
                        Book a private viewing
                      </button>
                    </>
                  ) : (
                    <div className="text-center text-sm text-white/30 py-3">
                      This unit is sold. <button onClick={() => setFilter('all')} className="text-[#8FA7B8] underline">View available units</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}



