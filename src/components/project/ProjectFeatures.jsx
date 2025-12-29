export default function Features({ features }) {
    return (
        <section>
            <h2>Features</h2>
            {Object.entries(features).map(([key, section]) => (
                <div key={key}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.items.map((item, i) => (
                            <li key={i} className="">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}
