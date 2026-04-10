import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        black: "#000000",
        offwhite: "#FDFBFA",
        graydark: "#1C1C1C"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}
export default config
