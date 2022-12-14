/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge:["./*.html"],
  content: [],
  theme: {
    gridTemplateColumns: {
      // Simple 16 column grid
      'image': '1fr 1fr 1fr',
      'works': '1fr auto 1fr auto 1fr'
    },
    fontFamily: {
      'dm-sans': ['"DM Sans"']
    },
    colors:{
      'primary-orange': '#FF9900',
      'grey-da': '#DADADA',
      'light-red': '#F85A47',
      'grey': '#31353',
      'primary-blue': '#BDCCFF', 
      'light-purple': '#9672FF',
      'light-blue': '#4DDFFD',
      'light-pink': '#F2B8EC',

    },
    extend: {},
  },
  plugins: [],
}
