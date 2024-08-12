import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = 'primary' | 'warning' | 'danger' | 'ghost';

interface ButtonProps extends ComponentProps<'button'> {
    variant?: ButtonVariant;
}

export const Button = ({ children, className, variant = 'primary', ...props } : ButtonProps) => {
    const baseClass = 'py-2 rounded-lg text-white px-4 font-semibold';
    const variantClass = {
        primary: 'bg-blue-600 hover:bg-blue-500',
        warning: 'bg-yellow-500 text-black hover:bg-yellow-400',
        danger: 'bg-red-600 hover:bg-red-500',
        ghost: 'bg-transparent text-black dark:text-white dark:hover:bg-gray-900 hover:bg-gray-200'
    }[variant];

    return (
        <button
            className={twMerge('disabled:cursor-not-allowed',baseClass, variantClass, className)}
            {...props}
        >
            {children}
        </button>
    );
};
