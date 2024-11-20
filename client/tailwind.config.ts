import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const colors = {
  ...{
    custom: {
      "100": "hsl(217, 28%, 15%)",
      "200": "hsl(218, 28%, 13%)",
      "300": "hsl(216, 53%, 9%)",
      "400": "hsl(219, 30%, 18%)",
      "500": "hsl(176, 68%, 64%)",
      "600": "hsl(198, 60%, 50%)",
      "700": "hsl(0, 100%, 63%)",
    },
    background: "#F9F9F9",
    foreground: "#000",
    primary: {
      "50": "#EFEFEF",
      "100": "#F1F8E8",
      "200": "#D9D9D9",
      "300": "#D8EFD3",
      "400": "#95D2B3",
      "500": "#55AD9B",
      "600": "#122023",

      DEFAULT: "#95D2B3",
    },
  },
};

const config: Config = {
  content: [
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
        "desktop-curve": "url('/images/bg-curvy-desktop.svg')",
        "dmobile-curve": "url('/images/bg-curvy-mobile.svg')",
        quotes: "url('/images/bg-quotes.png')",
      },
      fontFamily: {
        opensan: "Open Sans",
        raleway: "Raleway",
      },
      colors: colors,
      backgroundPosition: {
        top: "top",
        bottom: "bottom",
        customp: "top 2.5rem left 8.5%",
        custompp: "top 2.5rem left 4.5%",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), typography()],
};
export default config;
