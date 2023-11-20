/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-hero':
          'url("https://res.cloudinary.com/dlomynswh/image/upload/v1700516199/cystore/main-hero.jpg")',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
