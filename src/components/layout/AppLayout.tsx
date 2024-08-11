import {Navbar, NavbarContent} from "@/components/Navbar";
import Dropdown from "@/components/Dropdown.tsx";
import {Column} from "@/components/Column.tsx";
import {Button} from "@/components/Button.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";
import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa";


export const AppLayout = ({className, children, ...props}: ComponentProps<'div'>) => {
    const {handleLogout, authUser} = useAuth();


    const navigate = useNavigate();

    return (
        <div
            className={twMerge('w-full min-h-screen h-full bg-white dark:bg-gray-800 dark:text-white', className)} {...props}>
            <Navbar>
                <NavbarContent className={'flex justify-end pr-5'}>
                    {authUser?.username && <Dropdown icon={<FaUser/>} triggerLabel={authUser?.fullName ?? ""}>
                        <Column className={'space-y-4 w-full items-stretch px-4'}>
                            <Button variant={'ghost'} onClick={() => navigate('/')}>
                                Home
                            </Button>

                            <Button variant={'ghost'} onClick={() => navigate('/profile')}>
                                Profile
                            </Button>

                            <Button onClick={handleLogout} className={'bg-red-600 hover:bg-red-500'}>
                                Logout
                            </Button>
                        </Column>
                    </Dropdown>}
                </NavbarContent>
            </Navbar>

            <div className={'px-4 mt-6'}>
                {children}
            </div>
        </div>
    );
};