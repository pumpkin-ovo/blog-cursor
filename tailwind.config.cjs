/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#FF69B4",
        accent: "#FF1493",
        dark: {
          100: "#2d2d2d",
          200: "#252525",
          300: "#1f1f1f",
          400: "#181818",
          500: "#121212"
        },
        pink: {
          light: "#FFB6C1",
          DEFAULT: "#FF69B4",
          dark: "#FF1493"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Creepster', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 