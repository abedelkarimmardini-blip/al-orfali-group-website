'use client'
import { useReveal } from '@/lib/hooks'
import { FLOOR_PLAN_DATA } from '@/lib/data'

const DOT_STYLES = {
  available: 'bg-green-600 hover:bg-green-400',
  reserved:  'bg-amber-500 hover:bg-amber-400',
  sold:      'bg-red-600/70',
}

const STATS = [
  { label: 'Available', count: 37, color: 'text-green-400' },
  { label: 'Reserved',  count: 12, color: 'text-amber-400' },
  { label: 'Sold',      count: 47, color: 'text-red-400' },
]

export default function Availability() {
  const titleRef = useReveal()

  return (
    <section id="availability" className="py-24 bg-[#0e0b05]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-10">
          <div className="section-label">Live tracker</div>
          <h2 className="text-4xl font-medium text-white mt-2 mb-3">Building availability</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Each dot represents one unit. Updated daily by our sales team. Green = available, amber = reserved, red = sold.
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {STATS.map(s => (
            <div key={s.label} className="bg-white/[0.03] border border-[#B5841A]/12 rounded-xl p-5 text-center">
              <div className={`text-3xl font-medium ${s.color}`}>{s.count}</div>
              <div className="text-[10px] text-white/35 mt-1 tracking-[0.1em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mb-6">
          {[
            { color: 'bg-green-600', label: 'Available' },
            { color: 'bg-amber-500', label: 'Reserved' },
            { color: 'bg-red-600/70', label: 'Sold' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-xs text-white/40">
              <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Floor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[480px] overflow-y-auto pr-1" data-lenis-prevent>
          {FLOOR_PLAN_DATA.map(({ floor, units }) => (
            <div
              key={floor}
              className="bg-white/[0.02] border border-[#B5841A]/10 rounded-lg p-3 reveal"
              style={{ animationDelay: `${(24 - floor) * 0.02}s` }}
            >
              <div className="text-[10px] text-white/35 tracking-[0.08em] mb-2">Floor {floor}</div>
              <div className="flex gap-1.5 flex-wrap">
                {units.map((status, i) => (
                  <div
                    key={i}
                    title={`Floor ${floor} · Unit ${i + 1} · ${status}`}
                    className={`w-4 h-4 rounded-sm cursor-pointer transition-colors ${DOT_STYLES[status as keyof typeof DOT_STYLES]}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/20 mt-4 tracking-wide">
          Last updated: today · Data provided by Al Orfali Group sales team
        </p>
      </div>
    </section>
  )
}


