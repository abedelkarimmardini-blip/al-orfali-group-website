'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setHidden(true), 400)
          return 100
        }
        return p + Math.random() * 12
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen ${progress >= 100 ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-6">
        <Image src="/images/official/logo.jpg" alt="Al Orfali Group" width={86} height={98} className="h-24 w-[86px] object-cover" priority />
        <div className="loading-bar">
          <div className="loading-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div className="text-[10px] tracking-[0.15em] uppercase text-white/25">
          {progress < 100 ? 'Loading experience...' : 'Welcome'}
        </div>
      </div>
    </div>
  )
}


