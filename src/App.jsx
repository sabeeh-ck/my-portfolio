import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
        setDarkMode(preferredTheme.matches)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <>
            <Header setDarkMode={setDarkMode} />
            <main className="mt-16 px-4">
                <Hero />
            </main>
        </>
    )
}

export default App
