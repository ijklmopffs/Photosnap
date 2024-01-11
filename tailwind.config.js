/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainAccentOne: "#ffc593",
        mainAccentTwo: "#bc7198",
        mainAccentThree: "#5a77ff",
        lightGrey: "#dfdfdf",
      },
      backgroundImage: () => ({
        "bg-desktop":
          "url('/src/assets/stories/desktop/moon-of-appalacia.jpg')",
        "bg-tablet": "url('/src/assets/stories/tablet/moon-of-appalacia.jpg')",
        "bg-mobile": "url('/src/assets/stories/mobile/moon-of-appalacia.jpg')",
        "bg-features": "url('/src/assets/features/desktop/beta.svg')",
      }),
    },
  },
  plugins: [],
};
