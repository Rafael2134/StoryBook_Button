/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "rgb(var(--color-text-base))",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          inverted: "rgb(var(--color-text-inverted) / <alpha-value>)",
        },
      },

      backgroundColor: {
        skin: {
          fill: "rgb(var(--color-fill))",
          "button-accent": "rgb(var(--color-button-accent) / <alpha-value>)",
          "button-accent-hover":
            "rgb(var(--color-button-accent-hover) / <alpha-value>)",
          "button-muted ": "rgb(var(--color-button-muted) / <alpha-value>)",

          button: "rgb(var(--color-button) / <alpha-value>)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        },
      },
    },
  },
  plugins: [],
};
