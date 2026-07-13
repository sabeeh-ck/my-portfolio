import { Fragment } from "react/jsx-runtime";
import { Project } from "../data/projects";
import Button from "./Button";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            id="project-card"
            className="absolute top-0 left-0 flex h-full w-full shrink-0 flex-col gap-4 lg:justify-end lg:gap-6 lg:pt-28"
        >
            <div
                id="project-image"
                className="flex min-h-0 w-full flex-1 justify-center lg:justify-start"
            >
                <img
                    src={project.image}
                    alt="Project Preview"
                    className="h-full object-contain"
                />
            </div>
            <div
                id="project-description"
                className="flex h-64 w-full shrink-0 flex-col gap-2"
            >
                <div className="w-full items-center gap-6 lg:grid lg:grid-cols-8">
                    <p className="col-span-6 font-bold lg:text-3xl">
                        {project.tagline}
                    </p>
                    <p className="text-sm font-medium lg:col-span-2 lg:text-xl">
                        {project.startDate}
                    </p>
                </div>

                <div
                    id="project-details"
                    className="flex h-full w-full flex-1 flex-col gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                >
                    <div className="flex flex-col gap-2 text-sm lg:col-span-6 lg:gap-4 lg:text-xl">
                        <p>{project.description}</p>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                            {project.techStack.map((tech, i) => (
                                <Fragment key={i}>
                                    <p key={tech} className="">
                                        {tech}
                                    </p>
                                    {i < project.techStack.length - 1 && (
                                        <p>-</p>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>

                    <div
                        id="buttons"
                        className="col-span-2 flex justify-end gap-4 text-2xl lg:flex-col lg:justify-start lg:gap-6"
                    >
                        {project.liveUrl && (
                            <Button
                                icon="globe"
                                type="link"
                                onClick={project.liveUrl}
                            >
                                Visit Site
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button
                                icon="repo"
                                type="link"
                                onClick={project.repoUrl}
                            >
                                View Code
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
