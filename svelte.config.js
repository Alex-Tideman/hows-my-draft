import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#app', // hydrate the <div id="app"> element in src/app.html
		vite: () => ({
			server: {
				proxy: {
					'/api': {
						target: 'https://agile-mountain-18396.herokuapp.com',
						changeOrigin: true,
						secure: false,      
						ws: true, 
					}
				}
			}
		})
	}
};

export default config;
