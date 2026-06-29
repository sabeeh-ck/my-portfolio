import gsap from "gsap";
import Button from "./Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollTrigger } from "gsap/all";

interface HeroProps {}

gsap.registerPlugin(ScrollTrigger, Flip);

const Hero = ({}: HeroProps) => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const heroSpan = document.querySelector(".moving-span");
            const navSlot = document.querySelector(".nav-logo-slot");

            if (!heroSpan || !navSlot) return;

            const state = Flip.getState(heroSpan);
            navSlot.appendChild(heroSpan);

            Flip.from(state, {
                duration: 1,
                ease: "power1.inOut",
                scale: true,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            });

            tl.to("#hero-text", {
                xPercent: 120,
                opacity: 0,
                ease: "power1.inOut",
                duration: 0.075,
            });

            tl.to(
                "#first-name",
                {
                    yPercent: -50,
                    opacity: 0,
                    ease: "power1.inOut",
                    duration: 0.025,
                },
                "<",
            );

            tl.to(
                ["#bottom-menu", "#bottom-line"],
                {
                    yPercent: 50,
                    opacity: 0,
                    ease: "power1.inOut",
                    duration: 0.075,
                },
                "<",
            );
        },
        { scope: heroRef },
    );

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative flex h-dvh w-full flex-col justify-end px-6 lg:h-dvh lg:px-16"
        >
            <div id="hero-name" className="z-50 w-full py-8 lg:py-3">
                <h1 className="text-[34px] leading-[100%] font-medium lg:text-8xl">
                    <span id="first-name" className="inline-block">
                        Muhammed
                    </span>
                    <span
                        id="second-name"
                        className="moving-span font-stylised inline-block text-[34px] font-extrabold lg:text-9xl"
                    >
                        Sabeeh-ck.
                    </span>
                </h1>
            </div>

            <div className="absolute inset-0 z-10 grid grid-cols-5 gap-6 overflow-x-hidden px-6 lg:grid-cols-12 lg:px-16 lg:pt-24">
                <div
                    id="hero-text"
                    className="col-span-4 col-start-2 text-sm lg:col-span-6 lg:col-start-7 lg:text-2xl"
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
                className="z-30 flex justify-center pt-6 pb-8 lg:justify-between lg:py-5 lg:text-2xl"
            >
                <div id="links" className="flex gap-2 lg:gap-4">
                    <Button title="Github" icon="github" onClick={""} />
                    <p>/</p>
                    <Button title="LinkedIn" icon="linkedIn" onClick={""} />
                    <p>/</p>
                    <Button title="Resume" icon="resume" onClick={""} />
                </div>
                <div className="hidden lg:block">
                    <p>V2.0</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
