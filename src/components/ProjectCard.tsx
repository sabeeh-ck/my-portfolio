import { Fragment } from "react/jsx-runtime";
import { Project } from "../data/projects";
import Button from "./Button";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col gap-6">
            <div id="project-image" className="w-full">
                --image here--
            </div>
            <div
                id="project-description"
                className="flex h-full w-full flex-1 flex-col gap-2"
            >
                <div className="grid w-full grid-cols-8 items-center gap-6">
                    <p className="col-span-6 text-4xl font-bold">
                        {project.tagline}
                    </p>
                    <p className="col-span-2 text-xl">{project.startDate}</p>
                </div>
                <div
                    id="project-details"
                    className="grid h-full w-full grid-cols-8 gap-6"
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
                    <div className="text-2xl">
                        {project.liveUrl && (
                            <Button icon="globe" onClick={project.liveUrl}>
                                Visit Site
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button icon="repo" onClick={project.repoUrl}>
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
