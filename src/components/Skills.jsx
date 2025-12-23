export default function Skills() {
    const skills = {
        frontend: ['HTML 5', 'CSS 3', 'Tailwind CSS', 'JavaScript', 'React'],
        backend: ['Java', 'Python', 'MySQL'],
        tools: ['Git', 'GitHub', 'npm', 'Figma', 'Vercel'],
    }

    const generateSkillIcons = (group) =>
        skills[group].map((skill) => (
            <div
                key={skill}
                className="border-border bg-surface flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold md:text-sm lg:text-sm"
            >
                <img
                    width={16}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.replace(/\s+/g, '').toLowerCase()}/${skill.replace(/\s+/g, '').toLowerCase()}-original.svg`}
                    alt={skill}
                />
                <span>{skill}</span>
            </div>
        ))

    return (
        <section id="skills" className="flex scroll-mt-20 flex-col gap-4">
            <h2>Skills</h2>
            <section className="flex flex-col gap-2">
                <h3>Frontend</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('frontend')}
                </div>
            </section>
            <section className="flex flex-col gap-2">
                <h3>Backend</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('backend')}
                </div>
            </section>
            <section className="flex flex-col gap-2">
                <h3>Tools & Workflow</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('tools')}
                </div>
            </section>
        </section>
    )
}
