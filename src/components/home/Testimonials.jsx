import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Biz hər layihəyə məsuliyyətlə yanaşırıq, gələcəyiniz üçün etibarlı bünövrə yaradırıq.',
    author: 'Prestij İnşaat',
    role: 'Komanda Fəlsəfəsi',
  },
  {
    quote:
      'Möhkəm təməl — dayanıqlı bina. Hər mərhələdə keyfiyyət standartlarına tam uyğunluq təmin edirik.',
    author: 'Prestij İnşaat',
    role: 'İcra Prinsipimiz',
  },
]

function Testimonials() {
  return (
    <section className="py-[120px] max-[768px]:py-[80px] bg-[#f9fafb]">
      <div className="container">
        <div className="max-w-[640px] mx-auto mb-16 text-center flex flex-col items-center gap-4">
          <span className="eyebrow text-gold-600 text-xs font-bold tracking-[0.12em] uppercase">Prinsiplərimiz</span>
          <h2 className="text-[clamp(28px,3.6vw,38px)] tracking-tight text-ink-900 font-bold">
            Möhkəmliyin Və Etibarın Ustası.
          </h2>
        </div>

        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-8">
          {testimonials.map((t) => (
            <div key={t.quote} className="rounded-[24px] bg-white border border-soft-softer shadow-card p-10 max-[560px]:p-7 flex flex-col gap-6">
              <Quote size={32} className="text-gold-500" fill="currentColor" strokeWidth={0} />
              <p className="text-ink-900 text-[17px] leading-[1.7] font-medium">{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-soft-softer">
                <span className="w-11 h-11 rounded-full bg-navy-900 text-gold-400 grid place-items-center font-heading font-bold text-sm flex-shrink-0">
                  Pİ
                </span>
                <span className="flex flex-col leading-tight">
                  <strong className="text-[14px] text-ink-900 font-semibold">{t.author}</strong>
                  <span className="text-[12.5px] text-muted">{t.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
