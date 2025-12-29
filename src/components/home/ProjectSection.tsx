import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectSection() {
    return (
        <section id="projects" className="flex scroll-mt-20 flex-col">
            <h2 className="mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects
                    .sort((a, b) => a.order - b.order)
                    .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </section>
    )
}
