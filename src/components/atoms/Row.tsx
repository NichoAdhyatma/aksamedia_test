import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Row = ({children, className, ...props}: ComponentProps<'div'>) => {
    return (
        <div className={twMerge('flex space-x-4 justify-center items-center', className)} {...props}>
            {children}
        </div>
    );
};