module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#4a4cb2",
      
"secondary": "#f4943f",
      
"accent": "#e088c9",
      
"neutral": "#2F2D39",
      
"base-100": "#2F4465",
      
"info": "#B2CAE6",
      
"success": "#45D9B4",
      
"warning": "#E08C06",
      
"error": "#E1515D",
      },
    },
  ],
  plugins: [require("daisyui")],
}