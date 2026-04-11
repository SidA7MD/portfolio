/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        developer: {
          "primary": "#5B8DD9",      // Calm slate blue
          "secondary": "#7B68C8",    // Soft indigo
          "accent": "#3DAAB8",       // Soft teal
          "neutral": "#94A3B8",      // Readable slate 
          "base-100": "#0D1117",     // GitHub-dark
          "base-200": "#161B22",
          "base-300": "#21262D",
          "base-content": "#E6EDF3", // Light text for dark background
          "neutral-content": "#FFFFFF",
          "info": "#60A5FA",
          "success": "#4ADE80",
          "warning": "#FBBF24",
          "error": "#F87171",
        },
      },
    ],
  },
}
