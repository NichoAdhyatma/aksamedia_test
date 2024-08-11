import {useState, useRef, useEffect, ReactNode} from 'react';
import {IoIosArrowDown} from "react-icons/io";


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
            <button
                onClick={handleTriggerClick}
                className="flex items-center space-x-4 border-[1px] border-gray-800 dark:border-white py-2 px-4 rounded-lg"
            >
                <div>
                    {icon}
                </div>

                <p>
                    {triggerLabel}
                </p>

                <IoIosArrowDown/>
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-48 right-1 dark:bg-gray-800 mx-auto rounded-lg shadow-lg bg-white">
                    <ul className="py-4">
                        {children}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
