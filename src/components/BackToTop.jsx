import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Yuxarı qayıt"
      className={`fixed bottom-6 right-6 max-[560px]:bottom-4 max-[560px]:right-4 z-[95] w-12 h-12 rounded-full bg-ink-900 text-white grid place-items-center shadow-[0_10px_30px_rgba(20,24,31,0.35)] transition-all duration-300 hover:bg-gold-500 hover:text-ink-900 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default BackToTop
