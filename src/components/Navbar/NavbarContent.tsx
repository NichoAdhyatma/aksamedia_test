import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const NavbarContent = ({children, className,...props} : ComponentProps<'div'>) => {
    return (
        <div className={twMerge('', className)} {...props}>
            {children}
        </div>
    );
};