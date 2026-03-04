module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f172a',
        'brand-teal': '#00A3B5',
        'slate-grey': '#CBD5E1',
        'dark-slate': '#334155',
        'matte-black': '#121212',
        'brushed-gold': '#D4AF37',
        'muted-gray': '#6b6b6b',
        'cream': '#F8FAFC'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
};