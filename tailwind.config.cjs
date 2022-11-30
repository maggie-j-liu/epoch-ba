const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", ...defaultTheme.fontFamily.mono],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        epoch: {
          DEFAULT: "#FF4794",
          light: "#FFA7CC",
          lighter: "#FFD8E8",
        },
      },
    },
  },
  plugins: [],
};
