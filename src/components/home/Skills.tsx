import { Icon } from '@iconify/react'

type Skill = {
    name: string
    icon: string
}

const Skills = () => {
    const skills = {
        frontend: [
            { name: 'HTML 5', icon: 'devicon:html5' },
            { name: 'CSS 3', icon: 'devicon:css3' },
            { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
            { name: 'JavaScript', icon: 'logos:javascript' },
            { name: 'TypeScript', icon: 'logos:typescript-icon' },
            { name: 'React', icon: 'logos:react' },
            {
                name: 'React Router',
                icon: 'logos:react-router',
            },
        ],
        backend: [
            { name: 'Java', icon: 'devicon:java' },
            { name: 'Python', icon: 'logos:python' },
            { name: 'MySQL', icon: 'devicon:mysql' },
            { name: 'Firebase', icon: 'logos:firebase-icon' },
            { name: 'Cloudinary', icon: 'logos:cloudinary-icon' },
        ],
        tools: [
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'GitHub', icon: 'simple-icons:github' },
            { name: 'npm', icon: 'logos:npm-icon' },
            { name: 'Vite', icon: 'logos:vitejs' },
            { name: 'Figma', icon: 'logos:figma' },
            { name: 'Vercel', icon: 'simple-icons:vercel' },
        ],
    } satisfies Record<string, Skill[]>

    type SkillGroup = keyof typeof skills

    const generateSkillIcons = (group: SkillGroup) =>
        skills[group].map((skill) => (
            <div
                key={skill.name}
                className="border-border bg-surface flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold md:text-sm lg:text-sm"
                aria-label={skill.name}
                title={skill.name}
            >
                <Icon icon={skill.icon} width={16} height={16} />
                <span>{skill.name}</span>
            </div>
        ))

    return (
        <section id="skills" className="flex scroll-mt-20 flex-col gap-6">
            <h2>Skills</h2>
            <section className="flex flex-col gap-3">
                <h3>Frontend</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('frontend')}
                </div>
            </section>
            <section className="flex flex-col gap-3">
                <h3>Backend / Data</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('backend')}
                </div>
            </section>
            <section className="flex flex-col gap-3">
                <h3>Tools & Workflow</h3>
                <div className="flex flex-wrap gap-3">
                    {generateSkillIcons('tools')}
                </div>
            </section>
        </section>
    )
}

export default Skills
