import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import svg from '@poppanator/sveltekit-svg'

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/assets/svgs/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } },
					},
					{ name: 'removeAttrs', params: { attrs: '(stroke|width|height)' } },
				],
			},
		})
	],
	resolve: {
		alias: {
			'@assets': path.resolve('./src/assets'),
			'@components': path.resolve('./src/components'),
			'@utils': path.resolve('./src/utils'),
			'@lib': path.resolve('./src/lib')
		}
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	build: {
		target: 'esnext' //browsers can handle the latest ES features
	}
});
