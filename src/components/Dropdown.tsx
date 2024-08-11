import {useState, useRef, useEffect, ReactNode} from 'react';

interface DropdownProps {
    triggerLabel: string;
    children: ReactNode;
}

export const Dropdown = ({triggerLabel, children}: DropdownProps) => {
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
            <button onClick={handleTriggerClick} className="btn btn-primary">
                {triggerLabel}
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-48 right-1 mx-auto rounded-md shadow-lg bg-white">
                    <ul className="py-1">
                        {children}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
