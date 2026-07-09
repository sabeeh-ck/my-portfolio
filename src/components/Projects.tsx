import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectList from "./ProjectList";

interface ProjectsProps {}

gsap.registerPlugin(ScrollTrigger);

const Projects = ({}: ProjectsProps) => {
    const projectRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const previewWindow = document.getElementById("project-preview");
            const trackBall = document.getElementById("scroll-track-ball");
            const trackLine = document.getElementById("scroll-track-line");

            const titleWrappers = gsap.utils.toArray(
                ".project-list-wrapper",
            ) as HTMLElement[];
            const listTrack = document.getElementById("project-list-track");
            const listWindow = document.getElementById("project-list-window");

            if (!previewWindow || !projectRef.current) return;

            const slides = Array.from(previewWindow.children) as HTMLElement[];
            const totalSlides = slides.length;
            if (totalSlides <= 1) return;

            gsap.set(slides, { opacity: 0, pointerEvents: "none" });

            const timePerSlide = 1;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "96 center",
                    end: () => `+=${dynamicHeight}`,
                    scrub: true,
                    invalidateOnRefresh: true,
                    markers: true,
                },
            });

            tl.from(listTrack, {
                opacity: 0,
                ease: "power1.inOut",
                stagger: 0.1,
            });

            if (listWindow)
                gsap.set(listTrack, {
                    y: () => {
                        const windowCenter = listWindow.offsetHeight / 2;
                        const firstItemHalf = titleWrappers[0].offsetHeight / 2;

                        return (
                            windowCenter -
                            titleWrappers[0].offsetTop -
                            firstItemHalf
                        );
                    },
                });

            slides.forEach((slide, index) => {
                const slideCenterTime = index * timePerSlide + 0.5;

                const transitionDuration = 0.5;

                tl.to(
                    slide,
                    {
                        opacity: 1,
                        pointerEvents: "auto",
                        ease: "power1.inOut",
                        duration: transitionDuration,
                    },
                    slideCenterTime - transitionDuration,
                );

                tl.to(
                    slide,
                    {
                        opacity: 0,
                        pointerEvents: "none",
                        ease: "power1.inOut",
                        duration: transitionDuration,
                    },
                    slideCenterTime + transitionDuration,
                );

                tl.to(
                    titleWrappers[index],
                    {
                        x: 50,
                        fontWeight: "900",
                        pointerEvents: "none",
                        duration: transitionDuration,
                        ease: "power1.inOut",
                    },
                    slideCenterTime - transitionDuration,
                );

                tl.to(
                    titleWrappers[index],
                    {
                        x: 0,
                        fontWeight: "300",
                        pointerEvents: "auto",
                        duration: transitionDuration,
                        ease: "power1.inOut",
                    },
                    slideCenterTime + transitionDuration,
                );

                if (listTrack && listWindow && titleWrappers[index])
                    tl.to(
                        listTrack,
                        {
                            y: () => {
                                const windowCenter =
                                    listWindow.offsetHeight / 2;
                                const itemTop = titleWrappers[index].offsetTop;
                                const itemHalfHeight =
                                    titleWrappers[index].offsetHeight / 2;

                                return windowCenter - itemTop - itemHalfHeight;
                            },
                            ease: "none",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                if (trackBall && titleWrappers[index])
                    tl.to(
                        trackBall,
                        {
                            y: () => {
                                const wrapperTop =
                                    titleWrappers[index].offsetTop;
                                const wrapperHalfHeight =
                                    titleWrappers[index].offsetHeight / 2;
                                const ballHalfHeight =
                                    trackBall.offsetHeight / 2;

                                return (
                                    wrapperTop +
                                    wrapperHalfHeight -
                                    ballHalfHeight
                                );
                            },
                            ease: "none",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );
            });

            tl.to(
                listTrack,
                {
                    opacity: 0,
                    ease: "power1.inOut",
                    duration: 1,
                },
                ">",
            );

            if (trackBall && trackLine)
                tl.to(
                    trackBall,
                    {
                        y: trackLine.offsetHeight,
                        ease: "none",
                        duration: 1,
                    },
                    "<",
                );
        },
        { scope: projectRef },
    );

    const scrollDepthPerCard = 450;
    const dynamicHeight = projects.length * scrollDepthPerCard;

    return (
        <section
            id="projects"
            ref={projectRef}
            style={{ height: `${dynamicHeight}px` }}
            className="relative block w-full gap-16 px-6 lg:px-16"
        >
            <div
                id="projects-frame"
                className="sticky top-0 block h-dvh w-full overflow-hidden pt-24 pb-8"
            >
                <div
                    id="projects-heading"
                    className="absolute right-0 z-10 lg:top-24"
                >
                    <h2 className="text-8xl font-bold">Projects</h2>
                </div>

                <div id="projects-main" className="layout-guide h-full w-full">
                    <ProjectList />

                    <div
                        id="project-preview"
                        className="relative col-span-8 col-start-5 h-full w-full overflow-hidden lg:pt-28"
                    >
                        {projects
                            .sort((a, b) => a.order - b.order)
                            .map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
