import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProjectSection from './components/ProjectSection'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
        setDarkMode(preferredTheme.matches)
    }, [])

    useEffect(() => {
        darkMode
            ? document.body.classList.add('dark')
            : document.body.classList.remove('dark')
    }, [darkMode])

    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="mx-6 mt-18 mb-6 flex flex-col gap-8 md:mx-auto md:max-w-2xl lg:mx-auto lg:max-w-3xl">
                <Hero />
                <About />
                <Skills />
                <ProjectSection />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
