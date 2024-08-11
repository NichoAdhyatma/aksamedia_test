import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Navbar = ({className, children, ...props}: ComponentProps<'nav'>) => {
    return (
        <nav className={twMerge('py-4 px-6 shadow-lg sticky z-50 bg-white dark:bg-gray-900 top-0', className)} {...props}>
            {children}
        </nav>
    );
};