/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit"],
      serif: ["Young Serif"],
      mono: ["Young Serif"],
    },
    extend: {
      colors: {
        raspberry: "hsl(332, 51%, 32%)",
        nutmeg: "hsl(14, 45%, 36%)",
        yellow: {
          DEFAULT: "hsl(30, 54%, 90%)",
        },
        white: "hsl(0, 0%, 100%)",
        eggshell: "hsl(30, 54%, 90%)",
        gray: "hsl(30, 18%, 87%)",
        brown: "hsl(30, 10%, 34%)",
        charcoal: "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
};
