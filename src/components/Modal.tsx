import React, {useState} from 'react';

interface ModalProps {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    trigger?: React.ReactNode;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({onOpenChange, open, trigger, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTriggerClick = (value: boolean) => {
        if (onOpenChange) {
            onOpenChange(value);
        }
        setIsOpen(value);
    }

    return (
        <>
            <div onClick={() => handleTriggerClick(true)} className="inline-block cursor-pointer">
                {trigger}
            </div>

            {(open != undefined ? open : isOpen) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
                        <button
                            onClick={() => handleTriggerClick(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            &times;
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
