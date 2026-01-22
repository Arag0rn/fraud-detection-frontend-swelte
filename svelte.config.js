import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/fraud-detection-frontend-swelte' : '',
        },

        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                if (path.includes('favicon.svg') || path.includes('favicon.png')) {
                    return; 
                }
                throw new Error(message);
            }
        }
    }
};

export default config;