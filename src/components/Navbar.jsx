import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "../assets/logo3.png";

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35a10 10 0 0 0 4.89 1.25h.01c5.52 0 10-4.48 10-10s-4.48-9.9-10.01-9.9Zm5.87 14.19c-.25.7-1.45 1.35-2 1.44-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.81 2.02.96.29.15.49.22.56.35.07.13.07.72-.18 1.42Z" />
  </svg>
)

const links = [
  { to: "/", label: "Ana Səhifə" },
  { to: "/haqqimizda", label: "Haqqımızda" },
  { to: "/xidmetler", label: "Xidmətlər" },
  { to: "/layihelerimiz", label: "İşlərimiz" },
  { to: "/elaqe", label: "Əlaqə" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 12 : y > 32));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-white/95 border-b border-soft-border shadow-[0_10px_30px_-20px_rgba(20,24,31,0.12)] max-[860px]:py-2.5 max-[860px]:bg-white/95 max-[860px]:border-b max-[860px]:border-soft-border max-[860px]:shadow-[0_10px_30px_-20px_rgba(20,24,31,0.12)]"
          : overlay
            ? "py-5 bg-black/40 backdrop-blur-md border-b border-white/5 max-[860px]:py-4 max-[860px]:bg-cream/85 max-[860px]:backdrop-blur-md max-[860px]:border-b max-[860px]:border-transparent"
            : "py-4 bg-cream/85 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-5">
        <NavLink
          to="/"
          className="group flex items-center gap-0 max-[860px]:gap-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Prestij İnşaat"
            className={`object-contain flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:drop-shadow-[0_6px_20px_rgba(197,160,89,0.15)] ${
              scrolled ? "w-[72px] h-[72px]" : "w-[82px] h-[82px]"
            } max-[860px]:w-[58px] max-[860px]:h-[58px]`}
          />
          <span className="flex flex-col leading-tight">
            <strong
              className={`font-heading text-[22px] max-[860px]:text-[17px] tracking-[1.5px] transition-colors duration-300 group-hover:text-gold-600 max-[860px]:!text-ink-900 ${
                overlay ? "text-white" : "text-ink-900"
              }`}
            >
              PRESTIJ
            </strong>
            <em
              className={`not-italic text-[12px] max-[860px]:text-[10px] tracking-[3px] max-[860px]:tracking-[2px] mt-0.5 uppercase max-[860px]:!text-gold-600 ${
                overlay ? "text-gold-400" : "text-gold-600"
              }`}
            >
              İnşaat
            </em>
          </span>
        </NavLink>

        <nav className="flex items-center gap-1.5 max-[860px]:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-5 py-2.5 text-[15px] font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? overlay
                      ? "text-gold-400 font-semibold bg-white/10"
                      : "text-gold-600 font-semibold bg-[rgba(197,160,89,0.12)]"
                    : overlay
                      ? "text-white hover:text-ink-900 hover:bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                      : "text-ink-700 hover:text-gold-600 hover:bg-[rgba(197,160,89,0.08)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="relative group ml-3">
            <button
              type="button"
              className="btn btn-primary border-none rounded-full px-6 py-2.5 text-[14.5px] gap-2 shadow-[0_15px_30px_-10px_rgba(212,175,55,0.45)] transition-transform duration-200 hover:-translate-y-px hover:shadow-[0_4px_15px_rgba(197,160,89,0.25)]"
            >
              <PhoneCall size={16} />
              Zəng edin
            </button>
            <div className="absolute right-0 top-full pt-2 w-[200px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl shadow-xl border border-soft-border p-2 flex flex-col gap-1">
                <a
                  href="tel:+994512804240"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold text-ink-900 hover:bg-cream transition-colors duration-150"
                >
                  <PhoneCall size={16} className="text-gold-600" /> Zəng et
                </a>
                <a
                  href="https://wa.me/994512804240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold text-ink-900 hover:bg-cream transition-colors duration-150"
                >
                  <WhatsappIcon className="text-[#25D366]" /> WhatsApp yaz
                </a>
              </div>
            </div>
          </div>
        </nav>

        <button
          className="hidden max-[860px]:grid place-items-center bg-transparent border-none text-ink-900 p-1.5"
          aria-label="Menyunu aç/bağla"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`hidden max-[860px]:block fixed inset-0 z-[90] bg-cream transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center gap-0"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Prestij İnşaat"
              className="w-[78px] h-[78px] object-contain"
            />
            <span className="flex flex-col leading-tight">
              <strong className="font-heading text-[17px] tracking-[1.5px] text-ink-900">
                PRESTIJ
              </strong>
              <em className="not-italic text-[10px] tracking-[2px] text-gold-600 mt-0.5 uppercase">
                İnşaat
              </em>
            </span>
          </NavLink>
          <button
            className="w-10 h-10 grid place-items-center text-ink-900"
            aria-label="Menyunu bağla"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div
          className={`container mt-2 transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <div className="bg-white rounded-[24px] shadow-xl p-3 flex flex-col gap-1.5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-3.5 text-[15px] font-semibold rounded-full text-center transition-colors duration-200 ${
                    isActive
                      ? "text-gold-600 bg-cream"
                      : "text-ink-900 hover:bg-cream/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <a
                href="tel:+994512804240"
                onClick={() => setOpen(false)}
                className="btn btn-primary bg-gold-500 hover:bg-gold-600 text-ink-900 border-none rounded-full gap-2 justify-center py-3.5 font-bold"
              >
                <PhoneCall size={16} />
                Zəng et
              </a>
              <a
                href="https://wa.me/994512804240"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn border-none rounded-full gap-2 justify-center py-3.5 font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white"
              >
                <WhatsappIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
