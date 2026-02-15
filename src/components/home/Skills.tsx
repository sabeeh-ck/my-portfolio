import { Icon } from '@iconify/react'

type Skill = {
    name: string
    icon: string
}

const Skills = () => {
    const skills = {
        Frontend: [
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
            {
                name: 'Next.js',
                icon: 'logos:nextjs-icon',
            },
        ],
        Backend: [
            { name: 'Node.js', icon: 'logos:nodejs-icon-alt' },
            { name: 'Express.js', icon: 'simple-icons:express' },
            { name: 'Java', icon: 'devicon:java' },
            { name: 'Python', icon: 'logos:python' },
            { name: 'Firebase', icon: 'logos:firebase-icon' },
            { name: 'Supabase', icon: 'logos:supabase-icon' },
            { name: 'Cloudinary', icon: 'logos:cloudinary-icon' },
        ],
        Databases: [
            { name: 'MySQL', icon: 'devicon:mysql' },
            { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        ],
        'Tools & Workflow': [
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'GitHub', icon: 'simple-icons:github' },
            { name: 'npm', icon: 'logos:npm-icon' },
            { name: 'Vite', icon: 'logos:vitejs' },
            { name: 'Figma', icon: 'logos:figma' },
            { name: 'Vercel', icon: 'simple-icons:vercel' },
        ],
    } satisfies Record<string, Skill[]>

    return (
        <section id="skills" className="flex scroll-mt-20 flex-col gap-6">
            <h2>Skills</h2>

            {Object.entries(skills).map(([groupName, groupSkills]) => (
                <section key={groupName} className="flex flex-col gap-3">
                    <h3>{groupName}</h3>
                    <div className="flex flex-wrap gap-3">
                        {groupSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="border-border bg-surface flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold md:text-sm lg:text-sm"
                                aria-label={skill.name}
                                title={skill.name}
                            >
                                <Icon
                                    icon={skill.icon}
                                    width={16}
                                    height={16}
                                />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}

export default Skills
