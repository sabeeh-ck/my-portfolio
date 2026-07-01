import Link from "next/link";
import Logo from "./Logo";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <header className="fixed top-0 z-100 flex h-32 w-full items-center justify-between px-6 lg:h-24 lg:px-16 lg:py-0">
            <nav
                id="nav"
                className="flex flex-col gap-2 text-sm leading-normal lg:flex-row lg:items-center lg:gap-4 lg:text-2xl"
            >
                <div
                    id="header-links"
                    className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
                >
                    <Link href={"#projects"}>Projects</Link>
                    <p className="hidden lg:block">/</p>
                    <Link href={"#skills"}>Skills</Link>
                    <p className="hidden lg:block">/</p>
                    <Link href={"#connect"}>Connect</Link>
                </div>
            </nav>

            <div>
                <Logo className="h-8 lg:h-12" />
            </div>
        </header>
    );
};

export default Header;
