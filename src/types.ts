export type FeatureModule = {
    title: string
    items: string[]
}

export type Project = {
    id: number
    title: string
    tagline: string
    description: string
    startDate: string
    endDate: string
    slug: string
    link: string
    type: string
    techStack: string[]
    features: Record<string, FeatureModule>
    images: string[]
    challenges: string[]
    improvements: string[]
    repoUrl: string | false
    status: 'done' | 'wip'
    order: number
}
