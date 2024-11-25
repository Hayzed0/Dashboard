/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "color-theme-2": "#ffffff",
        "color-theme-1": "#303030",
        "color-theme1-focus": "#D8D8D8",
        "color-theme2-focus": "#333",
        "color-theme3-focus": "#89f336",
        "color-theme4-focus": "#ff5c00",
        "color-theme5-focus": "#cd1c18",
        "color-theme6-focus": "#ff13f0"

       },
       textColor:{
        "color-theme-2": "#ffffff",
        "color-theme-1": "#303030",
        "color-theme1-focus": "#000000",
        "color-theme2-focus": "#ffffff",
        "color-theme3-focus": "#ffffff",
        "color-theme4-focus": "#ffffff",
        "color-theme5-focus": "#ffffff",
        "color-theme6-focus": "#ffffff"
       }
    },
  },
  safelist: [
    {
      pattern: /bg-color-(theme1|theme2)/,
     
  
    },
    {
    pattern: /bg-color-(theme1|theme2|theme3|theme4|theme5|theme6)-focus/,
    variants:['focus']

  },
  {
    pattern: /text-color-(theme1|theme2|theme3|theme4|theme5|theme6)-focus/,
    variants:['focus']

  },
  {
    pattern: /text-color-(theme1|theme2)/,
    

  }
], 
  plugins: [],
}

