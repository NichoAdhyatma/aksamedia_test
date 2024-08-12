import {useState, useRef, useEffect, ReactNode} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import {Button} from "@/components/atoms/Button";
import {Column} from "@/components/atoms/Column.tsx";


interface DropdownProps {
    triggerLabel: string;
    icon?: ReactNode;
    children: ReactNode;
}

export const Dropdown = ({triggerLabel, icon, children}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleTriggerClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                onClick={handleTriggerClick}
                variant={'ghost'}
                className="flex items-center space-x-3 border-[1px] border-gray-800 dark:border-white py-2 px-4 rounded-lg"
            >
                <div>
                    {icon}
                </div>

                <p className={'truncate text-sm max-w-[8ch]'}>
                    {triggerLabel}
                </p>

                <IoIosArrowDown size={15}/>
            </Button>

            {isOpen && (
                <div className="absolute mt-2 w-48 right-1 dark:bg-gray-800 mx-auto rounded-lg shadow-lg bg-white">
                    <Column className="py-4">
                        {children}
                    </Column>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
