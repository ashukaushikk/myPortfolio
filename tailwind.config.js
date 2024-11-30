/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#1D4ED8",
          secondary: "#9333EA",
          accent: "#14B8A6",
          neutral: "#3D4451",
          "base-100": "#ffffff", // Ensures white background
        },
      },
    ],
  },
};
