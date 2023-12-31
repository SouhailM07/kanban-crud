/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        act: "#4ADE80",
        l_body: "#D1D5DB",
        d_body: "#111827",
        l_component: "#F3F4F6",
        d_component: "#1F2937",
        l_txt: "black",
        d_txt: "white",
        m_txt: "#9CA3AF",
        grayishText: "#918D89",
      },
      screens: {
        xs: "0px",
        sm: "425px",
        w535: "535px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
