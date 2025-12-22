import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Skills from './components/Skills'
import Contact from './components/Contact'

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
            <main className="mt-18 flex flex-col gap-8 px-6 pt-4">
                <Hero />
                <ProjectSection />
                <Skills />
                <Contact />
            </main>
        </>
    )
}

export default App
