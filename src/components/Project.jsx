import { Icon } from '@iconify/react'

export default function Project({ project }) {
    const techs = {
        html: {
            name: 'html',
            logo: '',
            colour: ['text-[#F06529]', 'bg-[#4F1E0B]'],
        },
        css: {
            name: 'css',
            logo: '',
            colour: ['text-[#3C99DC]', 'bg-[#152952]'],
        },
        javascript: {
            name: 'javascript',
            logo: '',
            colour: ['text-[#F7DF1E]', 'bg-[#323330]'],
        },
        tailwind: {
            name: 'tailwind',
            logo: 'simple-icons:tailwindcss',
            colour: ['text-[#38B2AC]', 'bg-[#0C2A29]'],
        },
        react: {
            name: 'react',
            logo: 'simple-icons:react',
            colour: ['text-[#61DAFB]', 'bg-[#0F2A3B]'],
        },
        firestore: {
            name: 'firestore',
            logo: 'simple-icons:firebase',
            colour: ['text-[#F6B21A]', 'bg-[#2A1E0A]'],
        },
        cloudinary: {
            name: 'cloudinary',
            logo: 'simple-icons:cloudinary',
            colour: ['text-[#4FA7FF]', 'bg-[#0F2438]'],
        },
        vite: {
            name: 'vite',
            logo: 'file-icons:vite',
            colour: ['text-[#8B5CF6]', 'bg-[#1B1333]'],
        },
    }

    return (
        <article className="border-border bg-surface flex flex-col gap-2 rounded-lg border p-4">
            <div className="flex items-center gap-2">
                <h3 className="flex items-center">
                    {project.title}
                    {project.status === 'wip' && (
                        <span className="ml-2 rounded-full bg-green-800 px-2 py-1 text-[10px] text-white">
                            wip
                        </span>
                    )}
                </h3>
                {project.link && (
                    <Icon icon="material-symbols:open-in-new-rounded" />
                )}
            </div>
            <ul className="flex gap-1 text-sm md:text-base">
                {project.technologies.map((tech) => {
                    const t = techs[tech]
                    return (
                        <div
                            className={`flex items-center rounded-full p-1 ${t.colour[0]} ${t.colour[1]}`}
                        >
                            <li>
                                <Icon icon={t.logo} />
                            </li>
                        </div>
                    )
                })}
            </ul>
            <p className="text-textmute text-sm md:text-base">
                {project.description}
            </p>
        </article>
    )
}
