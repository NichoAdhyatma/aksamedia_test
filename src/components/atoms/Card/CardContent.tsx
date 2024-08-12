import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const CardContent = ({children, className,...props}: ComponentProps<'div'>) => {
    return (
        <div className={twMerge('flex flex-col space-y-4', className)} {...props}>
            {children}
        </div>
    );
};