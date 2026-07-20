import { Phone, Mail, Clock, PhoneCall } from 'lucide-react'
import Seo from '../components/Seo.jsx'

const infoCards = [
  {
    icon: Phone,
    title: 'Telefon',
    lines: [
      { text: '+994 51 280 42 40', href: 'tel:+994512804240' },
      { text: 'WhatsApp: +994 51 280 42 40', href: 'https://wa.me/994512804240' },
      { text: '+994 51 662 70 10', href: 'tel:+994516627010' },
    ],
  },
  {
    icon: Mail,
    title: 'E-poçt',
    lines: [{ text: 'prestijinsaatinfo@gmail.com', href: 'mailto:prestijinsaatinfo@gmail.com' }],
  },
  {
    icon: Clock,
    title: 'İş saatları',
    lines: [{ text: 'B.e – Cümə: 09:00 – 18:00' }, { text: 'Şənbə: 10:00 – 15:00' }],
  },
]

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" {...props}>
    <path d="M13.5 22v-8.5H16l.4-3.1h-2.9V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.1C16.2 4.07 15.2 4 14 4c-2.5 0-4.2 1.5-4.2 4.3v2.1H7v3.1h2.8V22h3.7Z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

const TiktokIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" {...props}>
    <path d="M16.6 3c.4 2.1 1.7 3.6 3.9 3.8v2.8c-1.4.1-2.7-.3-3.9-1.1v6.6c0 3.3-2.6 5.9-6 5.9-3.3 0-6-2.6-6-5.9s2.7-5.9 6-5.9c.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.2-1.3 3.2-3.1V3h2.8Z" />
  </svg>
)

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35a10 10 0 0 0 4.89 1.25h.01c5.52 0 10-4.48 10-10s-4.48-9.9-10.01-9.9Zm5.87 14.19c-.25.7-1.45 1.35-2 1.44-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.81 2.02.96.29.15.49.22.56.35.07.13.07.72-.18 1.42Z" />
  </svg>
)

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/Prestij.inshaat.26' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/prestij_inshaat.26/' },
  { icon: TiktokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@prestij.inshaat' },
]

function Contact() {
  return (
    <>
      <Seo
        title="Əlaqə"
        description="Prestij İnşaat ilə əlaqə saxlayın — telefon, e-poçt və sosial şəbəkələr vasitəsilə layihənizi bizimlə müzakirə edin."
        path="/elaqe"
      />
      <section className="text-center flex flex-col items-center gap-[18px] py-[100px] pb-[60px]">
        <div className="container flex flex-col items-center gap-[18px]">
          <span className="eyebrow">Əlaqə</span>
          <h1 className="text-[clamp(30px,4.5vw,46px)] max-w-[760px]">
            Layihənizi Birlikdə Müzakirə Edək
          </h1>
          <p className="text-muted text-base leading-[1.8] max-w-[640px]">
            Sualınız və ya layihə təklifiniz var? Birbaşa bizimlə əlaqə
            saxlayın — komandamız qısa müddətdə sizinlə əlaqə saxlayacaq.
          </p>
        </div>
      </section>

      <section className="py-[60px] max-[768px]:py-[50px] pt-0">
        <div className="container grid grid-cols-3 max-[768px]:grid-cols-1 gap-[22px]">
          {infoCards.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="p-[30px] px-[26px] rounded-[18px] bg-white border border-soft-softer shadow-card"
            >
              <div className="w-[50px] h-[50px] grid place-items-center rounded-xl bg-gold-50 text-gold-600 mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-[16.5px] mb-2">{title}</h3>
              {lines.map(({ text, href }) =>
                href ? (
                  <a
                    key={text}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block text-muted text-sm leading-[1.6] hover:text-gold-600 transition-colors duration-200"
                  >
                    {text}
                  </a>
                ) : (
                  <p key={text} className="text-muted text-sm leading-[1.6]">
                    {text}
                  </p>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-[80px] max-[768px]:py-[60px] pt-0">
        <div className="container">
          <div className="relative flex flex-col items-center text-center gap-6 overflow-hidden rounded-[40px] bg-ink-900 px-16 py-[70px] max-[560px]:px-8 max-[560px]:py-12 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_70%)] pointer-events-none" />

            <span className="relative z-[1] eyebrow text-gold-400 text-xs font-bold tracking-[0.12em] uppercase">
              Bizi İzləyin
            </span>
            <h2 className="relative z-[1] text-[clamp(24px,3.5vw,32px)] font-bold tracking-tight max-w-[520px] text-white">
              Sosial Şəbəkələrdə Bizimlə Əlaqədə Qalın
            </h2>

            <div className="relative z-[1] flex items-center gap-3 mt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-white/15 text-white/80 grid place-items-center transition-all duration-200 hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="relative z-[1] flex items-center gap-3 mt-3 flex-wrap justify-center">
              <a
                href="tel:+994512804240"
                className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                <PhoneCall size={16} /> Zəng et
              </a>
              <a
                href="https://wa.me/994512804240"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-none rounded-full gap-2 px-7 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#20bd5a] text-white"
              >
                <WhatsappIcon /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
