/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B5841A',
          light: '#D4A832',
          dark: '#8A6010',
          muted: 'rgba(181,132,26,0.15)',
        },
        dark: {
          DEFAULT: '#08060f',
          800: '#0e0b05',
          700: '#1a1208',
          600: '#2c1f0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.6)' },
        },
      },
    },
  },
  plugins: [],
}
