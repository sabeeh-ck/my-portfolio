import Button from "./Button";

interface ConnectProps {}

const Connect = ({}: ConnectProps) => {
    return (
        <section
            id="connect"
            className="relative flex h-dvh w-full flex-col justify-center gap-16 px-6 pt-32 lg:px-16 lg:pt-24 lg:pb-10"
        >
            <div id="connect-heading" className="absolute top-24 right-16">
                <h2 className="text-8xl font-bold">Connect</h2>
            </div>

            <div id="skills-main" className="layout-guide w-full">
                <div
                    id="links"
                    className="flex flex-col gap-2 lg:gap-4 lg:text-2xl"
                >
                    <Button icon="github" onClick={""}>
                        GitHub
                    </Button>
                    <Button icon="linkedIn" onClick={""}>
                        LinkedIn
                    </Button>
                    <Button icon="resume" onClick={""}>
                        Resume
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Connect;
