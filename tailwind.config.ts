import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        calc: "10vh",
      },
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        CAROLINA_BLUE: "#0085CA",
      },
      screens: {
        xxs: "320px",
        xs: "400px",
        sm: "550px",
        md: "800px",
        "3xl": "2200px",
      },
      fontSize: {
        sm: "12px",
        xs: "11px",
      },
    },
  },
  plugins: [],
};
export default config;
