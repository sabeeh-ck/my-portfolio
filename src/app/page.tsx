"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState(0);

    // Simple intersection observer or scroll tracker to illuminate navigation dots
    useEffect(() => {
        const handleScroll = () => {
            const pageHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            const currentIdx = Math.round(scrollPosition / pageHeight);
            setActiveSection(currentIdx);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background text-foreground relative">
            {/* FIXED NAVIGATION INDICATORS */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                {[0, 1, 2].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => window.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" })}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeSection === idx ? "bg-accent scale-125" : "bg-border hover:bg-text-muted"
                        }`}
                        aria-label={`Scroll to section ${idx + 1}`}
                    />
                ))}
            </nav>

            {/* SECTION 1: HERO */}
            <section className="h-screen w-full flex flex-col items-center justify-center snap-start px-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-text-muted bg-clip-text text-transparent">
                    Hi, I'm a Software Engineer
                </h1>
                <p className="mt-4 text-text-muted text-lg md:text-xl max-w-md text-center">
                    Building full-stack applications, e-commerce platforms, and intelligent hardware integrations.
                </p>
                <div className="mt-8 animate-bounce text-sm font-medium opacity-50">Scroll Down ↓</div>
            </section>

            {/* SECTION 2: PROJECTS */}
            <section className="h-screen w-full flex flex-col items-center justify-center snap-start bg-card-muted px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Featured Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
                    {/* MeetSlot */}
                    <div className="p-6 bg-card rounded-xl border border-border shadow-xs hover:shadow-md transition-all duration-200">
                        <h3 className="text-xl font-bold mb-2 text-accent">MeetSlot</h3>
                        <p className="text-text-muted text-sm">
                            Meeting room booking platform featuring real-time availability tracking.
                        </p>
                    </div>

                    {/* Menswear */}
                    <div className="p-6 bg-card rounded-xl border border-border shadow-xs hover:shadow-md transition-all duration-200">
                        <h3 className="text-xl font-bold mb-2 text-accent">Menswear E-Commerce</h3>
                        <p className="text-text-muted text-sm">
                            Tailored online apparel retail app with secure checkout and inventory flows.
                        </p>
                    </div>

                    {/* Animal Deterrence */}
                    <div className="p-6 bg-card rounded-xl border border-border shadow-xs hover:shadow-md transition-all duration-200">
                        <h3 className="text-xl font-bold mb-2 text-accent">Animal Deterrence</h3>
                        <p className="text-text-muted text-sm">
                            Automated hardware-software integration using detection algorithms.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SKILLS & CONTACT */}
            <section className="h-screen w-full flex flex-col items-center justify-center snap-start px-6">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-text-muted max-w-sm text-center mb-6">
                    Looking for a full-stack engineer to bring robust architecture and clean visuals to your team?
                </p>
                <a
                    href="mailto:your-email@example.com"
                    className="px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-xs"
                >
                    Get In Touch
                </a>
            </section>
        </main>
    );
}
