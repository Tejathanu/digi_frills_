import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     container:{
        padding:'1rem',
        center:true,
     },
     fontFamily: {
      custom: ["Asen Pro", "sans-serif"],
      
      // Add more custom font families as needed
    },
    // fontFamily: {
    //   moonWalk: ['var(--font-moon-walk)', ...fontFamily.sans],
    // },
    // fontFamily: {
    //   asenPro: ['var(--font-asen-pro)'],
    // },
    },
  },
  plugins: [],
};
export default config;
