/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 -15px 0px -10px #e8e6e2, 0 -15px 0px -7px #e8e6e2",
      },
    },
  },
  plugins: [],
};
