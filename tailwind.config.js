/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../public/assets/images/heroImage.png')",
        "about-image": "url('../public/assets/images/aboutPhoto.png')",
       
      },
    },
  },
  plugins: [],
};
