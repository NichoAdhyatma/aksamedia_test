import {ComponentProps, useState} from "react";
import {twMerge} from "tailwind-merge";
import {MdVisibility, MdVisibilityOff} from "react-icons/md";

export const TextField = ({className, type = 'text', ...props}: ComponentProps<'input'>) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : type}
                className={twMerge(
                    'px-4 py-2 disabled:opacity-60 border-[1px] focus:outline-none bg-white dark:bg-gray-800 focus:ring-1 border-slate-400' +
                    ' ring-blue-600 shadow-sm rounded-lg w-full',
                    className
                )}
                {...props}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                    {showPassword ? (
                        <MdVisibility/>
                    ) : (
                        <MdVisibilityOff/>
                    )}
                </button>
            )}
        </div>
    );
};
