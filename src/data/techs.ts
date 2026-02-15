type tech = {
    name: string
    logo: string
    colour: string[]
}

export const techs = {
    javascript: {
        name: 'Javascript',
        logo: 'material-symbols:javascript-rounded',
        colour: ['text-[#38B2AC]', 'bg-[#0C2A29]'],
    },
    css: {
        name: 'CSS 3',
        logo: 'devicon-plain:css3',
        colour: ['text-[#2965F1]', 'bg-[#0B1D4A]'],
    },
    tailwindcss: {
        name: 'Tailwind CSS',
        logo: 'simple-icons:tailwindcss',
        colour: ['text-[#38B2AC]', 'bg-[#0C2A29]'],
    },
    react: {
        name: 'React',
        logo: 'simple-icons:react',
        colour: ['text-[#61DAFB]', 'bg-[#0F2A3B]'],
    },
    firebase: {
        name: 'Firebase',
        logo: 'simple-icons:firebase',
        colour: ['text-[#F6B21A]', 'bg-[#2A1E0A]'],
    },
    cloudinary: {
        name: 'Cloudinary',
        logo: 'simple-icons:cloudinary',
        colour: ['text-[#4FA7FF]', 'bg-[#0F2438]'],
    },
    vite: {
        name: 'Vite',
        logo: 'file-icons:vite',
        colour: ['text-[#8B5CF6]', 'bg-[#1B1333]'],
    },
    django: {
        name: 'Django',
        logo: 'simple-icons:django',
        colour: ['text-[#1F8F5F]', 'bg-[#0D2A1E]'],
    },
    python: {
        name: 'Python',
        logo: 'simple-icons:python',
        colour: ['text-[#4B8BBE]', 'bg-[#0F2433]'],
    },
    reactrouter: {
        name: 'React Router',
        logo: 'simple-icons:reactrouter',
        colour: ['text-[#F44250]', 'bg-[#2B0F14]'],
    },
    mysql: {
        name: 'MySQL',
        logo: 'lineicons:mysql',
        colour: ['text-[#00758F]', 'bg-[#0A1C25]'],
    },
    express: {
        name: 'Express.js',
        logo: 'simple-icons:express',
        colour: ['text-[#BFBFBF]', 'bg-[#1F1F1F]'],
    },
    mongodb: {
        name: 'MongoDB',
        logo: 'simple-icons:mongodb',
        colour: ['text-[#3FA037]', 'bg-[#0D1F0D]'],
    },
    nextjs: {
        name: 'Next.js',
        logo: 'devicon-plain:nextjs',
        colour: ['text-[#F5F5F5]', 'bg-[#1F1F1F]'],
    },
    supabase: {
        name: 'Supabase',
        logo: 'devicon-plain:supabase',
        colour: ['text-[#3ECF8E]', 'bg-[#0B1F17]'],
    },
} satisfies Record<string, tech>

export type TechKey = keyof typeof techs
