/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      background: "#DAF0FF",
      "calculator-background": "#17181A",
      white: "#fff",
      "primary-dark": "#303136",
      "primary-blue": "#339DFF",
      "secondary-blue": "#005DB2",
      "tertiary-blue": "#1991FF",
      "quaternary-blue": "#B2DAFF",
      "primary-gray": "#818181",
      "secondary-gray": "#A5A5A5",
      "tertiary-gray": "#616161",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
