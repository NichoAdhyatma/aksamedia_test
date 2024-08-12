import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Select = ({children, className,...props}: ComponentProps<'select'>) => {
    return (
        <select className={twMerge('border bg-white rounded-lg dark:bg-gray-800 px-2 py-2', className)} {...props}>
            {children}
        </select>
    );
};