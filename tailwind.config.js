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
        blur: 'url("https://firebasestorage.googleapis.com/v0/b/cystore-cc668.appspot.com/o/white_banner_bg.png?alt=media&token=1768e5fb-ce8d-4838-8a8d-4312f2886f7f")',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
