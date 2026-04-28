import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import { HeroGeometric } from './components/ui/shape-landing-hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Github from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandMenu from './components/CommandMenu'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200)
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCmdOpen((v) => !v)
      }
      if (e.key === 'Escape') setCmdOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <>
      {!loaded && <Preloader />}
      <CustomCursor />
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} />
      <Navbar onCmdOpen={() => setCmdOpen(true)} />
      <main className="relative">
        <HeroGeometric
          badge="From Sketch to Scale"
          title1="I Build"
          title2="the Web You Imagine"
          description="Full Stack Developer and React Engineer shipping polished interfaces and stable APIs with measurable business impact."
          stats={[
            { value: '5+', label: 'Projects Completed' },
            { value: '100%', label: 'Delivery Focus' },
          ]}
          name="Rohit Solanki"
          footerNote="Focused on product quality, performance, and developer experience."
          onViewProjects={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          onResume={() => {
            window.open('https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/69e6007282c02_Rohit_Solanki_MERN_Developer.pdf', '_blank')
          }}
          onHire={() => {
            window.location.href = "mailto:rohit@example.com?subject=Let's work together"
          }}
        />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  )
}