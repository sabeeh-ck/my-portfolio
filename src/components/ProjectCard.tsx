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
            className="absolute top-0 left-0 flex h-full w-full shrink-0 flex-col justify-end gap-6 pt-28"
        >
            <div id="project-image" className="min-h-0 w-full flex-1">
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
                <div className="grid w-full grid-cols-8 items-center gap-6">
                    <p className="col-span-6 text-4xl font-bold">
                        {project.tagline}
                    </p>
                    <p className="col-span-2 text-xl">{project.startDate}</p>
                </div>
                <div
                    id="project-details"
                    className="grid h-full w-full flex-1 grid-cols-8 gap-6"
                >
                    <div className="col-span-6 flex flex-col gap-4 text-xl">
                        <p>{project.description}</p>
                        <div className="flex gap-2">
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
                    <div className="col-span-2 flex flex-col gap-6 text-2xl">
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
