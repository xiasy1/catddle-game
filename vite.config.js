import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import pxtovw from 'postcss-px-to-viewport'

const load_pxtovw = pxtovw({
	viewportWidth: 1920,
	viewportUnit: 'vw'
})

export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [
				postcssImport(),
				autoprefixer({
					overrideBrowserslist: [
						'last 4 Chrome versions',
						'last 4 Firefox versions',
						'last 4 Edge versions',
						'last 4 Safari versions',
						'last 4 Android versions',
						'last 4 ChromeAndroid versions',
						'last 4 FirefoxAndroid versions',
						'last 4 iOS versions'
					]
				}),
				load_pxtovw
			]
		}
	},
	resolve: {
		alias: {
			'@': resolve('./src'),
			'~@': resolve('./src'),
			components: resolve('./src/components')
		}
	}
})
