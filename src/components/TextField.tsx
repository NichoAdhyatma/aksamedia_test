import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const TextField = ({className, ...props}: ComponentProps<'input'>) => {
    return (
        <input
            className={
                twMerge('px-4 py-2 border-[1px] focus:outline-none bg-white dark:bg-gray-800 focus:ring-1 border-slate-400' +
                    ' ring-blue-600 shadow-sm rounded-lg w-full', className)
            }
            {...props}
        />
    );
};