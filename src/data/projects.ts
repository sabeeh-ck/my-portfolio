import type { Project } from '../types'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Personal Portfolio',
        tagline: '',
        description:
            'My own portfolio website showcasing projects, skills and design sense. Built with React, Tailwind CSS & Vite.',
        startDate: '2025-12',
        endDate: '2026-01',
        slug: '',
        link: '#',
        type: 'personal',
        techStack: ['react', 'tailwind', 'vite'],
        features: {
            admin: {
                title: 'Admin Module',
                items: [
                    'Secure role-based login for authorized access',
                    'Create and manage forest divisions and stations',
                    'Add, update, and track animal species data',
                    'Assign forest officers to divisions and stations',
                    'View and respond to citizen-submitted complaints',
                    'Send alerts and notifications to officers',
                ],
            },
            officer: {
                title: 'Officer Module',
                items: [
                    'Monitor animal detections with email alerts',
                    'Manage and respond to public complaints',
                    'View detection history and hotspot analysis',
                ],
            },
            camera: {
                title: 'Camera Module',
                items: [
                    'Accepts live and pre-recorded video input',
                    'Extracts frames for animal detection',
                    'Uses TensorFlow Inception v3 for species detection',
                    'Acts as the primary data source for the system',
                    'Supports continuous surveillance in forest zones',
                ],
            },
        },
        images: [],
        challenges: [],
        improvements: [],

        repoUrl: 'https://github.com/sabeeh-ck/my-portfolio',
        status: 'done',
        order: 3,
    },
    {
        id: 2,
        title: 'toj-menshub.in',
        tagline: 'Menswear E-commerce Website',
        description:
            "A responsive menswear shop website with product listings and filters. Admins can manage products and upload images via Firebase and Cloudinary. Customers can place orders directly through shop's WhatsApp link, creating a smooth shopping experience.",
        startDate: '2025-11',
        endDate: '...',
        slug: '',
        link: 'https://toj-menshub-demo.vercel.app',
        type: 'freelance',
        techStack: ['react', 'reactrouter', 'firestore', 'cloudinary'],
        features: {
            admin: {
                title: 'Admin Module',
                items: [
                    'Secure role-based login for authorized access',
                    'Create and manage forest divisions and stations',
                    'Add, update, and track animal species data',
                    'Assign forest officers to divisions and stations',
                    'View and respond to citizen-submitted complaints',
                    'Send alerts and notifications to officers',
                ],
            },
            officer: {
                title: 'Officer Module',
                items: [
                    'Monitor animal detections with email alerts',
                    'Manage and respond to public complaints',
                    'View detection history and hotspot analysis',
                ],
            },
            camera: {
                title: 'Camera Module',
                items: [
                    'Accepts live and pre-recorded video input',
                    'Extracts frames for animal detection',
                    'Uses TensorFlow Inception v3 for species detection',
                    'Acts as the primary data source for the system',
                    'Supports continuous surveillance in forest zones',
                ],
            },
        },
        images: [],
        challenges: [],
        improvements: [],
        repoUrl: false,
        status: 'wip',
        order: 1,
    },
    {
        id: 3,
        title: 'Early Warning',
        tagline: 'Animal Detection and Detterence System',
        description:
            'An integrated web and vision-based system for early detection of wild animals near forest zones. This project aims to assist forest departments by improving wildlife monitoring, reducing human-animal conflict, and speeding up response times.',
        startDate: '2025-03',
        endDate: '2025-03',
        slug: '',
        link: '',
        type: 'academic',
        techStack: ['django', 'python', 'mysql'],
        features: {
            admin: {
                title: 'Admin Module',
                items: [
                    'Secure role-based login for authorized access',
                    'Create and manage forest divisions and stations',
                    'Add, update, and track animal species data',
                    'Assign forest officers to divisions and stations',
                    'View and respond to citizen-submitted complaints',
                    'Send alerts and notifications to officers',
                ],
            },
            officer: {
                title: 'Officer Module',
                items: [
                    'Monitor animal detections with email alerts',
                    'Manage and respond to public complaints',
                    'View detection history and hotspot analysis',
                ],
            },
            camera: {
                title: 'Camera Module',
                items: [
                    'Accepts live and pre-recorded video input',
                    'Extracts frames for animal detection',
                    'Uses TensorFlow Inception v3 for species detection',
                    'Acts as the primary data source for the system',
                    'Supports continuous surveillance in forest zones',
                ],
            },
        },
        images: [],
        challenges: [],
        improvements: [],
        repoUrl: 'https://github.com/sabeeh-ck/Early_warning',
        status: 'done',
        order: 2,
    },
]
