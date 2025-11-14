import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F1115',
        surface: '#121212',
        border: '#1F1F1F',
        primary: {
          DEFAULT: '#00CED1',
          dark: '#008B8B',
          light: '#40E0D0',
        },
        accent: {
          DEFAULT: '#00FFFF',
          dark: '#00B8B8',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          muted: '#808080',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 206, 209, 0.1)',
        'glow': '0 0 20px rgba(0, 206, 209, 0.3)',
        'depth': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 206, 209, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 206, 209, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

