import Seo from '../components/Seo.jsx'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Process from '../components/home/Process.jsx'
import Services from '../components/home/Services.jsx'
import SecondFeature from '../components/home/SecondFeature.jsx'
import Projects from '../components/home/Projects.jsx'
import GapSection from '../components/home/GapSection.jsx'
import Stats from '../components/home/Stats.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Newsletter from '../components/home/Newsletter.jsx'

function Home() {
  return (
    <>
      <Seo
        title="Ana Səhifə"
        description="Prestij İnşaat — Bakıda inşaat, metal konstruksiya, layihələndirmə, təmir və fasad işləri üzrə etibarlı tərəfdaşınız. Möhkəmlik. Dəqiqlik. Etibar."
        path="/"
      />
      <Hero />
      <About />
      <Process />
      <Services />
      <SecondFeature />
      <Projects />
      <GapSection />
      <Stats />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home
