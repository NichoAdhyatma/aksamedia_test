import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/atoms/Column.tsx";
import {Button} from "@/components/atoms/Button.tsx";
import {TextField} from "@/components/atoms/TextField.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

export const ProfilePage = () => {
    const {authUser, formRef, handleUpdateProfile} = useAuth();

    const navigate = useNavigate();

    return (
        <AppLayout>
            <Column className={'max-w-md mx-auto items-stretch space-y-4'}>
                <Button variant={'ghost'} className={'border-[1px] mb-2'} onClick={() => navigate('/')}>Back</Button>
                <h1 className={'text-2xl font-semibold text-center'}>Profile Page</h1>

                <label>Username</label>
                <TextField placeholder={'Username'} defaultValue={authUser?.username} disabled/>

                <form ref={formRef} onSubmit={handleUpdateProfile}>
                    <Column className={'w-full items-stretch mx-auto max-w-md gap-y-2'}>
                        <label htmlFor={'fullName'}>Full Name</label>
                        <TextField autoFocus id={'fullName'} placeholder={'Full Name'} name={'fullName'} defaultValue={authUser?.fullName}/>
                        <Button className={'mt-4'}>Update</Button>
                    </Column>
                </form>
            </Column>
        </AppLayout>
    );
};