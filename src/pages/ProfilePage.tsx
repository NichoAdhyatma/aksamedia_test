import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/Column.tsx";
import {Button} from "@/components/Button.tsx";
import {TextField} from "@/components/TextField";
import {useAuth} from "@/hooks/useAuth.tsx";
import {FormEvent} from "react";

export const ProfilePage = () => {
    const {authUser, formRef} = useAuth();

    const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!formRef.current) return;

        const formData = new FormData(formRef.current);

        const fullName = formData.get('fullName') as string;

        localStorage.setItem('fullName', fullName);

        authUser?.setFullName(fullName);

        alert('Update Success');

    }
    return (
        <AppLayout>
            <Column className={'max-w-lg w-full mx-auto space-y-4'}>
                <h1 className={'text-2xl font-semibold'}>Profile Page</h1>

                <form ref={formRef} onSubmit={handleUpdate}>
                    <Column className={'w-full space-y-4'}>
                        <label>Full Name</label>
                        <TextField placeholder={'Full Name'} name={'fullName'} defaultValue={authUser?.fullName}/>
                        <Button>Update</Button>
                    </Column>
                </form>


            </Column>
        </AppLayout>
    );
};