import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import primaryImg from '../../assets/İmg-build.jpg'
import secondaryImg from '../../assets/İmg-constructor-4.jpg'

const points = [
  'Arxitektural yenidənqurma',
  'Fərdi metal konstruksiya',
  'Premium material təchizatı',
  'Tam layihə idarəetməsi',
]

const mobileImages = [primaryImg, secondaryImg]

function MobileImageCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i) => {
    const track = trackRef.current
    const child = track?.children[i]
    if (track && child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % mobileImages.length
        scrollToIndex(next)
        return next
      })
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    setActive(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <div className="hidden max-[560px]:block">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {mobileImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
          >
            <img src={src} alt="Prestij İnşaat" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {mobileImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              scrollToIndex(i)
              setActive(i)
            }}
            aria-label={`Şəkil ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? 'w-6 bg-gold-500' : 'w-2 bg-soft-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="py-[120px] max-[768px]:py-[80px] bg-white">
      <div className="container grid grid-cols-[0.85fr_1fr] max-[980px]:grid-cols-1 gap-[70px] max-[980px]:gap-12 items-center">
        <Reveal direction="left" className="flex flex-col gap-5">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">Haqqımızda</span>
          <h2 className="text-[clamp(28px,3.6vw,40px)] leading-[1.18] tracking-tight text-ink-900 font-bold">
            Möhkəmliyin Və Dəqiqliyin{' '}
            <span className="text-gold-600">Ustası.</span>
          </h2>
          <p className="text-muted text-[15.5px] leading-[1.8] max-w-[480px]">
            Prestij İnşaat — kompleks tikinti layihələrində struktur
            dəqiqliyi, müasir mühəndislik və şəffaf idarəetməni bir araya
            gətirən komandadır. Konseptdən təhvilə qədər hər mərhələni
            nəzarətdə saxlayırıq.
          </p>

          <div className="flex items-center flex-wrap gap-3 py-4">
            {['Möhkəmlik', 'Dəqiqlik', 'Etibar'].map((word) => (
              <span
                key={word}
                className="text-[13px] font-bold tracking-[0.06em] uppercase text-gold-700 bg-gold-50 rounded-full px-4 py-2"
              >
                {word}
              </span>
            ))}
          </div>

          <ul className="list-none m-0 p-0 grid grid-cols-2 max-[420px]:grid-cols-1 gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-[1.5]">
                <CheckCircle2 size={18} className="text-gold-600 flex-shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right">
          <div className="max-[560px]:hidden grid grid-cols-[1.1fr_0.9fr] gap-5">
            <div className="rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] mt-10">
              <img src={primaryImg} alt="Prestij İnşaat sahə işləri" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <img src={secondaryImg} alt="Prestij İnşaat metal konstruksiya" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
          <MobileImageCarousel />
        </Reveal>
      </div>
    </section>
  )
}

export default About
