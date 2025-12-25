import { Icon } from '@iconify/react'

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex min-h-[65vh] flex-col justify-center gap-8"
        >
            <div>
                <h1>Muhammed Sabeeh C K</h1>
                <p className="font-medium">Junior Web Developer and Designer</p>
                <p className="text-textmute mt-2 text-sm font-semibold md:text-base">
                    I build responsive web applications using modern frontend
                    and backend technologies.
                </p>
            </div>
            <div className="flex gap-4 text-xs font-bold md:text-sm">
                <a
                    className="button bg-text focus:bg-textmute text-bg p-2"
                    href="#projects"
                >
                    View Projects
                </a>
                <a className="border-resume button text-resume inline-flex items-center gap-1 border p-2">
                    <Icon
                        height={16}
                        width={18}
                        icon="material-symbols:download-rounded"
                    />
                    Resume
                </a>
            </div>
        </section>
    )
}
