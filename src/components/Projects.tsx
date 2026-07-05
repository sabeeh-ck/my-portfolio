import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Fragment, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface ProjectsProps {}

gsap.registerPlugin(ScrollTrigger);

const Projects = ({}: ProjectsProps) => {
    const projectRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const previewWindow = document.getElementById(
                "project-preview",
            ) as HTMLDivElement;
            const trackBall = document.getElementById(
                "scroll-track-ball",
            ) as HTMLDivElement;
            const trackLine = document.getElementById(
                "scroll-track-line",
            ) as HTMLDivElement;

            if (!previewWindow || !projectRef.current) return;

            const slides = Array.from(previewWindow.children) as HTMLElement[];
            const totalSlides = slides.length;
            if (totalSlides <= 1) return;

            // Force hide all absolute stacked cards initially
            gsap.set(slides, { opacity: 0, pointerEvents: "none" });

            const timePerSlide = 1;
            const totalTimelineDuration = totalSlides * timePerSlide;

            // NO GSAP PINNING AT ALL
            // Driven 100% by your CSS sticky setup on #projects-main
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top top",
                    end: "bottom bottom", // Runs perfectly until the section runway ends
                    scrub: true,
                    invalidateOnRefresh: true,
                    markers: true,
                },
            });

            // ANIMATE CARD FADES
            slides.forEach((slide, index) => {
                const slideCenterTime = index * timePerSlide + 0.5;

                // FADE IN
                tl.to(
                    slide,
                    {
                        opacity: 1,
                        pointerEvents: "auto",
                        ease: "power1.inOut",
                        duration: 0.4,
                    },
                    slideCenterTime - 0.4,
                );

                // FADE OUT
                tl.to(
                    slide,
                    {
                        opacity: 0,
                        pointerEvents: "none",
                        ease: "power1.inOut",
                        duration: 0.4,
                    },
                    slideCenterTime + 0.4,
                );
            });

            // TRACK BALL MOVEMENT
            tl.to(
                trackBall,
                {
                    y: () => trackLine.offsetHeight - trackBall.offsetHeight,
                    ease: "none",
                    duration: totalTimelineDuration,
                },
                0,
            );
        },
        { scope: projectRef },
    );

    const scrollDepthPerCard = 600;
    const dynamicHeight = projects.length * scrollDepthPerCard;

    return (
        <section
            id="projects"
            ref={projectRef}
            style={{ height: `${dynamicHeight}px` }}
            className="relative block w-full gap-16 px-6 lg:px-16 lg:pt-24"
        >
            <div
                id="visual-frame"
                className="sticky top-0 block h-dvh w-full overflow-hidden pt-24 pb-8"
            >
                <div
                    id="projects-heading"
                    className="absolute right-0 lg:top-24"
                >
                    <h2 className="text-8xl font-bold">Projects</h2>
                </div>

                <div id="projects-main" className="layout-guide h-full w-full">
                    <div className="h- absolute flex justify-center py-4">
                        <div
                            id="scroll-track-line"
                            className="absolute top-0 bottom-0 w-1 bg-red-600"
                        >
                            <div
                                id="scroll-track-ball"
                                className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-green-600"
                            />
                        </div>
                    </div>

                    <div
                        id="project-list"
                        className="col-span-3 flex items-center gap-8 pl-4"
                    >
                        <div className="flex flex-col gap-8">
                            {projects
                                .sort((a, b) => a.order - b.order)
                                .map((project, i) => (
                                    <Fragment key={project.id}>
                                        <p>{project.title}</p>
                                        {i < projects.length - 1 && <hr />}
                                    </Fragment>
                                ))}
                        </div>
                    </div>
                    <div
                        id="project-preview"
                        className="relative col-span-8 col-start-5 h-full w-full overflow-hidden lg:pt-28"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
