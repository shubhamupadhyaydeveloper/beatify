/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : "#21c856",
        secondary : '#ffffff',
        tertiary : '#343434',
        graycolor : "#bdbdbc"
      }
    },
  },
  plugins: [],
}

