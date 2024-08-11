import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const TextField = ({className,...props} : ComponentProps<'input'>) => {
    return (
        <input className={twMerge('px-4 py-2 border-[1px] focus:outline-none border-slate-400 shadow-sm rounded-lg', className)} {...props}/>
    );
};