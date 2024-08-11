import {FormEvent, useContext, useRef} from "react";
import {UsernameContext} from "@/providers/UsernameProvider.tsx";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const context = useContext(UsernameContext);
    const navigate = useNavigate();


    const loginValidation = (username: string | null, password?: string | null) => {
        if (username === 'Nicho' && password === '123') {
            alert('Login Success');

            localStorage.setItem('username', username);

            if (localStorage.getItem('fullName') === null) {
                localStorage.setItem('fullName', username);
            }

            context?.setUsername(username);

            context?.setFullName(username);

            navigate('/dashboard');
        } else {
            alert('Login Failed');
        }
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;

        if (!form) {
            alert('Form not found');
            return;
        }

        const formData = new FormData(form);
        const username = formData.get('username') as string | null;
        const password = formData.get('password') as string | null;

        loginValidation(username, password);
    };

    const handleUpdateProfile = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);

        const fullName = formData.get('fullName') as string;

        localStorage.setItem('fullName', fullName);

        context?.setFullName(fullName);

        alert('Update Success');
    }

    const handleLogout = () => {
        localStorage.removeItem('username');
        context?.setUsername(undefined);

        navigate('/');

        alert('Logout Success');
    }


    return {formRef, authUser: context, handleLogin, handleUpdateProfile, handleLogout}
}