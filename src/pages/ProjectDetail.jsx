import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, HardHat, ClipboardList } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { projects } from '../data/projects.js'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="py-[140px] text-center flex flex-col items-center gap-5">
        <h1 className="text-[clamp(26px,4vw,38px)]">Layihə tapılmadı</h1>
        <Link
          to="/layihelerimiz"
          className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold w-fit"
        >
          <ArrowLeft size={16} /> Bütün Layihələrə Qayıt
        </Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={project.title}
        description={project.short}
        path={`/layihelerimiz/${project.slug}`}
      />

      <section className="pt-[60px] pb-[30px]">
        <div className="container">
          <Link
            to="/layihelerimiz"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-muted hover:text-gold-600 transition-colors duration-200"
          >
            <ArrowLeft size={15} /> Bütün Layihələrə Qayıt
          </Link>
        </div>
      </section>

      <section className="pb-[70px]">
        <div className="container flex flex-col gap-12">
          <div className="grid grid-cols-[1fr_1fr] max-[980px]:grid-cols-1 gap-[60px] max-[980px]:gap-10 items-center">
            <Reveal direction="left" className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[440px] max-[560px]:h-[300px] object-cover"
              />
            </Reveal>

            <Reveal direction="right" className="flex flex-col gap-5">
              <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">
                {project.tag}
              </span>
              <h1 className="text-[clamp(24px,3.2vw,34px)] tracking-tight text-ink-900 font-bold leading-[1.2]">
                {project.title}
              </h1>
              <p className="text-muted text-[15.5px] leading-[1.8] max-w-[500px]">
                {project.intro}
              </p>

              <div className="rounded-2xl bg-navy-900 p-6 max-[560px]:p-5 flex flex-col gap-3.5 mt-1">
                <span className="inline-flex items-center gap-2 text-gold-400 text-[13px] font-bold tracking-[0.08em] uppercase">
                  <HardHat size={17} /> Mövcud Vəziyyət
                </span>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                  {project.situation.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-white/75 text-[13.5px] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-1.5" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 grid place-items-center flex-shrink-0">
                <ClipboardList size={20} />
              </span>
              <h2 className="text-[18px] font-bold text-ink-900 tracking-tight">Görülən İşlər</h2>
            </div>

            <ul className="list-none m-0 p-0 grid grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 gap-3.5">
              {project.works.map((work) => (
                <li
                  key={work}
                  className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-[1.5] bg-white border border-soft-softer rounded-xl px-4 py-3.5 shadow-card"
                >
                  <CheckCircle2 size={17} className="text-gold-600 flex-shrink-0 mt-0.5" />
                  {work}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-5 mt-2">
              {project.gallery.map(({ img, caption }, gi) => (
                <div key={gi} className="group relative rounded-[18px] overflow-hidden shadow-card">
                  <img
                    src={img}
                    alt={caption}
                    className="w-full h-[220px] max-[768px]:h-[240px] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 text-white text-[12.5px] font-semibold uppercase tracking-wide">
                    {caption}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
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

export default ProjectDetail
