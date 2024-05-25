/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      colors: {
        midnight: {
          900: '#03141E',
        },
        strawberry: {
          400: '#FF758F',
          600: '#F4274E',
        },
      },
    },
  },
  plugins: [],
};
