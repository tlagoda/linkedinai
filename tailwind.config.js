/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        myblue: {
          500: "#10172A",
        },
        myviolet: {
          300: "#B7BBC3",
          500: "#1B1F3F"
        },
        faq: {
          500: "#1E293B"
        }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn2s: "fadeIn 2s ease-in-out forwards",
        fadeIn1s: "fadeIn 1s ease-in-out forwards",
        fadeIn300ms: "fadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
