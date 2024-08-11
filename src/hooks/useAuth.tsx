import {FormEvent, useContext, useRef} from "react";
import {UsernameContext} from "@/context/usernameContext";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const context = useContext(UsernameContext);
    const navigate = useNavigate();

    const loginValidation = (username: string | null, password?: string | null) => {
        if (username === 'Nicho' && password === '123') {
            alert('Login Success');
            localStorage.setItem('username', username);
            context?.setUsername(username);
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

    const handleLogout = () => {
        localStorage.removeItem('username');
        context?.setUsername(undefined);

        alert('Logout Success');
    }

    return {formRef, authUser: context, handleLogin, handleLogout}
}