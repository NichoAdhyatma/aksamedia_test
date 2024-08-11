import {Column} from "@/components/Column";
import {Button} from "@/components/Button";
import {TextField} from "@/components/TextField";
import {Navbar, NavbarContent} from "@/components/Navbar";
import {useAuth} from "@/hooks/useAuth.tsx";
import Dropdown from "@/components/Dropdown";


function App() {
    const {formRef, handleLogin, handleLogout, authUser} = useAuth();

    return (
        <>
            <Navbar>
                <NavbarContent className={'flex justify-end pr-5'}>
                    <Dropdown triggerLabel={authUser?.username ?? ""}>
                        <Column>
                            {
                                authUser?.username &&
                                <Button onClick={handleLogout} className={'bg-red-600 hover:bg-red-500'}>
                                    Logout
                                </Button>
                            }
                        </Column>
                    </Dropdown>
                </NavbarContent>
            </Navbar>

            <Column className={'space-y-4 mt-10 w-full'}>
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
        </>
    )
}

export default App
