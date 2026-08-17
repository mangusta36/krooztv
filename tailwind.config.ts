import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#09111f",
        ink: "#0f1b31",
        mist: "#aab7cf",
        coral: "#ff7a59",
        sky: "#6dd3ff"
      },
      boxShadow: {
        panel: "0 24px 60px rgba(3, 9, 18, 0.34)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(109, 211, 255, 0.18), transparent 28%), radial-gradient(circle at right 20%, rgba(255, 122, 89, 0.12), transparent 22%), linear-gradient(180deg, #09111f 0%, #0a1322 45%, #08101d 100%)"
      }
    }
  },
  plugins: []
};

export default config;
