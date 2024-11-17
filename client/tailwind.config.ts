import type { Config } from "tailwindcss";

const {colors : defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(217, 28%, 15%)",
      '200' : 'hsl(218, 28%, 13%)',
      '300' : 'hsl(216, 53%, 9%)',
      '400' : 'hsl(219, 30%, 18%)',
      '500' : 'hsl(176, 68%, 64%)',
      '600' : 'hsl(198, 60%, 50%)',
      '700' : 'hsl(0, 100%, 63%)'
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'desktop-curve' : "url('/images/bg-curvy-desktop.svg')",
          'dmobile-curve' : "url('/images/bg-curvy-mobile.svg')",
          'quotes' : "url('/images/bg-quotes.png')"

      },
      fontFamily : {
        'opensan' : 'Open Sans',
        'raleway' : 'Raleway'
      },
      colors : colors,
      backgroundPosition : {
        top: 'top',
        bottom: 'bottom',
        customp : 'top 2.5rem left 8.5%',
        custompp : 'top 2.5rem left 4.5%',
      }
    },
  },
  plugins: [],
};
export default config;
