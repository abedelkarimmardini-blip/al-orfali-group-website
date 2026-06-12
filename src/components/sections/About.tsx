'use client'
import { useReveal } from '@/lib/hooks'
import { useCounter } from '@/lib/hooks'
import { TRUST_STATS, TEAM } from '@/lib/data'
import Image from 'next/image'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useCounter(target)
  return <><span ref={ref}>0</span>{suffix}</>
}

export default function About() {
  const titleRef = useReveal()

  return (
    <section id="about" className="py-24 bg-[#08060f]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-14">
          <div className="section-label">Why Al Orfali Group</div>
          <h2 className="text-4xl font-medium text-white mt-2 mb-3">Built on decades of trust</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Since 1998, Al Orfali Group has been delivering premium residential projects across Lebanon with uncompromising quality and on-time delivery.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {TRUST_STATS.map((stat, i) => (
            <div
              key={i}
              className="reveal bg-white/[0.02] border border-[#B5841A]/15 rounded-xl p-6 text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl font-medium text-[#B5841A] mb-2">
                <Counter target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] text-white/35 tracking-[0.12em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="reveal relative h-[320px] md:h-[520px] overflow-hidden mb-16">
          <Image src="/images/penthouse-interior.png" alt="Al Orfali penthouse interior" fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
          <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 max-w-sm">
            <div className="section-label">Our design philosophy</div>
            <p className="font-serif text-2xl md:text-4xl leading-tight text-white">Quiet luxury, shaped around the way you live.</p>
          </div>
        </div>

        {/* Two col layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — story */}
          <div className="reveal-left">
            <h3 className="text-xl font-medium text-white mb-4">Our commitment to quality</h3>
            <p className="text-white/45 text-sm leading-loose mb-4">
              Every Al Orfali project is built with a single principle: the family who lives there deserves nothing less than what we would want for our own. That means premium materials, rigorous construction standards, and a building that improves with time — not one that shows wear.
            </p>
            <p className="text-white/45 text-sm leading-loose mb-6">
              Our new tower combines Lebanese craftsmanship with international design standards. Every detail — from the Italian marble lobbies to the smart building management system — reflects our belief that home is the most important investment a family makes.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#B5841A] border border-[#B5841A]/30 px-4 py-2 rounded">
                ISO 9001 Certified
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#B5841A] border border-[#B5841A]/30 px-4 py-2 rounded">
                Licensed Developer
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#B5841A] border border-[#B5841A]/30 px-4 py-2 rounded">
                OGERO Fiber-ready
              </div>
            </div>
          </div>

          {/* Right — team */}
          <div className="reveal-right">
            <h3 className="text-xl font-medium text-white mb-6">Leadership team</h3>
            <div className="grid grid-cols-2 gap-3">
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-[#B5841A]/12 rounded-xl p-4 hover:border-[#B5841A]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B5841A]/20 flex items-center justify-center text-[#B5841A] text-sm font-medium mb-3">
                    {member.initials}
                  </div>
                  <div className="text-sm font-medium text-white">{member.name}</div>
                  <div className="text-xs text-white/35 mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


