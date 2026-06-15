/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        veliora: {
          blue: "#1E8CB0",
          green: "#349569",
          ink: "#10232B",
          mist: "#F3FAF8",
          line: "#DCEBE8"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(16, 35, 43, 0.14)"
      }
    }
  },
  plugins: []
};
