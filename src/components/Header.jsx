import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function Header({ darkMode, setDarkMode }) {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        nav
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [nav])

    const toggleDarkMode = () => setDarkMode((prev) => !prev)
    const toggleNav = () => setNav(!nav)
    const closeNav = () => setNav(false)

    const headerButtons = [
        {
            name: 'Toggle Theme',
            onClick: toggleDarkMode,
            icon: darkMode
                ? 'material-symbols:light-mode-outline-rounded'
                : 'material-symbols:dark-mode-outline-rounded',
        },
        {
            name: 'Open Menu',
            onClick: toggleNav,
            icon: nav
                ? 'material-symbols:chevron-line-up-rounded'
                : 'material-symbols:apps',
        },
    ]

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Connect', href: '#contact' },
    ]

    const headerGradient =
        'bg-[linear-gradient(to_top,transparent_0%,color-mix(in_srgb,var(--color-bg)_70%,transparent)_20%,var(--color-bg)_50%)]'

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-500 flex flex-col items-center">
                <section
                    className={`fixed z-500 flex w-full max-w-200 items-center ${headerGradient} px-2 py-3 md:px-8 lg:mx-auto lg:px-0`}
                >
                    <section className="flex-1">
                        <a
                            className="px-4 text-sm font-bold md:text-base lg:text-lg"
                            href="#"
                            onClick={closeNav}
                        >
                            @sabeeh-ck
                        </a>
                    </section>
                    <section className="flex gap-2">
                        {headerButtons.map((button) => (
                            <button
                                key={button.name}
                                className="flex h-12 w-12 cursor-pointer items-center justify-center border-0"
                                onClick={button.onClick}
                            >
                                <Icon icon={button.icon} width={24} />
                            </button>
                        ))}
                    </section>
                </section>
                <nav
                    className={`bg-bg transition-top fixed z-350 flex h-full w-full max-w-175 flex-col items-start justify-center gap-6 px-6 duration-500 ease-in-out ${nav ? 'translate-y-0' : '-translate-y-full'} `}
                >
                    <ul className="flex w-full flex-col gap-5 text-4xl font-bold">
                        {navLinks.map((link) => (
                            <li key={link.name} className="cursor-pointer">
                                <a href={link.href} onClick={closeNav}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-resume button text-bg p-2 text-sm font-semibold">
                        ↓ Resume
                    </button>
                </nav>
            </header>
        </>
    )
}
