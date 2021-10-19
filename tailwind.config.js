module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        'bai-jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
        'overpass-mono': ['"Overpass Mono"', 'monospace']
      },
      colors: {
        'warm-black': '#131313',
        'deep-purple': '#18171A',
        'mid-gray': '#2D2D2D',
        'eggplant': '#5d165d',
        'salmon': '#CD5561'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
