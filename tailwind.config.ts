import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#FFFFFF",
        backgroundDark: "#F0F2F3",
        shopCount: "#007580",
        btnBackground: "#029FAE"
      },
    },
  },
  plugins: [
    require('daisyui'),],
};
export default config;
