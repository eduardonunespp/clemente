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
      colors: {
        bgPrimary: '#F5F5F5',
        bgSecundary: '#EBF9FE',
        bgTerciary: '#fff',
        colorPrimary: '#003F5E',
        colorSecundary: '#C4EDFD'
        
      }
    },
  },
  plugins: [],
};
export default config;
