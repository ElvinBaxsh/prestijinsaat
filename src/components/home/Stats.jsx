import { CheckCircle2 } from 'lucide-react'

const stats = [
  { title: 'Mütəxəssis Komanda', desc: 'Peşəkar ustalar və mühəndislər' },
  { title: 'Keyfiyyətli İş', desc: 'Yüksək standartlara uyğun icra' },
  { title: 'Etibarlı Xidmət', desc: 'Müştəri məmnuniyyəti prioritetdir' },
  { title: 'Müasir Yanaşma', desc: 'Yeni texnologiyalar və metodlar' },
]

function StatItem({ title, desc }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <CheckCircle2 size={26} className="text-gold-600" />
      <strong className="font-heading text-[16.5px] font-bold text-ink-900 tracking-tight">
        {title}
      </strong>
      <span className="text-[13px] text-muted font-medium leading-[1.5] max-w-[200px]">{desc}</span>
    </div>
  )
}

function Stats() {
  return (
    <section className="bg-white py-[80px]">
      <div className="container grid grid-cols-4 max-[980px]:grid-cols-2 gap-8 text-center py-6 border-t border-b border-soft-border/40">
        {stats.map((stat) => (
          <StatItem key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats
