'use client'

export default function StickyWhatsApp() {
  const handleClick = () => {
    const msg = encodeURIComponent('Hello Al Orfali Group! I\'m interested in your pre-launch apartments. Please send me more details.')
    window.open(`https://wa.me/9611234567?text=${msg}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-[pulseGold_2s_ease-in-out_infinite]" />
      <button
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="magnetic relative w-14 h-14 bg-[#25D366] hover:bg-[#20bc59] rounded-full flex items-center justify-center transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        </svg>
      </button>
    </div>
  )
}

