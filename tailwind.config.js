module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      whitespace: {
        normal: 'normal',
      },
    },
  },

  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  ]
};