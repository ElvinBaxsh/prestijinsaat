import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc, details, index }) {
  return (
    <div className="group relative flex flex-col w-full overflow-hidden rounded-[18px] border border-soft-softer bg-white shadow-card p-9 px-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-soft before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(160deg,rgba(212,175,55,0.08),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
      <div className="relative z-10 flex items-start justify-between mb-5">
        <div className="w-[58px] h-[58px] grid place-items-center rounded-2xl bg-gold-500 text-ink-900 flex-shrink-0 shadow-[0_10px_20px_-8px_rgba(212,175,55,0.6)]">
          <Icon size={26} strokeWidth={1.8} />
        </div>
        <span className="font-heading text-2xl font-bold text-soft-border">0{index + 1}</span>
      </div>
      <h3 className="relative z-10 text-[19px] mb-2.5">{title}</h3>
      <p className="relative z-10 text-muted text-[14.5px] leading-[1.7]">{desc}</p>
      <p className="relative z-10 mt-3.5 pt-3.5 border-t border-soft-softer text-[13.5px] text-muted leading-[1.7]">
        {details}
      </p>
      <Link
        to="/elaqe"
        className="relative z-10 inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-gold-600 transition-[gap] duration-200 hover:gap-2.5"
      >
        Sifariş verin <ArrowUpRight size={16} />
      </Link>
    </div>
  )
}

export default ServiceCard
