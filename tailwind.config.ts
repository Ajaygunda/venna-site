import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        venna: {
          brown: "#8b4513",
          brownDark: "#5c2d0c",
          espresso: "#2b1810",
          cream: "#FBF3E7",
          ivory: "#FFFBF4",
          marigold: "#E0A72A",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
