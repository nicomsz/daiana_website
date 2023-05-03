/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red-orange': '#F0997D',
        'pinkish-red': '#F49AC2',
        'nav-bar-nude': '#DBB48C',
        'title-brown': '#9E7245',
        'subtitle-home-green': '#737661',
        'menu-item-rose': '#DCB8A3',
        'background-color': '#DEDCD6',
      },
    },
  },
  plugins: [],
}
