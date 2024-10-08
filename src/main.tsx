import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {UsernameProvider} from "@/providers/UsernameProvider.tsx";
import {ThemeProvider} from "@/providers/ThemeProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "@/routes/routes";
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <UsernameProvider>
                <RouterProvider router={createBrowserRouter(routes)}/>
            </UsernameProvider>
        </ThemeProvider>
    </StrictMode>,
)
