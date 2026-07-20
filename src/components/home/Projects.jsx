import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { projects } from '../../data/projects.js'

function Projects() {
  return (
    <section className="py-[120px] max-[768px]:py-[80px] bg-[#f9fafb]">
      <div className="container">
        <div className="max-w-[640px] mx-auto mb-16 text-center flex flex-col items-center gap-4">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">
            İşlərimiz
          </span>
          <h2 className="text-[clamp(30px,4vw,42px)] tracking-tight text-ink-900 font-bold">
            Hazırda İcra Olunan Layihələrimiz
          </h2>
          <p className="text-muted text-[15.5px] leading-[1.75]">
            Müxtəlif miqyaslı obyektlərdə davam edən real layihələrimizdən seçmələr.
          </p>
        </div>

        <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[28px]">
          {projects.slice(0, 4).map(({ slug, cover, title, short }, i) => (
            <Reveal
              key={slug}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 0.06}
              className={i % 2 === 0 ? 'max-[980px]:mt-0 md:mt-0' : 'md:mt-12'}
            >
              <Link
                to={`/layihelerimiz/${slug}`}
                className="group block rounded-[20px] overflow-hidden border border-soft-border/30 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={cover}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/45" />
                </div>
                <div className="p-6 pb-7">
                  <h3 className="text-[16.5px] font-bold text-ink-900 mb-2 tracking-tight leading-tight">{title}</h3>
                  <p className="text-[13px] text-muted leading-[1.6] mb-4 line-clamp-2">{short}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gold-600 transition-[gap] duration-200 group-hover:gap-2.5">
                    Daha Ətraflı <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Link
            to="/layihelerimiz"
            className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full px-8 py-4 gap-2 font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            Bütün Layihələrə Bax <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
