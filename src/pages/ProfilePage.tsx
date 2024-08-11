import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/Column.tsx";
import {Button} from "@/components/Button.tsx";
import {TextField} from "@/components/TextField";
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

                <form ref={formRef} onSubmit={handleUpdateProfile}>
                    <Column className={'w-full items-stretch mx-auto max-w-md gap-y-2'}>
                        <label>Full Name</label>
                        <TextField placeholder={'Full Name'} name={'fullName'} defaultValue={authUser?.fullName}/>
                        <Button className={'mt-4'}>Update</Button>
                    </Column>
                </form>
            </Column>
        </AppLayout>
    );
};