import vjecLogo from '../assets/vjecLogo.svg'

export default function About() {
    return (
        <section id="about" className="flex scroll-mt-20 flex-col gap-3">
            <h2>About Me</h2>
            <p className="text-sm md:text-base">
                Hi, I’m a developer passionate about building sleek, responsive
                web apps. I love turning design ideas into interactive
                experiences using React, Tailwind, and JavaScript. When I’m not
                coding, you’ll find me exploring new tech or tinkering with side
                projects.
            </p>
            <section className="flex flex-col gap-2">
                <h3>Education</h3>
                <div className="border-border flex items-start gap-2 rounded-2xl border p-2 md:gap-4 md:p-4">
                    <div className="h-16 w-16 rounded-lg bg-white md:h-24 md:w-24">
                        <img className="p-2" src={vjecLogo} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="flex w-full flex-wrap justify-between text-sm font-semibold md:text-base">
                            <p>Vimal Jyothi Engineering College, Kannur</p>
                            <p>2021 - 2025</p>
                        </div>
                        <div className="text-textmute text-sm md:text-base">
                            <p>B.Tech in Computer Science & Engineering</p>
                            <p>• CGPA: 6.92</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
