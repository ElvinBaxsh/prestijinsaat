import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import posterImg from '../../assets/İmg-constructor-3.jpg'

const bannerVideo = '/prestij-tikinti-hero.mp4'

function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const els = rootRef.current.querySelectorAll('.hero-in')
    const tween = gsap.fromTo(
      els,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      },
    )
    // Təhlükəsizlik toru: hər hansı səbəbdən animasiya tamamlanmasa belə,
    // mətn həmişəlik görünməz qalmasın.
    const safety = setTimeout(() => {
      els.forEach((el) => {
        el.style.opacity = ''
        el.style.transform = ''
      })
    }, 1500)
    return () => {
      tween.kill()
      clearTimeout(safety)
    }
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[100svh] min-h-[560px] max-h-[880px] -mt-[130px] max-[860px]:mt-0 overflow-hidden bg-navy-900"
    >
      <video
        src={bannerVideo}
        poster={posterImg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.7
        }}
        className="absolute inset-0 w-full h-full object-cover scale-105 [filter:brightness(0.5)_blur(2px)]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35 pointer-events-none" />

      <div className="relative z-[1] h-full container flex flex-col justify-center pt-16 mt-10 pb-10 max-[560px]:pt-10 max-[560px]:mt-0 max-[560px]:pb-8">
        <h1 className="hero-in text-[clamp(28px,4.2vw,48px)] leading-[1.25] font-bold tracking-tight text-white max-w-[720px] mb-4">
          Möhkəm Təməl,
          <br />
          <span className="bg-[linear-gradient(135deg,#f5c542,#cfa12e)] bg-clip-text text-transparent [text-shadow:0_0_10px_rgba(255,200,50,0.3)]">
            Doğru Dizayn,
          </span>
          <br />
          Prestijli Gələcək.
        </h1>
        <p className="hero-in text-white/85 text-[15px] leading-[1.7] max-w-[440px] mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Layihələndirmədən açar təsliminə qədər, tikintinin hər mərhələsində
          beynəlxalq keyfiyyət standartlarını tətbiq edərək premium məkanlar
          yaradırıq.
        </p>
        <div className="hero-in flex items-center gap-[18px] flex-wrap">
          <Link
            to="/elaqe"
            className="btn btn-primary bg-[linear-gradient(135deg,#f5c542,#d4a017)] hover:brightness-110 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(212,160,23,0.4)] hover:-translate-y-[3px] hover:shadow-[0_14px_34px_rgba(212,160,23,0.5)]"
          >
            İşlərimizə Baxın <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/haqqimizda"
            className="text-white font-semibold text-[14.5px] border-b-2 border-white/30 pb-1 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Haqqımızda
          </Link>
        </div>
      </div>

      <div className="hero-in absolute bottom-9 right-9 max-[560px]:bottom-5 max-[560px]:right-5 z-[1] flex items-center gap-3.5 max-[560px]:gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3.5 max-[560px]:px-3 max-[560px]:py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-white/15">
        <span className="w-14 h-14 max-[560px]:w-9 max-[560px]:h-9 rounded-full bg-[linear-gradient(135deg,#f5c542,#d4a017)] grid place-items-center flex-shrink-0 shadow-[0_0_24px_rgba(212,175,55,0.55)]">
          <ShieldCheck className="w-6 h-6 max-[560px]:w-4 max-[560px]:h-4 text-ink-900" />
        </span>
        <span className="flex flex-col leading-tight">
          <strong className="font-heading text-2xl max-[560px]:text-base font-bold text-white">100%</strong>
          <span className="text-[13px] max-[560px]:text-[10px] text-white/90 font-medium">Zəmanətli iş</span>
        </span>
      </div>
    </section>
  )
}

export default Hero
