/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff006e',
        'neon-purple': '#8000ff',
        'neon-cyan': '#00f0ff',
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a2e'
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #ff006e 0%, #8000ff 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #8000ff 0%, #00f0ff 100%)'
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      }
    }
  },
  plugins: []
};
