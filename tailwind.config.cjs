/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0B1F3B",
        "brand-blue-dark": "#050B16",
        "brand-gold": "#F4C15D",
        "brand-gray-100": "#EEF2F7",
        "brand-gray-500": "#6B7280",
        "brand-gray-600": "#4B5563"
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
