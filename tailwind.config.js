/** @type {import(\"tailwindcss\").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a1f3d",
        "navy-light": "#14345e",
        charcoal: "#1c1c1e",
        "charcoal-light": "#3a3a3c",
        "grey-bg": "#f7f7f8",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
