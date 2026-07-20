import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, PhoneCall } from 'lucide-react'
import logo from '../assets/logo3.png'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M13.5 22v-8.5H16l.4-3.1h-2.9V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.1C16.2 4.07 15.2 4 14 4c-2.5 0-4.2 1.5-4.2 4.3v2.1H7v3.1h2.8V22h3.7Z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

const TiktokIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M16.6 3c.4 2.1 1.7 3.6 3.9 3.8v2.8c-1.4.1-2.7-.3-3.9-1.1v6.6c0 3.3-2.6 5.9-6 5.9-3.3 0-6-2.6-6-5.9s2.7-5.9 6-5.9c.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.2-1.3 3.2-3.1V3h2.8Z" />
  </svg>
)

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35a10 10 0 0 0 4.89 1.25h.01c5.52 0 10-4.48 10-10s-4.48-9.9-10.01-9.9Zm5.87 14.19c-.25.7-1.45 1.35-2 1.44-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.81 2.02.96.29.15.49.22.56.35.07.13.07.72-.18 1.42Z" />
  </svg>
)

function Footer() {
  return (
    <footer className="bg-navy-900 mt-auto pt-[70px]">
      <div className="container grid grid-cols-[1.6fr_1fr_1fr_1.2fr] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-10 pb-12">
        <div>
          <div className="flex items-center gap-0 mb-2 -ml-2">
            <img src={logo} alt="Prestij İnşaat" className="w-[84px] h-[84px] object-contain flex-shrink-0" />
            <span className="flex flex-col leading-tight">
              <strong className="font-heading text-lg tracking-[1.5px] text-white">PRESTIJ</strong>
              <em className="not-italic text-[11px] tracking-[3px] text-gold-400 mt-1">İNŞAAT</em>
            </span>
          </div>
          <p className="text-white/55 text-[14.5px] leading-[1.75] max-w-[340px]">
            İnşaat, metal konstruksiya, layihələndirmə, təmir və fasad
            işlərində etibarlı tərəfdaşınız. Keyfiyyəti və vaxtı prioritet
            sayırıq.
          </p>
          <div className="flex gap-2.5 mt-5">
            <a href="https://www.facebook.com/Prestij.inshaat.26" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[38px] h-[38px] grid place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/prestij_inshaat.26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[38px] h-[38px] grid place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@prestij.inshaat" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-[38px] h-[38px] grid place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400">
              <TiktokIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[15px] tracking-wide text-gold-400 mb-1.5 uppercase">Naviqasiya</h4>
          <Link to="/" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Ana Səhifə</Link>
          <Link to="/haqqimizda" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Haqqımızda</Link>
          <Link to="/xidmetler" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Xidmətlər</Link>
          <Link to="/layihelerimiz" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">İşlərimiz</Link>
          <Link to="/elaqe" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Əlaqə</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[15px] tracking-wide text-gold-400 mb-1.5 uppercase">Xidmətlər</h4>
          <Link to="/xidmetler#insaat" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">İnşaat</Link>
          <Link to="/xidmetler#metal-konstruksiya" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Metal Konstruksiya</Link>
          <Link to="/xidmetler#layihelendirme" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Layihələndirmə</Link>
          <Link to="/xidmetler#temir" className="text-[14.5px] text-white/55 transition-colors duration-200 hover:text-gold-400">Təmir və Fasad</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[15px] tracking-wide text-gold-400 mb-1.5 uppercase">Əlaqə</h4>
          <span className="flex items-center gap-2 text-[14.5px] text-white/55">
            <MapPin size={16} /> Bakı, Azərbaycan
          </span>
          <div className="flex items-center gap-2 text-[14.5px] text-white/55">
            <span className="flex items-center gap-2">
              <Phone size={16} /> +994 51 280 42 40
            </span>
            <a href="tel:+994512804240" aria-label="Zəng et" className="w-7 h-7 grid place-items-center rounded-full border border-white/15 hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400 transition-all duration-200">
              <PhoneCall size={13} />
            </a>
            <a href="https://wa.me/994512804240" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-7 h-7 grid place-items-center rounded-full border border-white/15 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200">
              <WhatsappIcon width={13} height={13} />
            </a>
          </div>
          <a href="tel:+994516627010" className="flex items-center gap-2 text-[14.5px] text-white/55 hover:text-gold-400 transition-colors duration-200">
            <Phone size={16} /> +994 51 662 70 10
          </a>
          <a href="mailto:prestijinsaatinfo@gmail.com" className="flex items-center gap-2 text-[14.5px] text-white/55 hover:text-gold-400 transition-colors duration-200">
            <Mail size={16} /> prestijinsaatinfo@gmail.com
          </a>
          <div className="flex items-center gap-2 mt-1">
            <a
              href="tel:+994512804240"
              className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 px-5 py-3 font-bold w-fit transition-all duration-300 hover:-translate-y-0.5"
            >
              <PhoneCall size={16} /> Zəng et
            </a>
            <a
              href="https://wa.me/994512804240"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-none rounded-full gap-2 px-5 py-3 font-bold w-fit transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#20bd5a] text-white"
            >
              <WhatsappIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container text-center text-[13.5px] text-white/45">
          <span>© {new Date().getFullYear()} Prestij İnşaat. Bütün hüquqlar qorunur.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
