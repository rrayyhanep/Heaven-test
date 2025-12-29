/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'heaven-teal': {
          dark: '#1a4d4d',
          DEFAULT: '#2d6a6a',
          light: '#3d8a8a',
        },
        'heaven-blue': {
          light: '#7dd3f0',
          DEFAULT: '#5bb8d4',
        },
        'warm-gray': {
          '100': '#f7f5f2', // A very light, warm gray for backgrounds
          '500': '#a8a29e', // A medium warm gray for borders/secondary text
          '800': '#44403c', // A dark warm gray for alternative text
        },
      },
    },
  },
  plugins: [],
}
