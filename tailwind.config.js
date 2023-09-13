/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
    },
    // screens: {
    //   "4xl": "1600px",
    //   "5xl": "2560px",
    //   "6xl": "3440px",
    // },
  },
  plugins: [],
};
