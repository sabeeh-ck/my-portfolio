import { Icon } from "./icons/Icon";
import { IconName } from "./icons/iconPaths";

interface ButtonProps {
    children?: string;
    icon: IconName;
    onClick: string;
    "aria-label"?: string;
    type: "link" | "download";
}

const Button = ({
    children,
    icon,
    onClick,
    "aria-label": ariaLabel,
    type,
}: ButtonProps) => {
    return (
        <a
            aria-label={ariaLabel}
            href={onClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 lg:gap-1"
        >
            <div className="flex items-center gap-2">
                <Icon name={icon} className="size-4 lg:size-6" />
                <p>{children}</p>
            </div>
            <Icon
                name={type === "link" ? "arrowUpRight" : "arrowDown"}
                className="hidden! size-4 group-hover:inline-block! lg:size-6"
            />
        </a>
    );
};

export default Button;
