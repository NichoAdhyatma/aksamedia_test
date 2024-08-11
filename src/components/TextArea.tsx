import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const TextArea = ({className, ...props}: ComponentProps<'textarea'>) => {
    return (
        <textarea
            className={
                twMerge('border-[1px] border-slate-400 focus:outline-none focus:ring-1 ' +
                    'ring-blue-500 rounded-lg px-4 py-2 shadow-sm w-full', className)
            }
            {...props}
        />
    );
};