module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cream: '#FBF8F3',
				'dark-cream': '#F1EAE0',
				'seal-red': '#9B2322',
				'seal-red-dark': '#7A1918',
				'seal-red-light': '#FDF2F2',
				'tea-green': '#4A6B53',
				sage: '#7D9678',
				matcha: '#6E8664',
				gold: '#C49A45',
				taupe: '#B8A89F',
				ink: '#1E1B18'
			},
			fontFamily: {
				serif: ['"Cormorant Garamond"', '"Noto Serif SC"', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				chinese: ['"Noto Serif SC"', 'serif']
			}
		}
	},
	plugins: []
};
