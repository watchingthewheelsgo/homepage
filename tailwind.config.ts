import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
        mx: ["var(--font-mx"]
      },
    },
  },
  plugins: [],
} satisfies Config;
