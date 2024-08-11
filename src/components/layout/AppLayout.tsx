import {Navbar, NavbarContent} from "@/components/Navbar";
import Dropdown from "@/components/Dropdown.tsx";
import {Column} from "@/components/Column.tsx";
import {Button} from "@/components/Button.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";
import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

export const AppLayout = ({className, children, ...props}: ComponentProps<'div'>) => {
    const {handleLogout, authUser} = useAuth();

    return (
        <div className={twMerge('w-full h-screen', className)} {...props}>
            <Navbar>
                <NavbarContent className={'flex justify-end pr-5'}>
                    <Dropdown triggerLabel={authUser?.username ?? ""}>
                        <Column>
                            {
                                authUser?.username &&
                                <Button onClick={handleLogout} className={'bg-red-600 hover:bg-red-500'}>
                                    Logout
                                </Button>
                            }
                        </Column>
                    </Dropdown>
                </NavbarContent>
            </Navbar>

            <div className={'pt-10'}>
                {children}
            </div>

        </div>
    );
};