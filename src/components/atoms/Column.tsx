import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Column = ({children, className, ...props}: ComponentProps<'div'>) => {
    return (
        <div className={twMerge('flex flex-col justify-center items-center', className)} {...props}>
            {children}
        </div>
    );
};