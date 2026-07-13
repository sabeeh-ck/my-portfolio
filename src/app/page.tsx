"use client";

import Connect from "../components/Connect";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useLockViewportHeight from "../components/useLockViewportHeight";

export default function Home() {
    useLockViewportHeight();

    return (
        <main>
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Connect />
        </main>
    );
}
