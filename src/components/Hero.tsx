import gsap from "gsap";
import Button from "./Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollTrigger } from "gsap/all";
import Link from "next/link";

interface HeroProps {}

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const Hero = ({}: HeroProps) => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const nameSpan = document.getElementById("second-name");
        const navSlot = document.getElementById("nav");
        const headerLinks = document.getElementById("header-links");

        if (!nameSpan || !navSlot) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=130%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                markers: true,
            },
        });

        const state = Flip.getState([nameSpan, headerLinks]);

        const linkSeparator = document.createElement("p");
        linkSeparator.className = "hidden opacity-0 lg:block";
        linkSeparator.textContent = "/";

        navSlot.prepend(nameSpan, linkSeparator);

        tl.add(
            Flip.from(state, {
                scale: true,
                props: "fontSize,lineHeight",
                ease: "power1.inOut",
            }),
            0,
        );

        tl.to(
            linkSeparator,
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.5,
            },
            0.3,
        )
            .to(
                "#first-name",
                {
                    yPercent: -65,
                    opacity: 0,
                    ease: "power1.inOut",
                    duration: 0.15,
                },
                0,
            )
            .to(
                ["#bottom-menu", "#bottom-line"],
                {
                    yPercent: 25,
                    opacity: 0,
                    ease: "power1.inOut",
                    duration: 0.2,
                },
                0,
            )
            .to(
                "#hero-text",
                {
                    xPercent: 25,
                    opacity: 0,
                    ease: "power1.inOut",
                },
                0,
            );
    });

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative flex h-dvh w-full flex-col justify-end px-6 lg:h-dvh lg:px-16"
        >
            <div id="hero-name" className="z-50 w-full py-8 lg:py-3">
                <h1 className="text-[34px] leading-normal font-medium lg:text-9xl">
                    <span
                        id="first-name"
                        className="mb-9 inline-block lg:mb-36 lg:text-8xl"
                    >
                        Muhammed
                    </span>
                    <span
                        id="second-name"
                        className="font-stylised inline-block font-extrabold"
                    >
                        <Link href={"#"}>Sabeeh-ck.</Link>
                    </span>
                </h1>
            </div>

            <div className="absolute inset-0 z-10 grid grid-cols-5 gap-6 overflow-x-hidden px-6 pt-32 lg:grid-cols-12 lg:px-16 lg:pt-24">
                <div
                    id="hero-text"
                    className="col-span-4 col-start-2 text-sm lg:col-span-4 lg:col-start-9 lg:text-2xl"
                >
                    <p>
                        Designing and engineering scalable full-stack
                        applications from database to micro-interactions.
                    </p>
                </div>
            </div>

            <hr id="bottom-line" className="relative z-30" />

            <div
                id="bottom-menu"
                className="z-30 flex justify-center pt-6 pb-6 lg:justify-between lg:py-5 lg:text-2xl"
            >
                <div id="links" className="flex gap-2 lg:gap-4">
                    <Button icon="github" type="link" onClick={""}>
                        GitHub
                    </Button>
                    <p>/</p>
                    <Button icon="linkedIn" type="link" onClick={""}>
                        LinkedIn
                    </Button>
                    <p>/</p>
                    <Button icon="resume" type="download" onClick={""}>
                        Resume
                    </Button>
                </div>
                <div className="hidden lg:block">
                    <p>V2.0</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
