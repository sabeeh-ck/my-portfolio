import { Icon } from '@iconify/react'
import { techs, type TechKey } from '../../data/techs'

type TechPillProps = {
    tech: TechKey
}

const TechPill = ({ tech }: TechPillProps) => {
    const { name, logo, colour } = techs[tech]

    return (
        <li
            title={name}
            aria-label={name}
            className={`flex items-center rounded-full p-1.5 ${colour[0]} ${colour[1]}`}
        >
            <Icon width={14} icon={logo} />
        </li>
    )
}

export default TechPill
