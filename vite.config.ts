import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@src': resolve('src'),
            '@/components': resolve('src/components'),
            '@/hooks': resolve('src/hooks'),
            '@/context': resolve('src/context'),
            '@/routes': resolve('src/routes'),
            '@/pages': resolve('src/pages'),
        }
    }
})
