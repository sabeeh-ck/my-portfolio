import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function ProjectCard({ project }) {
    const navigate = useNavigate()

    const techs = {
        tailwind: {
            name: 'Tailwind CSS',
            logo: 'simple-icons:tailwindcss',
            colour: ['text-[#38B2AC]', 'bg-[#0C2A29]'],
        },
        react: {
            name: 'React',
            logo: 'simple-icons:react',
            colour: ['text-[#61DAFB]', 'bg-[#0F2A3B]'],
        },
        firestore: {
            name: 'Firestore',
            logo: 'simple-icons:firebase',
            colour: ['text-[#F6B21A]', 'bg-[#2A1E0A]'],
        },
        cloudinary: {
            name: 'Cloudinary',
            logo: 'simple-icons:cloudinary',
            colour: ['text-[#4FA7FF]', 'bg-[#0F2438]'],
        },
        vite: {
            name: 'Vite',
            logo: 'file-icons:vite',
            colour: ['text-[#8B5CF6]', 'bg-[#1B1333]'],
        },
        django: {
            name: 'Django',
            logo: 'simple-icons:django',
            colour: ['text-[#1F8F5F]', 'bg-[#0D2A1E]'],
        },
        python: {
            name: 'Python',
            logo: 'simple-icons:python',
            colour: ['text-[#4B8BBE]', 'bg-[#0F2433]'],
        },
        reactrouter: {
            name: 'React Router',
            logo: 'simple-icons:reactrouter',
            colour: ['text-[#F44250]', 'bg-[#2B0F14]'],
        },
        mysql: {
            name: 'MySQL',
            logo: 'lineicons:mysql',
            colour: ['text-[#00758F]', 'bg-[#0A1C25]'],
        },
    }

    const startDate = new Date(project.startDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    })

    const endDate = new Date(project.endDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    })

    return (
        <article className="border-border bg-surface flex flex-col gap-2 rounded-lg border p-4">
            <div className="flex flex-wrap items-center gap-1">
                <Link
                    className={
                        project.page
                            ? 'hover:text-text/70 underline'
                            : 'cursor-default'
                    }
                    to={project.page ? `/projects/${project.slug}` : ''}
                >
                    <h3>{project.title}</h3>
                </Link>
                {project.page && (
                    <Icon
                        icon="material-symbols:open-in-new-rounded"
                        width={14}
                    />
                )}
                {project.status === 'wip' && (
                    <span
                        className="bg-wip-bg text-wip-text ml-auto flex cursor-default items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold md:text-sm"
                        title="Work in Progress"
                        aria-label="Work in Progress"
                    >
                        <Icon icon="material-symbols:handyman" />
                        WIP
                    </span>
                )}
                <small className="text-textmute w-full font-bold">
                    {startDate}
                    {startDate !== endDate
                        ? endDate === 'Invalid Date'
                            ? ' - ...'
                            : ` - ${endDate}`
                        : ''}
                </small>
            </div>
            <ul className="flex gap-1 text-sm md:text-base">
                {project.techStack.map((tech) => {
                    const t = techs[tech]
                    return (
                        <div
                            key={t.name}
                            className={`flex items-center rounded-full p-1 ${t.colour[0]} ${t.colour[1]}`}
                        >
                            <li title={t.name} aria-label={t.name}>
                                <Icon icon={t.logo} />
                            </li>
                        </div>
                    )
                })}
            </ul>
            {project.type === 'freelance' && (
                <span
                    className="bg-client-bg text-client-text flex cursor-default items-center gap-1 self-start rounded-full px-2 py-0.5 text-xs font-bold md:text-sm"
                    title="Client commisioned work"
                    aria-label="client commisioned work"
                >
                    <Icon
                        width={16}
                        icon="material-symbols:deployed-code-outline"
                    />
                    Client Project
                </span>
            )}
            <p className="text-textmute flex-1 text-sm md:text-base">
                {project.description}
            </p>
            <div className="flex gap-2 self-start text-xs font-semibold">
                {project.link && (
                    <a
                        className={`border-border bg-text text-bg hover:bg-text/80 flex items-center gap-1 rounded-lg border px-3 py-2`}
                        href={project.link}
                    >
                        <Icon
                            width={16}
                            icon="material-symbols:slideshow-rounded"
                        />
                        Live Demo
                    </a>
                )}
                {project.repoUrl ? (
                    <a
                        className="border-text hover:bg-text/10 flex items-center gap-1 rounded-lg border px-3 py-2"
                        href={project.repoUrl}
                        target="_blank"
                    >
                        <Icon icon="simple-icons:github" />
                        View Code
                    </a>
                ) : (
                    <span className="text-textmute bg-border border-border flex cursor-default items-center gap-1 rounded-lg border px-3 py-2">
                        <Icon icon="simple-icons:github" />
                        Private Repo
                    </span>
                )}
            </div>
        </article>
    )
}
