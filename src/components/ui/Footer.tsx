import Image from 'next/image'

export default function Footer() {
  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B1622] border-t border-[#8FA7B8]/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 text-sm font-medium tracking-[0.12em] text-white mb-4">
              <Image src="/images/official/logo.jpg" alt="Al Orfali Group" width={48} height={54} className="h-12 w-11 object-cover" />
              <span>AL ORFALI GROUP</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Delivering premium residential living in Beirut since 1998. Quality craftsmanship, transparent process, on-time delivery.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#8FA7B8] mb-4">Quick links</div>
            {['#units','#availability','#gallery','#about','#contact'].map(href => (
              <button key={href} onClick={() => scrollTo(href)}
                className="block text-xs text-white/35 hover:text-[#8FA7B8] transition-colors py-1.5 capitalize tracking-wide">
                {href.replace('#', '')}
              </button>
            ))}
          </div>
          <div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#8FA7B8] mb-4">Contact</div>
            <div className="text-xs text-white/35 leading-loose">
              +961 1 234 567<br />
              info@alorfali.com<br />
              Verdun, Beirut, Lebanon<br />
              Mon–Sat, 9am–7pm
            </div>
            <div className="flex gap-3 mt-4">
              {['Instagram','Facebook','LinkedIn'].map(s => (
                <div key={s}
                  className="w-8 h-8 rounded-full border border-[#8FA7B8]/25 flex items-center justify-center cursor-pointer hover:border-[#8FA7B8] transition-colors text-[10px] text-white/30 hover:text-[#8FA7B8]">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.05] pt-6 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[11px] text-white/20">© 2026 Al Orfali Group. All rights reserved.</div>
          <div className="text-[11px] text-white/20">Licensed developer · Beirut, Lebanon</div>
        </div>
      </div>
    </footer>
  )
}




