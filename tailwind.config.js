/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5e6ad2',
          50: '#f0f2ff',
          100: '#e0e5ff',
          200: '#c2cbff',
          300: '#a4b1ff',
          400: '#8697ff',
          500: '#687dff',
          600: '#5e6ad2',
          700: '#4a52a8',
          800: '#363d7e',
          900: '#222854',
        },
        accent: {
          DEFAULT: '#818cf8',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(94, 106, 210, 0.5)',
        'glow-lg': '0 0 40px rgba(94, 106, 210, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(94, 106, 210, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(94, 106, 210, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
