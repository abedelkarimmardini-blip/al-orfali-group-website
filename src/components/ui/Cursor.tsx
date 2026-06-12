'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onDown = () => {
      dotRef.current?.classList.add('click')
      ringRef.current?.classList.add('click')
    }
    const onUp = () => {
      dotRef.current?.classList.remove('click')
      ringRef.current?.classList.remove('click')
    }

    const addHover = () => {
      document.querySelectorAll('a,button,.magnetic,.repel-tag,.unit-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          dotRef.current?.classList.add('hover')
          ringRef.current?.classList.add('hover')
        })
        el.addEventListener('mouseleave', () => {
          dotRef.current?.classList.remove('hover')
          ringRef.current?.classList.remove('hover')
        })
      })
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px'
        dotRef.current.style.top = pos.current.y + 'px'
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    addHover()
    raf.current = requestAnimationFrame(animate)

    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
