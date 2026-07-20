import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import featureImg from '../../assets/İmg-constructor.jpg'

const points = [
  'Arxitektural dəqiqlik',
  'Şəffaf layihə idarəetməsi',
  'Müasir mühəndislik bacarığı',
  'Qüsursuz sənətkarlıq',
]

function SecondFeature() {
  return (
    <section className="py-[120px] max-[768px]:py-[80px] bg-white">
      <div className="container grid grid-cols-[1.05fr_0.95fr] max-[980px]:grid-cols-1 gap-[70px] max-[980px]:gap-12 items-center">
        <Reveal direction="right" className="flex flex-col gap-5 min-[981px]:order-2">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">Standartımız</span>
          <h2 className="text-[clamp(28px,3.6vw,38px)] leading-[1.2] tracking-tight text-ink-900 font-bold">
            Müasir Tikintidə{' '}
            <span className="text-gold-600">Standartı Müəyyən Edirik.</span>
          </h2>
          <p className="text-muted text-[15.5px] leading-[1.8] max-w-[460px]">
            Hər sahədə təhlükəsizlik qaydalarına tam əməl edərək, dəqiq
            qrafikə uyğun və yüksək keyfiyyət standartlarında layihələr
            təhvil veririk.
          </p>

          <ul className="list-none m-0 p-0 flex flex-col gap-3.5 mt-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[14.5px] text-ink-700 font-medium">
                <CheckCircle2 size={19} className="text-gold-600 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mt-3">
            <Link
              to="/elaqe"
              className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Əlaqə <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/haqqimizda"
              className="btn bg-transparent text-ink-900 border border-soft-border rounded-full px-7 py-4 transition-all duration-300 hover:border-ink-900"
            >
              Ətraflı
            </Link>
          </div>
        </Reveal>

        <Reveal
          direction="left"
          className="rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-[981px]:order-1"
        >
          <img
            src={featureImg}
            alt="Prestij İnşaat — sahədə mühəndis nəzarəti"
            className="w-full h-[460px] max-[560px]:h-[300px] object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default SecondFeature
