/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '3xl': '46rem',
      },
      margin: {
        3.5: '0.875rem',
        32: '7.75rem',
      },
      borderRadius: {
        xl: '0.875rem',
      },
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'stone-100': 'hsl(30, 54%, 90%)',
      'stone-150': 'hsl(30, 18%, 87%)',
      'stone-600': 'hsl(30, 10%, 34%)',
      'stone-900': 'hsl(24, 5%, 18%)',
      'brown-800': 'hsl(14, 45%, 36%)',
      'rose-50': 'hsl(330, 100%, 98%)',
      'rose-800': 'hsl(332, 51%, 32%)',
    },
    fontFamily: {
      sans: ['Outfit', 'Arial', 'sans-serif'],
      serif: ['"Young Serif"', 'serif'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
    },
    screens: {
      md: '737px',
    },
  },
  plugins: [],
}
