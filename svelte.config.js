/** @type {import('@sveltejs/kit').Adapter} */
const staticAdapter = {
	name: 'adapter-static-inline',
	async adapt(builder) {
		const out = 'build';
		builder.rimraf(out);
		builder.mkdirp(out);
		builder.writeClient(out);
		builder.writePrerendered(out);
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {},
	kit: {
		adapter: staticAdapter,
		paths: {
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			entries: ['*'],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	}
};

export default config;
