import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const Navbar = ({className, children, ...props}: ComponentProps<'nav'>) => {
    return (
        <nav className={twMerge('py-8 px-6 shadow-lg sticky top-0', className)} {...props}>
            {children}
        </nav>
    );
};