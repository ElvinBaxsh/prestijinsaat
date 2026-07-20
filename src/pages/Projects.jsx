import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { projects } from '../data/projects.js'

const PAGE_SIZE = 3

function Projects() {
  const [visible, setVisible] = useState(PAGE_SIZE)

  const shown = projects.slice(0, visible)
  const hasMore = visible < projects.length

  return (
    <>
      <Seo
        title="İşlərimiz"
        description="Prestij İnşaatın hazırda icra etdiyi real layihələr — metal konstruksiya, beton işləri və fasad üzrə tamamlanmış və davam edən obyektlər."
        path="/layihelerimiz"
      />

      <section className="text-center flex flex-col items-center gap-[18px] py-[100px] pb-[50px]">
        <div className="container flex flex-col items-center gap-[18px]">
          <span className="eyebrow">İşlərimiz</span>
          <h1 className="text-[clamp(30px,4.5vw,46px)] max-w-[760px]">
            Hazırda İcra Olunan Layihələrimiz
          </h1>
          <p className="text-muted text-base leading-[1.8] max-w-[640px]">
            Hər layihədə mövcud vəziyyəti və görülən işləri şəffaf şəkildə
            paylaşırıq. Aşağıda davam edən real obyektlərimizlə tanış olun.
          </p>
        </div>
      </section>

      <section className="pb-[100px] max-[768px]:pb-[70px]">
        <div className="container">
          <div className="grid grid-cols-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[26px]">
            {shown.map((project, i) => (
              <Reveal key={project.slug} direction="up" delay={(i % PAGE_SIZE) * 0.08}>
                <Link
                  to={`/layihelerimiz/${project.slug}`}
                  className="group block rounded-[20px] overflow-hidden border border-soft-border/30 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/45" />
                  </div>
                  <div className="p-6 pb-7">
                    <h3 className="text-[16.5px] font-bold text-ink-900 mb-2 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted leading-[1.6] mb-4 line-clamp-2">{project.short}</p>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gold-600 transition-[gap] duration-200 group-hover:gap-2.5">
                      Ətraflı Bax <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn bg-white text-ink-900 border border-soft-border rounded-full px-8 py-4 gap-2 font-bold transition-all duration-300 hover:border-ink-900 hover:-translate-y-0.5"
              >
                Daha Çox <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-[90px] max-[768px]:py-[60px] pt-0">
        <div className="container">
          <div className="relative flex items-center justify-between gap-[30px] flex-wrap overflow-hidden rounded-[40px] max-[480px]:rounded-[28px] bg-ink-900 px-16 py-[60px] max-[560px]:px-8 max-[480px]:px-6 max-[560px]:py-10 shadow-2xl">
            <div className="absolute top-1/2 left-[30%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />
            <div className="relative z-[1]">
              <h2 className="text-[clamp(22px,3vw,28px)] mb-2 text-white font-bold">
                Növbəti layihəniz bizim işimiz olsun
              </h2>
              <p className="text-[15px] text-white/70">
                Möhkəm qururuq, gələcəyə dəyər qatırıq — komandamız hazırdır.
              </p>
            </div>
            <Link
              to="/elaqe"
              className="relative z-[1] btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Bizimlə Əlaqə <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
