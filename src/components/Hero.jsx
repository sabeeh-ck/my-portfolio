export default function Hero() {
    return (
        <section className="flex flex-col py-20">
            <div className="text-2xl font-bold">
                <h1>Hi, I'm</h1>
                <h1>Muhammed Sabeeh C K</h1>
            </div>
            <p>Junior Web Developer and Designer</p>
            <p className="text-textmute mt-2">
                I build responsive web applications using modern frontend and
                backend technologies.
            </p>
            <div className="mt-4 flex gap-4">
                <button className="button bg-text text-bg p-2">
                    View My Works
                </button>
                <button className="border-text button border">
                    Get in Touch
                </button>
            </div>
        </section>
    )
}
