import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
        viteTsconfigPaths(),
        purgeCSSPlugin({
            content: ['./resources/js/**/*.tsx'],
            safelist: ['html', 'body'],
            css: ['./resources/css/app.css'],
        }),
    ],
    resolve: {
        alias: {
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
});
