import type { Config } from "tailwindcss";



 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        image: 'rgb(239, 238, 237)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: "class"
};
export default config;
