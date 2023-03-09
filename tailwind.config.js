/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',

	content: [
		'./index.html' , 
		'./dist/js/script.js' , 
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
			},
		},		

		container: {
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				lg: '3rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			center: true,
		}
	},
}
