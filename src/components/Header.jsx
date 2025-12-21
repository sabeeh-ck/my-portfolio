import { useState } from 'react'

export default function Header({ darkMode, setDarkMode }) {
    const [nav, setNav] = useState(false)

    const toggleDarkMode = () => setDarkMode((prev) => !prev)
    const toggleNav = () => setNav(!nav)
    const closeNav = () => setNav(false)

    const headerButtons = [
        {
            name: 'Toggle Theme',
            onClick: toggleDarkMode,
            icon: darkMode ? 'light_mode' : 'dark_mode',
        },
        {
            name: 'Open Menu',
            onClick: toggleNav,
            icon: nav ? 'chevron_line_up' : 'apps',
        },
    ]

    const navLinks = [
        { name: 'Home', href: '#' },
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
                    {headerButtons.map((button) => (
                        <button
                            key={button.name}
                            className="flex h-14 w-14 items-center justify-center border-0"
                            onClick={button.onClick}
                        >
                            <span className="material-symbols-rounded">
                                {button.icon}
                            </span>
                        </button>
                    ))}
                </section>
                <nav
                    className={`bg-bg transition-top fixed z-350 flex h-full w-full items-center px-4 duration-500 ease-in-out ${nav ? 'translate-y-0' : '-translate-y-full'} `}
                >
                    <ul className="flex w-full flex-col gap-5 text-5xl font-bold">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                href={link.href}
                                onClick={closeNav}
                                className="cursor-pointer"
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
