import {Column} from "@/components/atoms/Column.tsx";
import {Button} from "@/components/atoms/Button.tsx";
import {TextField} from "@/components/atoms/TextField.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";
import {AppLayout} from "@/components/layout/AppLayout";
import Modal from "@/components/molecules/Modal.tsx";
import {FaInfo} from "react-icons/fa";

function AuthPage() {
    const {formRef, handleLogin} = useAuth();

    return (
        <AppLayout>
            <Column className={'gap-4 rounded-lg items-stretch max-w-md mx-auto w-full border-[1px]' +
                ' border-gray-400 p-6'}>
                <h1 className={'font-semibold text-2xl text-center'}>Login</h1>

                <Modal
                    trigger={
                        <Button variant={'ghost'}
                                className={'flex gap-x-2 justify-center items-center border-[1px] border-slate-400 w-full my-4'}>
                            <FaInfo/>
                            <p>Info</p>
                        </Button>}>
                    <Column className={'items-center gap-y-4'}>
                        <h1 className={'text-2xl font-semibold'}>Welcome to the app</h1>
                        <p className={'text-center'}>
                            Username : Nicho
                            <br/>
                            Password : 123
                        </p>
                    </Column>
                </Modal>

                <form
                    ref={formRef}
                    onSubmit={handleLogin}>
                    <Column className={'items-stretch gap-y-5'}>
                        <TextField
                            placeholder={'Username'}
                            name={'username'}
                            id={'username'}
                            required
                        />

                        <TextField
                            placeholder={'Password'}
                            name={'password'}
                            id={'password'}
                            type={'password'}
                            required
                        />

                        <Button type={'submit'} className={'mt-4'}>
                            Login
                        </Button>
                    </Column>
                </form>
            </Column>
        </AppLayout>
    )
}

export default AuthPage
