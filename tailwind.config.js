/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#333', // Fondo para el modo oscuro
      },
      textColor: {
        'dark': '#fff', // Texto para el modo oscuro
      },
    },
  },
  plugins: [],
}

