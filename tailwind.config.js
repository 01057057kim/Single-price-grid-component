/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        "mobile": "375px",
      },
      colors: {
        "cyan": "hsl(179, 62%, 43%)",
        "b-yellow": "hsl(71, 73%, 54%)",
        "l-gray": "hsl(204, 43%, 93%)",
        "g-blue": "hsl(218, 22%, 567%)",
      },
      fontFamily: {
        'karla': "Karla, sans-serif"
      },
    },
  },
  plugins: [],
}
