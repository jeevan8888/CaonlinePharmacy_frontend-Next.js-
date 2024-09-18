import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/tw-elements/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      fontFamily: {
        'lato': ['lato']
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs"), nextui()],
};
export default config;
