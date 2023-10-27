module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
       colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        text: '#333',
        background: '#36454F',
      },
      whitespace: {
        normal: 'normal',
      },
    },
  },

  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  ]
};