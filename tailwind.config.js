/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // shop.js에서 가이드대로 불러오라고 써있건만 왜 에러 ㅡㅡ (2버전이라 그런가)
    // require('@tailwindcss/aspect-ratio'),
  ],
  // prefix: "tw-",
  // important: true,
}
