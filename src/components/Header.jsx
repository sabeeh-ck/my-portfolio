import { useState } from "react";
export default function Header() {
    const [nav, setNav] = useState(false);

    const toggleNav = () => setNav(!nav);

    return (
        <header className="top-0 flex items-center justify-between m-4 lg:mx-32">
            <section>
                <small>Logo</small>
            </section>
            <nav>
                <button onClick={toggleNav}>
                    <img src="" alt="Open Navigation" />
                </button>
                <ul className=" flex flex-col w-full">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
