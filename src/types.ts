import type { TechKey } from './data/techs'

export type Project = {
    id: number
    title: string
    tagline: string
    description: string
    startDate: string
    endDate?: string
    type: string
    techStack: TechKey[]
    image: string
    liveUrl?: string
    repoUrl?: string
    status: 'done' | 'wip'
    order: number
}
