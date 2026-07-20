import { Link } from 'react-router-dom'
import {
  Target,
  Eye,
  Gem,
  Handshake,
  Building2,
  ClipboardList,
  Hammer,
  KeyRound,
  ArrowRight,
} from 'lucide-react'
import ServicesCarousel from '../components/ServicesCarousel.jsx'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import heroImg from '../assets/haqqimizda-about.jpg'
import storyImg from '../assets/bizimhekaye.jpg'
import bannerImg from '../assets/services-bg.jpg'

const values = [
  {
    icon: Gem,
    title: 'Keyfiyyət',
    desc: 'Hər layihədə beynəlxalq standartlara uyğun material və texnologiya.',
  },
  {
    icon: Handshake,
    title: 'Etibarlılıq',
    desc: 'Verilən sözün icrası — müqavilə şərtlərinə tam riayət.',
  },
  {
    icon: Target,
    title: 'Dəqiqlik',
    desc: 'Planlaşdırılan büdcə və müddətlərə ciddi əməl olunması.',
  },
  {
    icon: Eye,
    title: 'Şəffaflıq',
    desc: 'Layihənin hər mərhələsində müştəri ilə açıq ünsiyyət.',
  },
]

const process = [
  { icon: ClipboardList, title: 'Layihələndirmə', desc: 'Konsepsiya, memarlıq və mühəndislik həlləri.' },
  { icon: Building2, title: 'Planlaşdırma', desc: 'Büdcə, resurs və qrafikin hazırlanması.' },
  { icon: Hammer, title: 'İcra', desc: 'Peşəkar komanda ilə tikinti-quraşdırma işləri.' },
  { icon: KeyRound, title: 'Təhvil', desc: 'Keyfiyyət yoxlaması və açar təslim təhvil.' },
]

