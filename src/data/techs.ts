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
    tailwind: {
        name: 'Tailwind CSS',
        logo: 'simple-icons:tailwindcss',
        colour: ['text-[#38B2AC]', 'bg-[#0C2A29]'],
    },
    react: {
        name: 'React',
        logo: 'simple-icons:react',
        colour: ['text-[#61DAFB]', 'bg-[#0F2A3B]'],
    },
    firestore: {
        name: 'Firestore',
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
}

export type TechKey = keyof typeof techs
