import Project from './Project'
import { projects } from '../data/projects'

export default function ProjectSection() {
    // const projectList = [1, 2, 3, 4, 5]

    return (
        <section id="projects" className="flex flex-col">
            <h2 className="mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
