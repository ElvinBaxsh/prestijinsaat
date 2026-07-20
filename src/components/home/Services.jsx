import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { services } from '../../data/services.js'
import imgInsaat from '../../assets/İmg-build-4.jpg'
import imgMetal from '../../assets/İmg-constructor2.jpg'
import imgLayihe from '../../assets/layihelendirme.jpg'
import imgTemir from '../../assets/temir-repair.png'
import imgFasad from '../../assets/İmg-new-constructor3.jpg'

gsap.registerPlugin(ScrollTrigger)

const images = [imgInsaat, imgMetal, imgLayihe, imgTemir, imgFasad]

function Services() {
  const sectionRef = useRef(null)
  const scrollerRef = useRef(null)
  const [atEnd, setAtEnd] = useState(false)

  const getNearestTileIndex = (el, tiles) => {
    const center = el.scrollLeft + el.clientWidth / 2
    let nearest = 0
    let minDist = Infinity
    tiles.forEach((tile, i) => {
      const tileCenter = tile.offsetLeft + tile.offsetWidth / 2
      const dist = Math.abs(tileCenter - center)
      if (dist < minDist) {
        minDist = dist
        nearest = i
      }
    })
    return nearest
  }

  const checkAtEnd = () => {
    const el = scrollerRef.current
    if (!el) return
    const tiles = Array.from(el.querySelectorAll('.service-tile'))
    if (!tiles.length) return
    const nearest = getNearestTileIndex(el, tiles)
    setAtEnd(nearest === tiles.length - 1)
  }

  const handleArrowClick = () => {
    const el = scrollerRef.current
    if (!el) return
    const tiles = Array.from(el.querySelectorAll('.service-tile'))
    if (!tiles.length) return
    const current = getNearestTileIndex(el, tiles)
    const nextIndex = atEnd ? Math.max(0, current - 1) : Math.min(tiles.length - 1, current + 1)
    const nextTile = tiles[nextIndex]
    const target = nextTile.offsetLeft + nextTile.offsetWidth / 2 - el.clientWidth / 2

    const start = el.scrollLeft
    const change = target - start
    const duration = 400
    const frameMs = 16
    const steps = Math.round(duration / frameMs)
    let frame = 0

    const timer = setInterval(() => {
      frame += 1
      const t = Math.min(frame / steps, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      el.scrollLeft = start + change * eased
      if (t >= 1) {
        clearInterval(timer)
        setAtEnd(nextIndex === tiles.length - 1)
      }
    }, frameMs)
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-tile',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-[120px] max-[768px]:py-[80px] scroll-mt-24 bg-white">
      <div className="container">
        <div className="max-w-[640px] mb-14 flex flex-col gap-4">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">
            Xidmətlərimiz
          </span>
          <h2 className="text-[clamp(30px,4vw,42px)] tracking-tight text-ink-900 font-bold">
            Tam Dövrəli İnşaat Həlləri
          </h2>
          <p className="text-muted text-[15.5px] leading-[1.75]">
            Layihədən təhvilə qədər bütün mərhələləri özündə birləşdirən
            peşəkar xidmət spektri təqdim edirik.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            onScroll={checkAtEnd}
            className="grid grid-cols-5 gap-5 max-[980px]:grid-cols-3 max-[560px]:flex max-[560px]:grid-cols-none max-[560px]:overflow-x-auto max-[560px]:snap-x max-[560px]:snap-mandatory max-[560px]:pb-2 max-[560px]:px-[16vw] max-[560px]:[-ms-overflow-style:none] max-[560px]:[scrollbar-width:none] max-[560px]:[&::-webkit-scrollbar]:hidden max-[560px]:[scroll-padding-inline:16vw]"
          >
            {services.slice(0, 5).map((service, i) => (
              <Link
                key={service.slug}
                to={`/xidmetler#${service.slug}`}
                className="service-tile group relative block rounded-[20px] overflow-hidden aspect-[3/4.4] max-[980px]:aspect-[3/4] shadow-[0_10px_30px_-12px_rgba(20,24,31,0.25)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgba(20,24,31,0.35)] max-[560px]:w-[68vw] max-[560px]:flex-shrink-0 max-[560px]:snap-center"
              >
                <img
                  src={images[i]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

                <span className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 grid place-items-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-gold-500">
                  <ArrowUpRight size={16} className="text-ink-900" />
                </span>

                <span className="absolute bottom-4 left-4 right-4 text-white font-heading font-bold text-[16px] leading-[1.25] tracking-tight">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={handleArrowClick}
            aria-label={atEnd ? 'Sola sürüşdür' : 'Sağa sürüşdür'}
            className={`hidden max-[560px]:flex absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-ink-900/75 backdrop-blur-sm items-center justify-center transition-all duration-300 ${
              atEnd ? 'left-0 animate-nudge-x-rev' : 'right-0 animate-nudge-x'
            }`}
          >
            {atEnd ? (
              <ChevronLeft size={20} className="text-gold-400" />
            ) : (
              <ChevronRight size={20} className="text-gold-400" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
