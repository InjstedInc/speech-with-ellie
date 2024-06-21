import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #e3edfa, #A1C7FFFF)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        caveat: ['Caveat', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.5px' }], // adding letter-spacing for better readability on small screens
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.8rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      colors: {
        text: {
          primary: '#333333',
          secondary: '#4F4F4F',
          light: '#828282',
          muted: '#BDBDBD',
        },
        brand: {
          blue: '#0344a5',
          lightblue: '#d1e3fb',
          blueish: '#043780',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
