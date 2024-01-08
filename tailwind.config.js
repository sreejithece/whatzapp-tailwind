/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        backimg: "url('./assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
