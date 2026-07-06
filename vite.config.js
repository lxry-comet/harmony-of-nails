import glob from 'glob'
import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
	base: '/harmony-of-nails/',
	root: 'src',
	publicDir: '../public',
	server: {
		hmr: {
			overlay: false
		}
	},
	build: {
		rollupOptions: {
			input: glob.sync('./src/**/*.html')
		},
		outDir: '../dist'
	},
	plugins: [injectHTML()]
})
