/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monoton: "Monoton",
        quicksand: "Quicksand",
      },
      colors: {
        merigold: "#F4A226",
        tangelo: "#E5771F",
        peach: "#FFEBB3",
        liver: "#5A3E2B",
        aqua: "#76C7AD",
        taupe: "#A58D69",
      },
      screens: {
        sm: "570px",
        md: "600px",
        lg: "970px",
      },
    },
  },
  plugins: [],
};
