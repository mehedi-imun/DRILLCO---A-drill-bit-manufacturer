module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#000",
        
"secondary": "#0077ed",
        
"accent": "#25ba99",
        
"neutral": "#241A2D",
        
"base-100": "#fff",
        
"info": "#8BA6F9",
        
"success": "#1FE089",
        
"warning": "#AB8603",
        
"error": "#F1225D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}