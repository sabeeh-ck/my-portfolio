import { skills } from "../data/skills";
import { Icon } from "./icons/Icon";

interface SkillsProps {}

const Skills = ({}: SkillsProps) => {
    return (
        <section
            id="skills"
            className="relative flex h-dvh w-full flex-col justify-center gap-16 px-6 pt-32 lg:px-16 lg:pt-24 lg:pb-10"
        >
            <div id="skills-heading" className="absolute top-24 right-16">
                <h2 className="text-8xl font-bold">Skills</h2>
            </div>

            <div id="skills-main" className="layout-guide w-full">
                {Object.entries(skills).map(([groupName, groupSkills]) => (
                    <section
                        key={groupName}
                        className={`col-span-2 flex h-full flex-col gap-8 ${groupName === "Backend" ? "col-start-4" : groupName === "Tools" ? "col-start-7" : ""}`}
                    >
                        <div>
                            <h3 className="text-5xl font-bold">{groupName}</h3>
                            <hr className="mt-2" />
                        </div>
                        <div id="skills" className="flex flex-col gap-3">
                            {groupSkills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex w-full items-center justify-between text-2xl"
                                    aria-label={skill.name}
                                    title={skill.name}
                                >
                                    <span>{skill.name}</span>
                                    <Icon
                                        name={skill.icon}
                                        className="size-6"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default Skills;
