import { useState } from 'react'
import menuIcon from '../assets/menu-icon.svg'

export default function Header({ setDarkMode }) {
    const [nav, setNav] = useState(false)

    const toggleDarkMode = () => setDarkMode((prev) => !prev)
    const toggleNav = () => setNav(!nav)
    const closeNav = () => setNav(false)

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <header className="bg-bg fixed top-0 z-500 h-14 w-full">
                <section className="bg-bg fixed top-0 z-500 flex h-14 w-full items-center px-4">
                    <a href="/" className="flex-1">
                        Logo
                    </a>
                    <button
                        className="flex h-14 w-14 justify-center border-0"
                        onClick={toggleDarkMode}
                    >
                        <img
                            className="w-6"
                            src={menuIcon}
                            alt="Open Navigation"
                        />
                    </button>

                    <button
                        className="flex h-14 w-14 justify-center border-0"
                        onClick={toggleNav}
                    >
                        <img
                            className="w-6"
                            src={menuIcon}
                            alt="Open Navigation"
                        />
                    </button>
                </section>
                <nav
                    className={`bg-bg transition-top fixed z-350 flex h-full w-full items-center px-4 duration-500 ease-in-out ${nav ? 'translate-y-0' : '-translate-y-full'} `}
                >
                    <ul className="flex w-full flex-col gap-5 text-5xl font-bold">
                        {links.map((link) => (
                            <li
                                key={link.name}
                                href={link.href}
                                onClick={closeNav}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}
