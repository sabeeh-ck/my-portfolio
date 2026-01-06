import { Icon } from '@iconify/react'

type ActionButtonProp = {
    variant: 'visit' | 'repo' | 'private'
    icon: string
    href: string | undefined
}

const ActionButton = ({ icon, href, variant }: ActionButtonProp) => {
    const baseClasses =
        'flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-semibold md:text-sm'

    const variantClasses = {
        visit: 'hover:bg-text/80  bg-text text-bg',
        repo: 'border-text hover:bg-text/10',
        private: 'text-textmute bg-border border-border',
    }

    const labels = {
        visit: 'Visit Site',
        repo: 'View Repo',
        private: 'Private Repo',
    }

    if (href)
        return (
            <a
                className={` ${baseClasses} ${variantClasses[variant]}`}
                href={href}
                target={href !== '#' ? '_blank' : ''}
            >
                <Icon width={14} icon={icon} />
                {labels[variant]}
            </a>
        )
    else
        return (
            <span className={`${baseClasses} ${variantClasses[variant]}`}>
                <Icon icon={icon} />
                {labels[variant]}
            </span>
        )
}

export default ActionButton
