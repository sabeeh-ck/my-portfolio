import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

type HeaderProps = {
    darkMode: boolean
    toggleDarkMode: () => void
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        nav
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [nav])

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
        { name: 'About', href: '/#about' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Connect', href: '/#contact' },
    ]

    const headerGradient =
        'bg-[linear-gradient(to_top,transparent_0%,color-mix(in_srgb,var(--color-bg)_70%,transparent)_20%,var(--color-bg)_50%)]'

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-500 flex flex-col items-center">
                <section
                    className={`fixed z-500 flex w-full max-w-167.5 items-center ${headerGradient} px-2 py-3 md:px-0`}
                >
                    <div className="flex-1">
                        <a
                            className="px-4 text-sm font-bold md:text-base lg:text-lg"
                            href="/#"
                            onClick={closeNav}
                        >
                            @sabeeh-ck
                        </a>
                    </div>
                    <div className="flex gap-2">
                        {headerButtons.map((button) => (
                            <button
                                key={button.name}
                                className="flex h-12 w-12 cursor-pointer items-center justify-center border-0"
                                onClick={button.onClick}
                            >
                                <Icon icon={button.icon} width={24} />
                            </button>
                        ))}
                    </div>
                </section>
                <nav
                    className={`bg-bg fixed z-350 h-full w-full max-w-2xl px-6 md:px-4 ${nav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-500 ease-in-out`}
                >
                    <div
                        className={`flex h-full flex-col items-start justify-center gap-6 ${nav ? 'translate-y-0 delay-200' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}
                    >
                        <ul className="flex w-full flex-col gap-5 text-6xl font-semibold">
                            {navLinks.map((link) => (
                                <li key={link.name} className="cursor-pointer">
                                    <a href={link.href} onClick={closeNav}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-resume hover:bg-resume/80 button text-bg inline-flex items-center gap-1 p-2 text-sm font-semibold">
                            <Icon
                                height={18}
                                width={18}
                                icon="material-symbols:download-rounded"
                            />
                            Resume
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
