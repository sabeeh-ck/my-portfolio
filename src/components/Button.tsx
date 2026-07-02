import { MouseEventHandler, ReactNode } from "react";
import { Icon } from "./icons/Icon";
import { IconName } from "./icons/iconPaths";
import Link from "next/link";

interface ButtonProps {
    children?: string;
    icon: IconName;
    onClick: string;
    "aria-label"?: string;
}

const Button = ({
    children,
    icon,
    onClick,
    "aria-label": ariaLabel,
}: ButtonProps) => {
    return (
        <Link
            aria-label={ariaLabel}
            className="flex items-center gap-1 lg:gap-2"
            href={onClick}
        >
            <Icon name={icon} className="size-4 lg:size-6" />
            <p>{children}</p>
        </Link>
    );
};

export default Button;
