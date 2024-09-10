/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { keyframes: {
      zoomIn: {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      zoomIn: 'zoomIn 0.5s ease-in-out',
    },},
  },
  plugins: [],
}

