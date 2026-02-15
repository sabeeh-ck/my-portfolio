import { useState, useEffect } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [darkMode, setDarkMode] = useState(true)

    // useEffect(() => { const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)') setDarkMode(preferredTheme.matches) }, [])

    useEffect(() => {
        darkMode
            ? document.body.classList.add('dark')
            : document.body.classList.remove('dark')
    }, [darkMode])

    return (
        <div className="flex min-h-screen flex-col">
            <Header
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode((prev) => !prev)}
            />
            <main className="mx-6 mt-18 mb-6 flex max-w-4xl flex-1 flex-col gap-15 md:mx-auto md:px-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
