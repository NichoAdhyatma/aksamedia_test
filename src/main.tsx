import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'
import {UsernameProvider} from "@/context/usernameContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <UsernameProvider>
          <App/>
      </UsernameProvider>
  </StrictMode>,
)
