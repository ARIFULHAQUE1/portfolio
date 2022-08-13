module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ed6337',
        'secondary': '#ef9153',
        'accent': '#69adc0',
        'extra':'#f473f2'
      },
      textUnderlineOffset: {
        3: '5px',
      },
    },
  },
  plugins: [require("daisyui")],
}
