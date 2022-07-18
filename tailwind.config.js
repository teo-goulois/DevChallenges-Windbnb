/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "primary": "#333333",
        "secondary": "#828282",
        "red": "#EB5757",
        "gray": "#4F4F4F",
        "ligth": "#BDBDBD"
      }
    },
  },
  plugins: [],
}