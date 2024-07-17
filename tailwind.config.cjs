/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      colors: {
        'white': '#FFFFFF',
        'amcrbrown': {
          50: '#fff1f0',
          100: '#ffe0de',
          200: '#ffc6c3',
          300: '#ff9e99',
          400: '#ff675f',
          500: '#ff382d',
          600: '#f41a0e',
          700: '#ce1107',
          800: '#aa120a',
          900: '#85150f',
        },          
        'dablue': {
          50: '#ecf9ff',
          100: '#d5efff',
          200: '#b5e4ff',
          300: '#82d5ff',
          400: '#47baff',
          500: '#1d99ff',
          600: '#0578ff',
          700: '#0061f6',
          800: '#074dc6',
          900: '#0d47a1',
        },   
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
