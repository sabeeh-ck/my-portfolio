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
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="mx-6 mt-18 mb-6 flex flex-1 flex-col gap-8 md:mx-auto md:max-w-2xl lg:mx-auto lg:max-w-3xl">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
