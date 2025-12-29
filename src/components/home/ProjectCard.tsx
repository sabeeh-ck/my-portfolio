import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { techs } from '../../data/techs'
import type { Project } from '../../types'

type ProjectCardProps = { project: Project }

export default function ProjectCard({ project }: ProjectCardProps) {
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
                    className={`${project.slug ? 'hover:text-text/70 underline' : 'cursor-default'} flex items-center gap-1`}
                    to={project.slug ? `/projects/${project.slug}` : ''}
                >
                    <h3>{project.title}</h3>
                    {project.slug && (
                        <Icon
                            icon="material-symbols:open-in-new-rounded"
                            width={14}
                        />
                    )}
                </Link>
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
                    if (techs?.[tech]) {
                        const t = techs[tech]
                        return (
                            <div
                                key={t.name}
                                className={`flex items-center rounded-full p-1.5 ${t.colour[0]} ${t.colour[1]}`}
                            >
                                <li title={t.name} aria-label={t.name}>
                                    <Icon width={14} icon={t.logo} />
                                </li>
                            </div>
                        )
                    }
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
            <div className="flex-1">
                <h4 className="text-sm font-bold md:text-base">
                    {project.tagline}
                </h4>
                <p className="text-textmute text-sm md:text-base">
                    {project.description}
                </p>
            </div>
            <div className="flex gap-2 self-start text-xs font-semibold md:text-sm">
                {project.link && (
                    <a
                        className={`border-border bg-text text-bg hover:bg-text/80 flex items-center gap-1 rounded-lg border px-3 py-2`}
                        href={project.link}
                        target="_blank"
                    >
                        {' '}
                        <Icon
                            width={16}
                            icon="material-symbols:rocket-launch-rounded"
                        />{' '}
                        Visit Site{' '}
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
