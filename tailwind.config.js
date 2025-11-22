/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'cursive': ['Dancing Script', 'cursive'],
      },
      colors: {
        nature: {
          50: '#f0f9f4',
          100: '#dcf4e3',
          200: '#bce8cc',
          300: '#8fd5a8',
          400: '#5ab87d',
          500: '#369962',
          600: '#277d4f',
          700: '#216442',
          800: '#1e5037',
          900: '#1a422f',
        },
      },
    },
  },
  plugins: [],
}

