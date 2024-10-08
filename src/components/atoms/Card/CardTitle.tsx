import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const CardTitle = ({className, children, ...props}: ComponentProps<'h1'>) => {
    return (
        <h1 className={twMerge('text-2xl font-semibold', className)} {...props}>{children}</h1>
    );
};