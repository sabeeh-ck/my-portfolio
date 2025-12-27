import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import Hero from '../components/project/Hero'

export default function ProjectPage() {
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
        </>
    )
}
