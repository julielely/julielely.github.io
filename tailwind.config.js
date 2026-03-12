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
        'content-primary': 'var(--color-content-primary)',
        'content-secondary': 'var(--color-content-secondary)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'stroke-primary': 'var(--color-stroke-primary)',
        'hover-bg': 'var(--color-hover-bg)',
      },
      fontFamily: {
        sans: ['Albert Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'tight-sm': '-0.1px',
        'tight-lg': '-1.6px',
      },
    },
  },
  plugins: [],
}
