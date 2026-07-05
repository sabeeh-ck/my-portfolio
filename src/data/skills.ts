import { IconName } from "../components/icons/iconPaths";

type Skill = {
    name: string;
    icon: IconName;
};

export const skills = {
    Frontend: [
        { name: "React", icon: "react" },
        {
            name: "Next.js",
            icon: "nextjs",
        },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Framer Motion", icon: "framerMotion" },
        { name: "GSAP", icon: "gsap" },
        {
            name: "React Router",
            icon: "reactRouter",
        },
    ],

    Backend: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "expressjs" },
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "REST APIs", icon: "restAPI" },
        { name: "Mongoose", icon: "mongoose" },
    ],

    Tools: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Figma", icon: "figma" },
        { name: "Vercel", icon: "vercel" },
        { name: "Supabase", icon: "supabase" },
        { name: "Firebase", icon: "firebase" },
        { name: "Cloudinary", icon: "cloudinary" },
    ],
} satisfies Record<string, Skill[]>;
