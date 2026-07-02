import { Fragment } from "react/jsx-runtime";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {}

const Projects = ({}: ProjectsProps) => {
    return (
        <section
            id="projects"
            className="relative flex h-dvh w-full flex-col gap-16 overflow-x-hidden px-6 pt-32 lg:px-16 lg:pt-24 lg:pb-10"
        >
            <div id="projects-heading" className="flex w-full justify-end">
                <h2 className="text-8xl font-bold">Projects</h2>
            </div>
            <div id="projects-main" className="layout-guide w-full flex-1">
                <div
                    id="project-list"
                    className="col-span-3 flex h-full flex-col gap-8"
                >
                    {projects.map((project, i) => (
                        <Fragment key={project.id}>
                            <p>{project.title}</p>
                            {i < projects.length - 1 && <hr />}
                        </Fragment>
                    ))}
                </div>
                <div
                    id="project-preview"
                    className="col-span-8 col-start-5 flex gap-6"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
