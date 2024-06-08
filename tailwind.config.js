/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2',
      },
      fontFamily:{
        //  display:[ 'Inter','TT Hoves Pro', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", 'Segoe UI Symbol', "Noto Color Emoji"],
       body: 'inter-v13-latin-600',
        myfont:'TT Hoves Pro',
        inter_italic : 'inter-v13-latin-regular',        
        custom: ['TT Hoves Pro Compact Trial Black', 'sans-serif'],
        display: 'Inter',
      
        // TT Hoves Pro,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"
      }
    
    },
  },
  plugins: [],
}

