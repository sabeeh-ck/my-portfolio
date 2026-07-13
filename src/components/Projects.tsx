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
            const listTrack = document.getElementById("project-list-track");
            const listWindow = document.getElementById("project-list-window");
            const titleWrappers = gsap.utils.toArray(
                ".project-list-wrapper",
            ) as HTMLElement[];

            if (
                !previewWindow ||
                !projectRef.current ||
                titleWrappers.length === 0
            )
                return;

            const slides = Array.from(previewWindow.children) as HTMLElement[];
            const totalSlides = slides.length;
            if (totalSlides <= 1) return;

            const timePerSlide = 1;
            const scrollDepthPerCard = window.innerWidth >= 1024 ? 450 : 350;
            const dynamicHeight = totalSlides * scrollDepthPerCard;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                gsap.set(slides, { opacity: 0, pointerEvents: "none" });
                gsap.set(titleWrappers, { x: 0, fontWeight: "300" });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: "96 center",
                        end: () => `+=${dynamicHeight}`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                const windowCenter = listWindow!.offsetHeight / 2;
                gsap.set(listTrack, {
                    y: () =>
                        windowCenter -
                        titleWrappers[0].offsetTop -
                        titleWrappers[0].offsetHeight / 2,
                });
                gsap.set(slides[0], { opacity: 1, pointerEvents: "auto" });
                gsap.set(titleWrappers[0], { x: 50, fontWeight: "900" });

                slides.forEach((slide, index) => {
                    const slideCenterTime = index * timePerSlide + 0.5;
                    const transitionDuration = 0.5;

                    tl.to(
                        slide,
                        {
                            opacity: 1,
                            pointerEvents: "auto",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );
                    tl.to(
                        titleWrappers[index],
                        {
                            x: 50,
                            fontWeight: "900",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                    tl.to(
                        listTrack,
                        {
                            y: () =>
                                windowCenter -
                                titleWrappers[index].offsetTop -
                                titleWrappers[index].offsetHeight / 2,
                            ease: "none",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                    if (index < totalSlides - 1) {
                        tl.to(
                            slide,
                            {
                                opacity: 0,
                                pointerEvents: "none",
                                duration: transitionDuration,
                            },
                            slideCenterTime + (1 - transitionDuration),
                        );
                        tl.to(
                            titleWrappers[index],
                            {
                                x: 0,
                                fontWeight: "300",
                                duration: transitionDuration,
                            },
                            slideCenterTime + (1 - transitionDuration),
                        );
                    }
                });
            });

            mm.add("(max-width: 1023px)", () => {
                gsap.set(slides, { opacity: 0, pointerEvents: "none" });

                titleWrappers.forEach((title, i) => {
                    if (i === 0) {
                        gsap.set(title, { x: 0, fontWeight: "900" });
                    } else {
                        gsap.set(title, {
                            x: -30,
                            fontWeight: "300",
                            opacity: 0.5,
                        });
                    }
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: "96 center",
                        end: () => `+=${dynamicHeight + 1200}`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                const mobileFocusLine = listWindow!.offsetHeight * 0.75;

                gsap.set(listTrack, {
                    y: () =>
                        mobileFocusLine -
                        titleWrappers[0].offsetTop -
                        titleWrappers[0].offsetHeight / 2,
                });
                gsap.set(slides[0], { opacity: 1, pointerEvents: "auto" });

                slides.forEach((slide, index) => {
                    const slideCenterTime = index * timePerSlide + 0.5;
                    const transitionDuration = 0.5;

                    tl.to(
                        slide,
                        {
                            opacity: 1,
                            pointerEvents: "auto",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                    tl.to(
                        titleWrappers[index],
                        {
                            x: 0,
                            opacity: 1,
                            fontWeight: "900",
                            ease: "none",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                    tl.to(
                        listTrack,
                        {
                            y: () =>
                                mobileFocusLine -
                                titleWrappers[index].offsetTop -
                                titleWrappers[index].offsetHeight / 2,
                            ease: "none",
                            duration: transitionDuration,
                        },
                        slideCenterTime - transitionDuration,
                    );

                    if (index < totalSlides - 1) {
                        tl.to(
                            slide,
                            {
                                opacity: 0,
                                pointerEvents: "none",
                                duration: transitionDuration,
                            },
                            slideCenterTime + (1 - transitionDuration),
                        );

                        tl.to(
                            titleWrappers[index],
                            {
                                x: -50,
                                fontWeight: "300",
                                opacity: 0.5,
                                duration: transitionDuration,
                                ease: "none",
                            },
                            slideCenterTime + (1 - transitionDuration),
                        );
                    }

                    if (index < totalSlides - 2) {
                        const grandparentTime =
                            (index + 1) * timePerSlide + 0.5;
                        tl.to(
                            titleWrappers[index],
                            {
                                x: -100,
                                opacity: 0,
                                duration: transitionDuration,
                                ease: "none",
                            },
                            grandparentTime + (1 - transitionDuration),
                        );
                    }
                });

                tl.to({}, {}, `+=${timePerSlide * 3}`);
            });

            return () => mm.revert();
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
                className="sticky top-0 block h-[calc(var(--vh,1vh)*100)] w-full overflow-hidden pt-24 pb-8"
            >
                <div
                    id="projects-heading"
                    className="absolute right-0 z-10 lg:top-24"
                >
                    <h2 className="text-4xl font-bold lg:text-8xl">Projects</h2>
                </div>

                <div
                    id="projects-main"
                    className="lg:layout-guide flex h-full w-full flex-col gap-2 lg:gap-0"
                >
                    <ProjectList />

                    <div
                        id="project-preview"
                        className="relative h-full w-full overflow-hidden lg:col-span-8 lg:col-start-5 lg:pt-28"
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
