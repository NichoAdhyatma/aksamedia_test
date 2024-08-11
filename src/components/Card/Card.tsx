import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Card = ({children, className, ...props}: ComponentProps<'div'>) => {
    return (
        <div
            className={twMerge('w-full max-w-lg p-6 rounded-lg shadow-sm border-[1px] border-slate-400', className)}
            {...props}>
            {children}
        </div>
    );
};