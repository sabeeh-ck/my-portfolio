import { Icon } from '@iconify/react'
import type { Project } from '../../types'
import ActionButton from './ActionButton'
import TechPill from './TechPill'

type Props = { project: Project }

const ProjectCard = ({ project }: Props) => {
    const startDate = new Date(project.startDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    })

    const formattedEndDate =
        project.status === 'wip'
            ? '...'
            : project.endDate
              ? new Date(project.endDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                })
              : null

    return (
        <article className="border-border bg-surface flex flex-col gap-3 rounded-lg border p-4">
            <div className="flex flex-wrap items-center gap-1">
                <h3>{project.title}</h3>

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
                    {formattedEndDate && ` - ${formattedEndDate}`}
                </small>
            </div>

            <ul className="flex gap-2 text-sm md:text-base">
                {project.techStack.map((tech) => (
                    <TechPill key={tech} tech={tech} />
                ))}
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
            <div className="flex flex-1 flex-col gap-1">
                <h4 className="text-sm font-bold md:text-base">
                    {project.tagline}
                </h4>
                <p className="text-textmute text-sm md:text-base">
                    {project.description}
                </p>
            </div>
            <div className="flex gap-2 self-start">
                {project.liveUrl && (
                    <ActionButton
                        variant="visit"
                        icon="material-symbols:rocket-launch-rounded"
                        href={project.liveUrl}
                    />
                )}

                <ActionButton
                    variant={project.repoUrl ? 'repo' : 'private'}
                    icon="simple-icons:github"
                    href={project?.repoUrl}
                />
            </div>
        </article>
    )
}

export default ProjectCard
