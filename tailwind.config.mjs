/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: {
					primary: "#0f111a",
					secondary: "#ffffff"
				},
				accent: "#80CBC4"
			}
		},
	},
	plugins: [],
}
