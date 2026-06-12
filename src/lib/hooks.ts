'use client'
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useRevealChildren(selector = '.reveal-child', threshold = 0.1) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const children = Array.from(container.querySelectorAll(selector)) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )
    children.forEach(child => observer.observe(child))
    return () => observer.disconnect()
  }, [selector, threshold])

  return containerRef
}

export function useCounter(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = target / (duration / 16)
          const timer = setInterval(() => {
            start = Math.min(start + step, target)
            el.textContent = Math.round(start).toString()
            if (start >= target) clearInterval(timer)
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