function About() {
  return (
    <>
      <Seo
        title="Haqqımızda"
        description="Prestij İnşaat haqqında — möhkəmlik, dəqiqlik və etibar prinsipləri ilə çalışan peşəkar tikinti komandası, iş prosesimiz və dəyərlərimiz."
        path="/haqqimizda"
      />
      <section className="relative overflow-hidden py-[60px] pb-10">
        <div className="container grid grid-cols-2 max-[980px]:grid-cols-1 gap-[60px] max-[980px]:gap-10 items-center text-left py-[60px] pb-[90px] max-[980px]:py-10">
          <div className="flex flex-col items-start gap-6">
            <span className="eyebrow">Haqqımızda</span>
            <h1 className="text-[clamp(30px,4.5vw,46px)] max-w-[760px]">
              Prestij İnşaat — Möhkəmliyin Etibar Simvolu
            </h1>
            <p className="text-muted text-base leading-[1.8] max-w-[640px]">
              İnşaat, metal konstruksiya, layihələndirmə, təmir və fasad
              sahələrində fəaliyyət göstərən şirkətimiz, bu günə qədər
              180-dən çox layihəni uğurla təhvil verib.
            </p>
            <div className="flex gap-4 mt-3 flex-wrap">
              <Link
                to="/elaqe"
                className="btn btn-primary border-none rounded-full gap-2 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Bizimlə Əlaqə <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-full rounded-[28px] overflow-hidden shadow-soft opacity-0 animate-rise-in motion-reduce:opacity-100 motion-reduce:animate-none aspect-[4/3.4]">
              <img
                src={heroImg}
                alt="Prestij İnşaat tikinti sahəsi"
                className="w-full h-full object-cover brightness-[0.85]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] max-[768px]:py-[70px]">
        <div className="container grid grid-cols-[0.8fr_1.2fr] max-[980px]:grid-cols-1 gap-[60px] max-[980px]:gap-10 items-center">
          <Reveal direction="right" className="flex flex-col gap-4 min-[981px]:order-2">
            <span className="eyebrow">Bizim Hekayəmiz</span>
            <h2 className="text-[clamp(28px,4vw,40px)]">Etibarlı Tikinti, Davamlı Tərəfdaşlıq</h2>
            <p className="text-muted text-[15.5px] leading-[1.8]">
              Prestij İnşaat kiçik bir komandadan başlayaraq bu gün müasir
              inşaat sektorunda tanınan brendə çevrilib. Missiyamız hər
              müştəriyə fərdi yanaşma ilə davamlı, təhlükəsiz və estetik
              cəhətdən üstün obyektlər təqdim etməkdir.
            </p>
            <p className="text-muted text-[15.5px] leading-[1.8]">
              Mülki və sənaye tikintisindən tutmuş metal konstruksiya
              istehsalına, fasad sistemlərindən layihələndirməyə qədər geniş
              xidmət spektrimizlə hər ölçüdə layihəyə həll təqdim edirik.
            </p>
            <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-5 mt-3">
              <div className="flex gap-3.5 items-start p-5 rounded-2xl bg-gold-50 border border-soft-border">
                <Target size={22} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ink-900 text-[15px] mb-1">Missiyamız</strong>
                  <span className="text-[13.5px] text-muted leading-[1.6]">
                    Keyfiyyətli və vaxtında icra olunan tikinti həlləri təqdim etmək.
                  </span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start p-5 rounded-2xl bg-gold-50 border border-soft-border">
                <Eye size={22} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ink-900 text-[15px] mb-1">Vizyonumuz</strong>
                  <span className="text-[13.5px] text-muted leading-[1.6]">
                    Regionda inşaat sənayesinin lider və etibarlı brendi olmaq.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="rounded-3xl overflow-hidden shadow-soft max-[980px]:max-w-[360px] max-[980px]:mx-auto min-[981px]:order-1">
            <img
              src={storyImg}
              alt="Komandamız sahədə iş prosesi"
              className="w-full h-full object-cover aspect-[4/4.6]"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative h-80 max-[980px]:h-[260px] max-[560px]:h-[220px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Layihələndirmə çertyojları"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,24,40,0.85),rgba(16,24,40,0.55))] flex items-center">
          <div className="container flex flex-col gap-3 max-w-[560px]">
            <span className="eyebrow text-gold-400 before:bg-gold-400">Necə İşləyirik</span>
            <h2 className="text-[clamp(24px,3.4vw,34px)] text-white">
              Hər Layihədə Sınanmış, Şəffaf Proses
            </h2>
          </div>
        </div>
      </section>

      <section className="py-[100px] max-[768px]:py-[70px]">
        <div className="container">
          <div className="max-w-[640px] mx-auto mb-14 text-center flex flex-col items-center gap-3.5">
            <span className="eyebrow">İş Prosesi</span>
            <h2 className="text-[clamp(28px,4vw,40px)]">Layihədən Təhvilə Qədər</h2>
          </div>
          <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[22px]">
            {process.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative p-[30px] px-6 rounded-[18px] bg-white border border-soft-softer shadow-card"
              >
                <div className="absolute top-4 right-5 font-heading text-2xl font-bold text-soft-border">
                  0{i + 1}
                </div>
                <div className="w-[50px] h-[50px] grid place-items-center rounded-xl bg-gold-50 text-gold-600 mb-[18px]">
                  <Icon size={22} />
                </div>
                <h3 className="text-[17px] mb-2">{title}</h3>
                <p className="text-muted text-sm leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] max-[768px]:py-[70px]">
        <div className="container">
          <div className="max-w-[640px] mx-auto mb-14 text-center flex flex-col items-center gap-3.5">
            <span className="eyebrow">Xidmətlərimiz</span>
            <h2 className="text-[clamp(28px,4vw,40px)]">Fəaliyyət Göstərdiyimiz Sahələr</h2>
            <p className="text-muted text-base leading-[1.7]">
              İnşaatdan fasada qədər hər mərhələni öz komandamızla həyata
              keçiririk ki, layihəniz tək əldən idarə olunsun.
            </p>
          </div>

          <ServicesCarousel />
        </div>
      </section>

      <section className="py-[100px] max-[768px]:py-[70px]">
        <div className="container">
          <div className="max-w-[640px] mx-auto mb-14 text-center flex flex-col items-center gap-3.5">
            <span className="eyebrow">Dəyərlərimiz</span>
            <h2 className="text-[clamp(28px,4vw,40px)]">Bizi Fərqləndirən Prinsiplər</h2>
          </div>
          <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[22px]">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-[30px] px-6 rounded-[18px] bg-white border border-soft-softer shadow-card text-gold-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <Icon size={26} strokeWidth={1.8} />
                <h3 className="text-ink-900 text-[17px] mt-4 mb-2">{title}</h3>
                <p className="text-muted text-sm leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px]">
        <div className="container">
        <div className="relative flex items-center justify-between gap-[30px] flex-wrap overflow-hidden rounded-[32px] max-[480px]:rounded-[24px] bg-navy-900 px-14 py-[50px] max-[560px]:px-8 max-[480px]:px-6 max-[560px]:py-9 bg-[linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[length:36px_36px]">
          <div className="absolute top-1/2 left-[30%] w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_70%)] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="text-[clamp(22px,3vw,28px)] mb-2 text-white">Növbəti layihənizi birlikdə quraq</h2>
            <p className="text-[15px] text-white/70">
              İstər kiçik təmir, istərsə də iri sənaye obyekti — komandamız hazırdır.
            </p>
          </div>
          <Link
            to="/elaqe"
            className="relative z-[1] btn btn-primary border-none rounded-full gap-2 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Bizimlə Əlaqə <ArrowRight size={17} />
          </Link>
        </div>
        </div>
      </section>
    </>
  )
}

export default About
