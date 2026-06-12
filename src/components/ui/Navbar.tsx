'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Units', href: '#units' },
  { label: 'Availability', href: '#availability' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-white font-medium tracking-[0.2em] text-[11px] magnetic"
        >
          <Image src="/images/official/logo.jpg" alt="" width={34} height={38} className="h-9 w-8 object-cover" />
          <span>AL ORFALI <span className="text-[#E4EBEF]">GROUP</span></span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs text-white/50 hover:text-[#8FA7B8] transition-colors uppercase tracking-[0.08em] magnetic"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 border border-[#E4EBEF]/60 text-[#E4EBEF] text-[9px] font-semibold uppercase px-5 py-3 tracking-[0.16em] magnetic hover:bg-[#E4EBEF] hover:text-[#11100d] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
          Inquire Now
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-px bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#101D2B] border-t border-[#8FA7B8]/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-white/60 hover:text-[#8FA7B8] transition-colors text-left uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-2 bg-[#8FA7B8] text-white text-sm font-medium px-5 py-3 rounded tracking-wide"
          >
            Inquire Now
          </button>
        </div>
      )}
    </nav>
  )
}

