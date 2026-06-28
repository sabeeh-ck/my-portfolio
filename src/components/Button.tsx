import { MouseEventHandler, ReactNode } from "react";
import { Icon } from "./icons/Icon";
import { IconName } from "./icons/iconPaths";

interface ButtonProps {
    title?: string;
    icon: IconName;
    onClick: MouseEventHandler<HTMLButtonElement>;
    "aria-label"?: string;
}

const Button = ({
    title,
    icon,
    onClick,
    "aria-label": ariaLabel,
}: ButtonProps) => {
    return (
        <button
            aria-label={ariaLabel}
            className="flex items-center gap-1 lg:gap-2"
            onClick={onClick}
        >
            <Icon name={icon} className="size-4 lg:size-6" />
            {title}
        </button>
    );
};

export default Button;
