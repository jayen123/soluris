/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-color1': '#87AB42',
        'theme-color2': '#ff6d2e',
        'theme-color3': '#0E233E',
        'theme-color4': '#0B3B5E',
        'theme-color5': '#F6A235',
        'bg-theme-color1': '#87AB42',
        'bg-theme-color2': '#ff6d2e',
        'bg-theme-color3': '#0E233E',
        'bg-theme-color4': '#0B3B5E',
        'bg-theme-color5': '#F6A235',
        'border-theme-color1': '#87AB42',
        'border-theme-color2': '#ff6d2e',
        'border-theme-color3': '#0E233E',
        'border-theme-color4': '#0B3B5E',
        'border-theme-color5': '#F6A235',
        'theme-color-dark': '#000000',
        'theme-color-light': '#ffffff',
        'text-color': '#797f7d',
        'headings-color': '#151515',
        'link-color': '#352F27',
        'link-hover-color': '#5B8C51',
      }
    },
  },
  plugins: [],
}

