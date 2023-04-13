/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        auto: "auto",
        negative: -1,
        0: 0,
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
}
