/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#6C63FF',
        background: '#121212',
        textLight: '#FFFFFF',
        textDark: '#333333',
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

