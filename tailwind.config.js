

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        special: ['CarlGine'], // Add your custom font here
        specialItalic:['italic']
      },
      colors: {
        customBlack: '#0E0E0E',
        backgroundColor:'#E9E9E9'
      },
      backgroundImage: {
        customPattern: "url('./backgroudImage.png')"
      },
         
    },
  },
  plugins: [],
}
