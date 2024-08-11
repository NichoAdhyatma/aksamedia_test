import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Button = ({children, className, ...props}: ComponentProps<'button'>) => {
    return (
        <button
            className={
                twMerge('bg-blue-600 py-2 rounded-lg text-white px-4 font-semibold hover:bg-blue-500',
                    className)}
            {...props}>
            {children}
        </button>
    );
};