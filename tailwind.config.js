/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  // THIS IS THE MOST IMPORTANT NEW PART
  // It tells Tailwind to scan all your component files for class names.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // Your typography system (this is what we already built)
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        h: ['"Outfit"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      fontSize: {
        display: ['64px', { lineHeight: 'normal', fontWeight: '800' }],
        h1: ['48px', { lineHeight: 'normal', fontWeight: '600' }],
        h2: ['36px', { lineHeight: 'normal', fontWeight: '600' }],
        h3: ['32px', { lineHeight: 'normal', fontWeight: '600' }],
        h4: ['24px', { lineHeight: 'normal', fontWeight: '500' }],
        body: ['16px', { lineHeight: 'normal', fontWeight: '500' }],
        small: ['14px', { lineHeight: 'normal', fontWeight: '400' }],
        caption: ['12px', { lineHeight: 'normal', fontWeight: '400' }],
      },
      // NOTE: We have NO 'colors' object here, because your
      // global.css is handling all the colors. This is correct.
    },
  },
  plugins: [],
}