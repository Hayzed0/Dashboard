/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-theme1-focus": "#D8D8D8",
        "color-theme2-focus": "#303030",
        "color-theme3-focus": "#89f336",
        "color-theme4-focus": "#ff5c00",
        "color-theme5-focus": "#cd1c18",
        "color-theme6-focus": "#ff13f0",
        "color-theme1-hover": "#D8D8D8",
        "color-theme2-hover": "#303030",
        "color-theme3-hover": "#89f336",
        "color-theme4-hover": "#ff5c00",
        "color-theme5-hover": "#cd1c18",
        "color-theme6-hover": "#ff13f0",
      },

      textColor: {
        "color-theme1-focus": "#000000",
        "color-theme2-focus": "#ffffff",
        "color-theme3-focus": "#ffffff",
        "color-theme4-focus": "#ffffff",
        "color-theme5-focus": "#ffffff",
        "color-theme6-focus": "#ffffff",
        "color-theme1-hover": "#000000",
        "color-theme2-hover": "#ffffff",
        "color-theme3-hover": "#ffffff",
        "color-theme4-hover": "#ffffff",
        "color-theme5-hover": "#ffffff",
        "color-theme6-hover": "#ffffff",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-color-(theme1|theme2)/,
     

    },
    {
      pattern: /bg-color-(theme1|theme2|theme3|theme4|theme5|theme6)-focus/,
      variants: ["focus"],
    },
    {
      pattern: /text-color-(theme1|theme2|theme3|theme4|theme5|theme6)-focus/,
      variants: ["focus"],
    },
    {
      pattern: /bg-color-(theme1|theme2|theme3|theme4|theme5|theme6)-hover/,
      variants: ["hover"],
    },
    {
      pattern: /text-color-(theme1|theme2|theme3|theme4|theme5|theme6)-hover/,
      variants: ["hover"],
    },
  ],
  plugins: [],
  darkMode: "class",
};
