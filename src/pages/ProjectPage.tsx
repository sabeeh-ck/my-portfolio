import { useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import Hero from '../components/project/ProjectHero.js'
import Features from '../components/project/ProjectFeatures.js'

const ProjectPage = () => {
    const { slug } = useParams()
    const project = projects.find((p) => p.slug === slug)

    if (!project) return <p>Project not found</p>

    return (
        <>
            <Hero
                title={project.title}
                tagline={project.tagline}
                description={project.description}
            />
            <Features features={project.features} />
        </>
    )
}

export default ProjectPage
