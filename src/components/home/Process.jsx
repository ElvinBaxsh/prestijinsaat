import { useState } from 'react'
import imgConsult from '../../assets/certyoj.jpg'
import imgDesign from '../../assets/İmg-constructor2.jpg'
import imgBuild from '../../assets/İmg-build-3.jpg'
import imgHandover from '../../assets/Contractors-showing-site-to-clients.webp'

const steps = [
  { n: '01', title: 'Konsept & Məsləhət', desc: 'İlk görüş, sahə analizi və büdcə çərçivəsinin müəyyənləşdirilməsi.', img: imgConsult },
  { n: '02', title: 'Dizayn & Mühəndislik', desc: 'Memarlıq və konstruktiv layihələndirmə, texniki sənədləşmə.', img: imgDesign },
  { n: '03', title: 'Tikinti & Nəzarət', desc: 'Sahədə peşəkar icra, keyfiyyət və müddət nəzarəti.', img: imgBuild },
  { n: '04', title: 'Son Təhvil', desc: 'Son yoxlama, təmizlik və obyektin açar təslimi təhvili.', img: imgHandover },
]

function Process() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-navy-900 py-[100px] max-[768px]:py-[70px]">
      <div className="container">
        <div className="max-w-[640px] mb-14 flex flex-col gap-4">
          <span className="eyebrow text-gold-400 text-xs font-bold tracking-[0.12em] uppercase">Necə İşləyirik?</span>
          <h2 className="text-[clamp(28px,3.6vw,38px)] tracking-tight text-white font-bold leading-[1.2]">
            Möhkəm Nəticəyə Aparan{' '}
            <span className="text-gold-400">Aydın Yol.</span>
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_1fr] max-[860px]:grid-cols-1 gap-12 items-center">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive((prev) => (prev === i ? prev : i))}
                onMouseEnter={() => setActive(i)}
                className={`text-left flex items-start gap-5 py-5 border-t border-white/10 last:border-b transition-colors duration-300 ${
                  active === i ? 'opacity-100' : 'opacity-55 hover:opacity-80'
                }`}
              >
                <span className={`font-heading text-2xl font-bold flex-shrink-0 transition-colors ${active === i ? 'text-gold-400' : 'text-white/40'}`}>
                  {step.n}
                </span>
                <span className="flex flex-col gap-1.5 flex-1">
                  <strong className="text-white font-heading text-[17px] font-bold">{step.title}</strong>
                  {active === i && (
                    <>
                      <span className="text-white/60 text-[14px] leading-[1.7] max-w-[380px]">{step.desc}</span>
                      <span className="hidden max-[860px]:block rounded-[16px] overflow-hidden mt-2 mb-1">
                        <img src={step.img} alt={step.title} className="w-full h-[180px] object-cover" />
                      </span>
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="relative rounded-[24px] overflow-hidden shadow-2xl max-[860px]:hidden">
            {steps.map((step, i) => (
              <img
                key={step.n}
                src={step.img}
                alt={step.title}
                className={`w-full h-[420px] max-[560px]:h-[280px] object-cover transition-opacity duration-500 ${
                  i === 0 ? '' : 'absolute inset-0'
                } ${active === i ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="font-heading text-white font-bold text-lg">{steps[active].n}</span>
              <span className="text-white/85 text-[13.5px] font-medium">{steps[active].title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
