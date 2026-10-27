import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, version as viteVersion } from 'vite';

const bundlerOptionsKey = Number.parseInt(viteVersion, 10) >= 8 ? 'rolldownOptions' : 'rollupOptions';

export default defineConfig({
	plugins: [
		react(),
	],
	server: {
		port: 3000,
		host: true,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
	build: {
		emptyOutDir: true,
		[bundlerOptionsKey]: {
			checks: {
				pluginTimings: false,
			},
		},
	},
});
