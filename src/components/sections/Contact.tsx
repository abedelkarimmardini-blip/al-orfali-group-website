'use client'
import { useState } from 'react'
import { useReveal } from '@/lib/hooks'

export default function Contact() {
  const titleRef = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', unit: '2 Bedrooms — from $220,000', source: 'Instagram / Facebook', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sendWhatsApp = () => {
    if (!form.name || !form.phone) return
    const msg = encodeURIComponent(
      `Hello Al Orfali Group!\n\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.unit}\n${form.message ? `Message: ${form.message}` : ''}\n\nPlease send me more details.`
    )
    window.open(`https://wa.me/9611234567?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-24" style={{ background: 'linear-gradient(160deg, #1a1208 0%, #0e0b05 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal mb-10">
          <div className="section-label">Get in touch</div>
          <h2 className="font-serif text-5xl md:text-7xl text-white mt-2 mb-4">Begin your<br/><span className="text-[#d8bd84] italic">private conversation.</span></h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Pre-launch pricing is available for a limited number of units. Fill in your details and our team will reach out within 2 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="reveal-left bg-white/[0.03] border border-[#B5841A]/20 rounded-2xl p-7">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">WhatsApp opened!</h3>
                <p className="text-white/45 text-sm">Your inquiry has been pre-filled. Hit send in WhatsApp and our team will reply within 2 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs text-[#B5841A] underline">Send another inquiry</button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] uppercase text-white/40 mb-2">Full name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/[0.05] border border-[#B5841A]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#B5841A]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] uppercase text-white/40 mb-2">Phone *</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+961 70 000 000"
                      className="w-full bg-white/[0.05] border border-[#B5841A]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#B5841A]/60 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] uppercase text-white/40 mb-2">Preferred unit</label>
                    <select name="unit" value={form.unit} onChange={handleChange}
                      className="w-full bg-[#1a1208] border border-[#B5841A]/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B5841A]/60 transition-colors">
                      <option>1 Bedroom — from $145,000</option>
                      <option>2 Bedrooms — from $220,000</option>
                      <option>3 Bedrooms — from $330,000</option>
                      <option>Penthouse — from $690,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] uppercase text-white/40 mb-2">How did you find us?</label>
                    <select name="source" value={form.source} onChange={handleChange}
                      className="w-full bg-[#1a1208] border border-[#B5841A]/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B5841A]/60 transition-colors">
                      <option>Instagram / Facebook</option>
                      <option>Friend / Family</option>
                      <option>Google Search</option>
                      <option>Agent / Broker</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] tracking-[0.12em] uppercase text-white/40 mb-2">Message (optional)</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="e.g. I'd prefer a high floor with sea view…"
                    rows={3}
                    className="w-full bg-white/[0.05] border border-[#B5841A]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#B5841A]/60 transition-colors resize-none"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={sendWhatsApp}
                    disabled={!form.name || !form.phone}
                    className="magnetic flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc59] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium py-3.5 rounded-lg transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    Send on WhatsApp
                  </button>
                  <a href="tel:+9611234567"
                    className="magnetic flex items-center justify-center gap-2 text-sm text-white/60 border border-white/15 hover:border-[#B5841A]/50 hover:text-white py-3.5 rounded-lg transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                    Call us directly
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Info */}
          <div className="reveal-right flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Why act now?</h3>
              {[
                { title: 'Pre-launch pricing', desc: 'Units are priced 15–20% below expected post-launch market rates. This window closes at project launch.' },
                { title: 'Only 37 units remaining', desc: '59 out of 96 units have already been reserved or sold. The best floors and views go first.' },
                { title: '40/60 payment plan', desc: 'Pay 40% during construction, 60% on delivery. No bank financing required.' },
                { title: 'Response within 2 hours', desc: 'Our sales team is available Monday–Saturday, 9am–7pm. WhatsApp replies within 2 hours.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-6 h-6 rounded-full border border-[#B5841A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B5841A]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#B5841A]/15 pt-6 mt-4">
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Office hours</div>
              <div className="text-sm text-white/50">Monday – Saturday &nbsp;·&nbsp; 9:00 am – 7:00 pm</div>
              <div className="text-sm text-white/50 mt-1">Verdun, Beirut, Lebanon</div>
              <div className="text-sm text-[#B5841A] mt-1">+961 1 234 567</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


