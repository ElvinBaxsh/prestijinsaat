import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from 'lucide-react'
import { services } from '../data/services.js'
import imgInsaat from '../assets/İmg-build.jpg'
import imgMetal from '../assets/İmg-constructor-5.jpg'
import imgLayihe from '../assets/layihelendirme.jpg'
import imgTemir from '../assets/İmg-build-4.jpg'
import imgFasad from '../assets/İmg-new-constructor3.jpg'

const images = [imgInsaat, imgMetal, imgLayihe, imgTemir, imgFasad]
const featured = services.slice(0, 5)
const DURATION = 5000
const total = featured.length

function ServicesCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [barFull, setBarFull] = useState(false)
  const touchStartX = useRef(null)

  const prevIndex = (active - 1 + total) % total
  const nextIndex = (active + 1) % total

  const goTo = (i) => setActive(((i % total) + total) % total)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 40) goTo(prevIndex)
    else if (delta < -40) goTo(nextIndex)
    touchStartX.current = null
    setPaused(false)
  }

  useEffect(() => {
    if (paused) return undefined
    const t = setInterval(() => setActive((a) => (a + 1) % total), DURATION)
    return () => clearInterval(t)
  }, [paused, active])

  useEffect(() => {
    setBarFull(false)
    const raf = requestAnimationFrame(() => setBarFull(true))
    return () => cancelAnimationFrame(raf)
  }, [active])

  const service = featured[active]

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-6 max-[860px]:gap-3">
        <button
          onClick={() => goTo(prevIndex)}
          className="hidden md:flex flex-col items-start gap-1.5 text-left w-[170px] flex-shrink-0 group"
        >
          <ArrowLeft size={17} className="text-gold-600 transition-transform duration-200 group-hover:-translate-x-1" />
          <strong className="text-[13.5px] font-bold text-ink-900 leading-tight">{featured[prevIndex].title}</strong>
          <span className="text-[11.5px] text-muted">Əvvəlki xidmət</span>
        </button>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-[720px] rounded-[28px] overflow-hidden bg-white shadow-[0_25px_60px_rgba(20,24,31,0.12)] grid grid-cols-[0.9fr_1.1fr] max-[640px]:grid-cols-1"
        >
          <div className="relative aspect-[4/4.4] max-[640px]:aspect-[16/10] overflow-hidden">
            {featured.map((s, i) => (
              <img
                key={s.slug}
                src={images[i]}
                alt={s.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className="relative p-9 max-[640px]:p-6 flex flex-col justify-center gap-3.5">
            <Quote size={64} className="absolute top-6 right-7 text-gold-50 max-[640px]:hidden" fill="currentColor" strokeWidth={0} />
            <span className="relative font-heading text-2xl font-bold text-soft-border">0{active + 1}</span>
            <h3 className="relative text-[24px] max-[640px]:text-[21px] font-bold text-ink-900 tracking-tight">
              {service.title}
            </h3>
            <p className="relative text-muted text-[14.5px] leading-[1.75]">{service.details}</p>
            <Link
              to={`/xidmetler#${service.slug}`}
              className="relative btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 w-fit mt-1 px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Ətraflı Bax <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-soft-softer">
            <div
              className="h-full bg-gold-500"
              style={{
                width: barFull ? '100%' : '0%',
                transition: `width ${DURATION}ms linear`,
              }}
            />
          </div>
        </div>

        <button
          onClick={() => goTo(nextIndex)}
          className="hidden md:flex flex-col items-end gap-1.5 text-right w-[170px] flex-shrink-0 group"
        >
          <ArrowRight size={17} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
          <strong className="text-[13.5px] font-bold text-ink-900 leading-tight">{featured[nextIndex].title}</strong>
          <span className="text-[11.5px] text-muted">Növbəti xidmət</span>
        </button>
      </div>

      <div className="flex items-center gap-2.5 mt-8">
        {featured.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => goTo(i)}
            aria-label={s.title}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-7 bg-gold-500' : 'w-2 bg-soft-border hover:bg-gold-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel
