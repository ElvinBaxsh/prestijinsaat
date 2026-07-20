import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PageLoader from './components/PageLoader.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Contact from './pages/Contact.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timers = []
      // Re-align a few times so late-loading images (which reflow the page)
      // don't leave us at the wrong offset. First hop is smooth, the later
      // corrections are instant so they don't fight each other.
      const scrollToTarget = (smooth) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90
          window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
        }
      }
      timers.push(setTimeout(() => scrollToTarget(true), 120))
      ;[500, 900, 1400].forEach((delay) => {
        timers.push(setTimeout(() => scrollToTarget(false), delay))
      })
      return () => timers.forEach(clearTimeout)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <ScrollManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/xidmetler" element={<Services />} />
          <Route path="/layihelerimiz" element={<Projects />} />
          <Route path="/layihelerimiz/:slug" element={<ProjectDetail />} />
          <Route path="/elaqe" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
