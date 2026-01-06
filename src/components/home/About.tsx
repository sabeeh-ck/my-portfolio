import vjecLogo from '../../assets/vjecLogo.svg'

const About = () => (
    <section id="about" className="flex scroll-mt-20 flex-col gap-6">
        <h2>About Me</h2>
        <p>
            Hi, I’m a developer who loves creating and building things that
            solve problems and make life easier. I enjoy exploring new tech,
            experimenting with projects, and turning ideas into real
            experiences. When I’m not tinkering, you’ll probably find me
            learning something new or diving into a creative hobby.
        </p>
        <article className="flex flex-col gap-3">
            <h3>Education</h3>
            <div className="border-border bg-surface flex items-start gap-2 rounded-2xl border p-2 md:gap-4 md:p-4">
                <div className="h-16 w-16 rounded-lg bg-white md:h-24 md:w-24">
                    <img className="p-2" src={vjecLogo} alt="" />
                </div>
                <div className="flex-1">
                    <div className="flex w-full flex-wrap justify-between text-sm font-semibold">
                        <p>Vimal Jyothi Engineering College, Kannur</p>
                        <p>2021 - 2025</p>
                    </div>
                    <div className="text-textmute text-sm">
                        <p>B.Tech in Computer Science & Engineering</p>
                        <p>• CGPA: 6.92</p>
                    </div>
                </div>
            </div>
        </article>
    </section>
)

export default About
