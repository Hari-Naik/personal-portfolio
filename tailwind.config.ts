import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        swing: "swing 8s ease-in-out infinite",
      },
      keyframes: {
        swing: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
