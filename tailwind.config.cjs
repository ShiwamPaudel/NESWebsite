module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#013A63',
        'brand-teal': '#00A3B5',
        'brand-blue': '#0165a1',
        'gold': '#D4AF37',
        'muted-gray': '#6b6b6b',
        'cream': '#F7F5F2'
      },
      fontFamily: {
        sans: ['Urbanist', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};