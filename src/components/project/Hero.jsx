export default function Hero({ title, tagline, description }) {
    return (
        <section className="flex flex-col gap-2">
            <h1 className="mt-20 uppercase">{title}</h1>
            <h3 className="text-textmute font-bold">{tagline}</h3>
            <p>{description}</p>
        </section>
    )
}
