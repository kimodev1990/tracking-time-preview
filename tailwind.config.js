/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "Blue-original": "hsl(246, 80%, 60%)",
        "Light-red-work": "hsl(15, 100%, 70%)",
        "Soft-blue-play": "hsl(195, 74%, 62%)",
        "Light-red-study": "hsl(348, 100%, 68%)",
        "Lime-green-exercise": "hsl(145, 58%, 55%)",
        "Violet-social": "hsl(264, 64%, 52%)",
        "Soft-orange-self-care": "hsl(43, 84%, 65%)",
        "Very-dark-blue": "hsl(226, 43%, 10%)",
        "Dark-blue": "hsl(235, 46%, 20%)",
        "Desaturated-blue": "hsl(235, 45%, 61%)",
        "Pale-Blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
