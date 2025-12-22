export default function Project({ project }) {
    return (
        <div className="border-border rounded-lg border p-4">
            <h3>{project.title}</h3>
            <p className="text-textmute text-sm">{project.description}</p>
        </div>
    )
}
