import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import gapImg from '../../assets/İmg-beton.jpg'

const points = [
  'Sahə analizi',
  'Material seçimi',
  'Struktur auditi',
  'Material logistikası',
  'Büdcə proqnozlaşdırma',
  'Vaxt qrafiki planlaması',
]

function GapSection() {
  return (
    <section className="py-[120px] max-[768px]:py-[80px] bg-[#f9fafb]">
      <div className="container grid grid-cols-[0.9fr_1.1fr] max-[980px]:grid-cols-1 gap-16 max-[980px]:gap-10 items-center">
        <Reveal direction="left" className="flex flex-col gap-5">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">Fərq Yaradan Detallar</span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] tracking-tight text-ink-900 font-bold leading-[1.2]">
            Konsepsiya İlə Struktur Reallıq Arasında Körpü Qururuq.
          </h2>
          <p className="text-muted text-[15px] leading-[1.8] max-w-[440px]">
            Vizual ideyanın icra oluna bilən layihəyə çevrilməsi üçün lazım
            olan bütün texniki addımları öz komandamızla təmin edirik.
          </p>

          <ul className="list-none m-0 p-0 grid grid-cols-2 max-[420px]:grid-cols-1 gap-x-6 gap-y-3.5 mt-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[14px] text-ink-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/elaqe"
            className="btn btn-primary bg-ink-900 hover:bg-navy-800 text-white border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5 w-fit mt-3"
          >
            Layihənizi Müzakirə Edək <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <Reveal direction="right" className="rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <img
            src={gapImg}
            alt="Prestij İnşaat — beton işləri"
            className="w-full h-[460px] max-[560px]:h-[300px] object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default GapSection
