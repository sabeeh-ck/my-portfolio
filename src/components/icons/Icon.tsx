import { ComponentPropsWithoutRef } from "react";
import { IconName, iconPaths } from "./iconPaths";

interface IconProps extends Omit<ComponentPropsWithoutRef<"svg">, "name"> {
    name: IconName;
}

export const Icon = ({ name, className = "" }: IconProps) => {
    const icon = iconPaths[name];

    if (!icon) {
        console.warn(`Icon "${name}" is missing inside iconPaths.ts`);
        return null;
    }

    return (
        <svg
            viewBox={icon.viewBox}
            className={`inline-block shrink-0 fill-transparent stroke-current stroke-2 align-middle text-current ${className}`}
            dangerouslySetInnerHTML={{ __html: icon.body }}
        />
    );
};
