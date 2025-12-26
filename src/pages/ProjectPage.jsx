import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
    const { slug } = useParams()
    const project = projects.find((p) => p.slug === slug)

    if (!project) return <p>Project not found</p>

    return (
        <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </>
    )
}
