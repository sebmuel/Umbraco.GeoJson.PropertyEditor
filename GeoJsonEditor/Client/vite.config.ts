import {defineConfig} from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
        },
        outDir: '../wwwroot/App_Plugins/GeoJsonEditor',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            output: {
                chunkFileNames: '[name].js',
            }
        },
    },
});