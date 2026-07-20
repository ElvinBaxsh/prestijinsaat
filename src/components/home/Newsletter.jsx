import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function Newsletter() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container">
        <div className="relative flex flex-col items-center text-center gap-6 overflow-hidden rounded-[40px] max-[480px]:rounded-[28px] bg-ink-900 px-16 py-[70px] max-[560px]:px-10 max-[480px]:px-6 max-[560px]:py-12 shadow-2xl">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_70%)] pointer-events-none" />

          <span className="relative z-[1] eyebrow text-gold-400 text-xs font-bold tracking-[0.12em] uppercase">
            Pulsuz Məsləhət
          </span>
          <h2 className="relative z-[1] text-[clamp(24px,3.5vw,34px)] font-bold tracking-tight max-w-[560px] text-white">
            Layihəniz üçün Pulsuz Məsləhət Alın
          </h2>
          <p className="relative z-[1] text-[15px] text-white/65 leading-relaxed max-w-[440px]">
            Tikinti, təmir və ya fasad ehtiyaclarınız üçün mütəxəssislərimizlə
            əlaqə saxlayın, sizə ən uyğun həlli birlikdə müəyyən edək.
          </p>

          <Link
            to="/elaqe"
            className="relative z-[1] btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-8 py-4 font-bold mt-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            Bizimlə Əlaqə <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
