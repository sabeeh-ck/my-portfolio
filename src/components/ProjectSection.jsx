import Project from './Project'

export default function ProjectSection() {
    const projectList = [1, 2, 3, 4, 5]

    return (
        <section id="projects" className="flex flex-col">
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map((project) => (
                    <Project key={project} />
                ))}
            </div>
        </section>
    )
}
