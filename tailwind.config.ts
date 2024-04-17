import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d1c1d7",
        
"secondary": "#f6cbd1",
        
"accent": "#b9d4ca",
        
"neutral": "#89b4c8",
        
"base-100": "#FAF9F6",
        
"info": "#0961aa",
        
"success": "#09ae9e",
        
"warning": "#ff9900",
        
"error": "#ff5724",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
