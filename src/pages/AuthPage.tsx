import {Column} from "@/components/Column";
import {Button} from "@/components/Button";
import {TextField} from "@/components/TextField";
import {useAuth} from "@/hooks/useAuth.tsx";
import {AppLayout} from "@/components/layout/AppLayout";

function AuthPage() {
    const {formRef, handleLogin} = useAuth();

    return (
        <AppLayout>
            <Column className={'space-y-4'}>
                <h1 className={'font-semibold text-2xl text-center'}>Login</h1>

                <Column>
                    <p>Username : Nicho</p>
                    <p>Password : 123</p>
                </Column>

                <form
                    ref={formRef}
                    onSubmit={handleLogin}>
                    <Column className={'space-y-4'}>
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

                        <Button type={'submit'}>
                            Login
                        </Button>
                    </Column>
                </form>
            </Column>
        </AppLayout>
    )
}

export default AuthPage
