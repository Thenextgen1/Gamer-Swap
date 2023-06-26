/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2c6e49",
        secondaryColor: "#FAFAFA",
        lightColor: "#81c29e"
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}
