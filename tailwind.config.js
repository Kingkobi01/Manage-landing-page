/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bRed: "hsl(12, 88%, 59%)",
        dBlue: "hsl(228, 39%, 23%)",
        dGBlue: "hsl(227, 12%, 61%)",
        vDBlue: "hsl(233, 12%, 13%)",
        vPRed: "hsl(13, 100%, 96%)",
        vLGray: "hsl(0, 0%, 98%)",

      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
}


// ### Primary

// Bright Red: hsl(12, 88%, 59%)
// Dark Blue: hsl(228, 39%, 23%)

// ### Neutral

// Dark Grayish Blue: hsl(227, 12%, 61%)
// Very Dark Blue: hsl(233, 12%, 13%)
// Very Pale Red: hsl(13, 100%, 96%)
// Very Light Gray: hsl(0, 0%, 98%)