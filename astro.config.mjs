import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://eldamero.com',
    integrations: [],
    vite: {
        ssr: {
            external: ["svgo"]
        }
    }
});