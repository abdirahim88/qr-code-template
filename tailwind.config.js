/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    fontFamily : {
      Outfit : ['Outfit', 'serif'],
    },
    fontSize : {
      'preset-1' : ['22px', {
        lineHeight : '120%',
        letterSpacing: '0px',
        fontWeight: '700',
      }],
      'preset-2' : ['15px', {
        lineHeight : '140%',
        letterSpacing: '0.2px',
        fontWeight: '400',
      }],
    },
    spacing : {
      200 : '16px',
      300 : '24px',
      320 : '320px',
      400 : '40px',
    },
    borderRadius : {
      100 : '10px',
      200 : '20px',
    },
    boxShadow: {
      cardShadow: '0px 25px 25px 0px rgba(0, 0, 0, 0.0477)', 
    },
    colors : {
      White: 'hsl(0, 0%, 100%)',
      Slate : {
        300 : 'hsl(212, 45%, 89%)',
        500 : 'hsl(216, 15%, 48%)',
        900 : 'hsl(218, 44%, 22%)',
      },
    },
    extend: {},
  },
  plugins: [],
}

