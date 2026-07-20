import { useEffect, useState } from 'react'
import logo from '../assets/logo3.png'

function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [popped, setPopped] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setPopped(true))
    const t1 = setTimeout(() => setFading(true), 750)
    const t2 = setTimeout(() => setVisible(false), 1250)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[300] bg-navy-900 flex flex-col items-center justify-center gap-4 transition-all duration-500 ease-out ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <img
        src={logo}
        alt="Prestij İnşaat"
        className={`w-20 h-20 object-contain transition-all duration-700 ease-out ${
          popped ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      />
      <span
        className={`flex flex-col items-center leading-tight transition-all duration-700 ease-out delay-100 ${
          popped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <strong className="font-heading text-lg tracking-[3px] text-white">PRESTIJ</strong>
        <em className="not-italic text-[11px] tracking-[4px] text-gold-400 mt-1 uppercase">İnşaat</em>
      </span>
      <span className="relative w-32 h-[3px] bg-white/10 rounded-full overflow-hidden mt-2">
        <span
          className="absolute inset-y-0 left-0 bg-gold-500 rounded-full"
          style={{
            width: popped ? '100%' : '0%',
            transition: 'width 900ms ease-out',
          }}
        />
      </span>
    </div>
  )
}

export default PageLoader
