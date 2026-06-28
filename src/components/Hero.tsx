import Button from "./Button";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
    return (
        <>
            <section
                id="hero"
                className="flex h-dvh w-full flex-col justify-end px-6 pt-24 lg:px-16"
            >
                <div id="hero-name" className="z-50 w-full py-8 lg:py-3">
                    <h1 className="text-[34px] leading-[100%] font-medium lg:text-8xl">
                        Muhammed <br />{" "}
                        <span className="font-stylised text-[34px] font-extrabold lg:text-9xl">
                            Sabeeh-ck.
                        </span>
                    </h1>
                </div>
                <div
                    id="hero-text"
                    className="absolute inset-0 z-10 grid grid-cols-5 gap-6 px-6 pt-24 lg:grid-cols-12 lg:px-16"
                >
                    <div className="col-span-4 col-start-2 text-sm lg:col-span-6 lg:col-start-8 lg:text-2xl">
                        <p>
                            Designing and engineering scalable full-stack
                            applications from database to micro-interactions.
                        </p>
                    </div>
                </div>
                <hr />
                <div
                    id="bottom-menu"
                    className="z-50 flex justify-center pt-6 pb-8 lg:justify-between lg:py-5 lg:text-2xl"
                >
                    <div id="links" className="flex gap-2 lg:gap-4">
                        <Button
                            title="Github"
                            icon="github"
                            onClick={() => null}
                        />
                        <p>/</p>
                        <Button
                            title="LinkedIn"
                            icon="linkedIn"
                            onClick={() => null}
                        />
                        <p>/</p>
                        <Button
                            title="Resume"
                            icon="resume"
                            onClick={() => null}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <p>V2.0</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
