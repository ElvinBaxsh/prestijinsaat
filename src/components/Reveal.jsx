import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OFFSETS = {
  left: { x: -70, y: 0 },
  right: { x: 70, y: 0 },
  up: { x: 0, y: 50 },
}

function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const { x, y } = OFFSETS[direction] || OFFSETS.up
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        },
      )
    })
    return () => ctx.revert()
  }, [direction, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
