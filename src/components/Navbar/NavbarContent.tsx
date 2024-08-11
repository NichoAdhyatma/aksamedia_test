import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import ThemeSelector from "@/components/ThemeSelector.tsx";

export const NavbarContent = ({children, className,...props} : ComponentProps<'div'>) => {
    return (
        <div className={twMerge('flex items-center space-x-4', className)} {...props}>
            <ThemeSelector/>

            {children}
        </div>
    );
};