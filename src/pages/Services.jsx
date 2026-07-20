import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { services } from '../data/services.js'
import imgInsaat from '../assets/İmg-build-4.jpg'
import imgMetal from '../assets/İmg-constructor2.jpg'
import imgLayihe from '../assets/layihelendirme.jpg'
import imgTemir from '../assets/temir-repair.png'
import imgFasad from '../assets/İmg-new-constructor3.jpg'
import imgLogistika from '../assets/İmg-beton.jpg'
import imgDamOrtuyu from '../assets/İmg-build.jpg'
import imgSandvicPanel from '../assets/İmg-new-constructor.jpg'
import imgElektrik from '../assets/İmg-constructor-4.jpg'
import imgQapiPencere from '../assets/İmg-build-two.jpg'

const images = [
  imgInsaat,
  imgMetal,
  imgLayihe,
  imgTemir,
  imgFasad,
  imgLogistika,
  imgDamOrtuyu,
  imgSandvicPanel,
  imgElektrik,
  imgQapiPencere,
]

const highlights = [
  ['Peşəkar mühəndis nəzarəti', 'Keyfiyyətli material seçimi', 'Dəqiq iş qrafiki', 'Zəmanətli icra'],
  ['Sənaye və kommersiya obyektləri', 'İstehsal, çatdırılma və montaj', 'Dayanıqlı karkas həlləri', 'Sürətli quraşdırma'],
  ['Memarlıq və mühəndislik həlləri', 'Konsepsiya eskizindən icraya', 'Texniki sənədləşmə', 'Struktur audit'],
  ['Kapital və kosmetik təmir', 'Sürətli icra müddəti', 'Yaşayış və kommersiya sahələri', 'Dəqiq büdcə planlaması'],
  ['Ventilyasiyalı fasad sistemləri', 'Dekorativ örtük həlləri', 'Enerji effektivliyi', 'Estetik görünüş'],
  ['Vaxtında material təchizatı', 'Öz nəqliyyat resurslarımız', 'Etibarlı təchizatçı şəbəkəsi', 'Kəsintisiz obyekt təminatı'],
  ['Su izolyasiyası', 'İstilik izolyasiyası', 'Uzunömürlü örtük materialları', 'Peşəkar quraşdırma'],
  ['Yüngül çəkili panel sistemləri', 'Yüksək istilik izolyasiyası', 'Sürətli quraşdırma', 'Sənaye və inzibati binalar üçün'],
  ['Elektrik xətləri və işıqlandırma', 'Santexnik sistemlərin quraşdırılması', 'Normativlərə tam uyğunluq', 'Layihədən icraya nəzarət'],
  ['Alüminium və PVC sistemlər', 'Dəqiq ölçü və montaj', 'Keyfiyyətli aksesuar seçimi', 'Enerji-effektiv həllər'],
]

function Services() {
  return (
    <>
      <Seo
        title="Xidmətlərimiz"
        description="İnşaat, metal konstruksiya, layihələndirmə, təmir və fasad işləri — Prestij İnşaatın tam dövrəli tikinti xidmətləri haqqında ətraflı məlumat."
        path="/xidmetler"
      />
      <section className="text-center flex flex-col items-center gap-[18px] py-[100px] pb-[70px]">
        <div className="container flex flex-col items-center gap-[18px]">
          <span className="eyebrow">Xidmətlərimiz</span>
          <h1 className="text-[clamp(30px,4.5vw,46px)] max-w-[760px]">
            Tam Dövrəli İnşaat Həlləri
          </h1>
          <p className="text-muted text-base leading-[1.8] max-w-[640px]">
            Layihədən təhvilə qədər bütün mərhələləri özündə birləşdirən
            peşəkar xidmət spektri təqdim edirik.
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className="py-[90px] max-[768px]:py-[60px] scroll-mt-24 odd:bg-white even:bg-[#f9fafb]"
        >
          <div className="container grid grid-cols-[1fr_1fr] max-[980px]:grid-cols-1 gap-[60px] max-[980px]:gap-10 items-center">
            <Reveal
              direction={i % 2 === 1 ? 'right' : 'left'}
              className={`rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${i % 2 === 1 ? 'min-[981px]:order-2' : ''}`}
            >
              <img
                src={images[i]}
                alt={service.title}
                className="w-full h-[420px] max-[560px]:h-[280px] object-cover"
              />
            </Reveal>

            <Reveal
              direction={i % 2 === 1 ? 'left' : 'right'}
              className={`flex flex-col gap-5 ${i % 2 === 1 ? 'min-[981px]:order-1' : ''}`}
            >
              <span className="font-heading text-3xl font-bold text-soft-border">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="text-[clamp(26px,3.4vw,36px)] tracking-tight text-ink-900 font-bold">
                {service.title}
              </h2>
              <p className="text-muted text-[15.5px] leading-[1.8] max-w-[480px]">
                {service.details}
              </p>
              <ul className="list-none m-0 p-0 grid grid-cols-2 max-[480px]:grid-cols-1 gap-3.5 mt-2">
                {highlights[i].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-[1.5]">
                    <CheckCircle2 size={18} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/elaqe"
                className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold w-fit mt-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                Sifariş Verin <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-[90px] max-[768px]:py-[60px]">
        <div className="container">
        <div className="relative flex items-center justify-between gap-[30px] flex-wrap overflow-hidden rounded-[40px] max-[480px]:rounded-[28px] bg-ink-900 px-16 py-[60px] max-[560px]:px-8 max-[480px]:px-6 max-[560px]:py-10 shadow-2xl">
          <div className="absolute top-1/2 left-[30%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="text-[clamp(22px,3vw,28px)] mb-2 text-white font-bold">
              Layihənizi birlikdə quraq
            </h2>
            <p className="text-[15px] text-white/70">
              İstər kiçik təmir, istərsə də iri sənaye obyekti — komandamız hazırdır.
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

export default Services
