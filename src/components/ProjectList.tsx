import { projects } from "../data/projects";

const ProjectList = () => (
    <div
        id="project-list-window"
        className="relative col-span-4 flex h-1/3 flex-col justify-center overflow-hidden lg:h-full"
    >
        <div
            id="project-list-track"
            className="absolute top-0 left-0 flex w-full gap-2"
        >
            <div
                id="scroll-track-line"
                className="bg-foreground relative ml-2 hidden w-0 lg:block"
            >
                <div
                    id="scroll-track-ball"
                    className="bg-foreground absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
                />
            </div>

            <div className="flex flex-1 flex-col">
                {projects
                    .sort((a, b) => a.order - b.order)
                    .map((project, i) => (
                        <div
                            key={project.id}
                            className="project-list-wrapper flex cursor-pointer items-center justify-start py-1 lg:py-4 lg:font-light"
                        >
                            <p className="text-2xl lg:text-5xl">
                                {project.title}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </div>
);

export default ProjectList;
