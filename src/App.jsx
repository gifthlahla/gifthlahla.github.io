import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import SectionDivider from './components/SectionDivider'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // On mount, check saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark)
    setDarkMode(shouldBeDark)
  }, [])

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  // Apply the 'dark' class to <html> for Tailwind dark: variants
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <ProgressBar />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <motion.main
        id="main-content"
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0.96 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.96 }}
        transition={{ duration: 0.35 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32"
      >
        <section id="hero">
          <Hero />
        </section>
        <SectionDivider />
        <section id="about">
          <About />
        </section>
        <SectionDivider />
        <section id="experience">
          <Experience />
        </section>
        <SectionDivider />
        <section id="projects">
          <Projects />
        </section>
        <SectionDivider />
        <section id="skills">
          <Skills />
        </section>
        <SectionDivider />
        <section id="education">
          <Education />
        </section>
        <SectionDivider />
        <section id="contact">
          <Contact />
        </section>
      </motion.main>

      <Footer />
    </div>
  )
}

export default App