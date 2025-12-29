import Hero from '../components/home/Hero.js'
import About from '../components/home/About.js'
import Skills from '../components/home/Skills.js'
import ProjectSection from '../components/home/ProjectSection.js'
import Contact from '../components/home/Contact.js'

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <ProjectSection />
            <Contact />
        </>
    )
}
