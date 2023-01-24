/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      textColor: {
        skin: {
          base: "rgb(var(--color-text-base))",
          muted: "rgb(var(--color-text-muted))",
          inverted: "rgb(var(--color-text-inverted))",
        },
      },

      backgroundColor: {
        skin: {
          fill: "rgb(var(--color-fill))",
          "button-accent": "rgb(var(--color-button-accent))",
          "button-accent-hover": "rgb(var(--color-button-accent-hover))",
          "button-muted ": "rgb(var(--color-button-muted))",

          button: "rgb(var(--color-button))",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
