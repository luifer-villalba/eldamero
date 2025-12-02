import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
    site: 'https://eldamero.com',
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/draft/'),
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date()
        }),
        compress({
            CSS: true,
            HTML: {
                removeAttributeQuotes: false,
                collapseWhitespace: true,
                conservativeCollapse: true
            },
            Image: false,
            JavaScript: true,
            SVG: true
        })
    ],
    build: {
        inlineStylesheets: 'auto'
    },
    vite: {
        ssr: {
            external: ["svgo"]
        }
    }
});