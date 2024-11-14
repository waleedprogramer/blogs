import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        text:"#d8e6fb",
        card: "#131c32",
        color:"#8cabbd",
        dark: "rgb(14, 165, 234)",
        clr:"#94a9c9",
        gradient:"linear-gradient(90deg, rgb(14, 165, 234), rgb(11, 209, 209) 51%, rgb(14, 165, 234)) var(--x, 0)",
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgb(14, 165, 234), rgb(11, 209, 209) 51%, rgb(14, 165, 234)) var(--x, 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;
