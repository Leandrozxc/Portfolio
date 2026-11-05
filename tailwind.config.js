/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Geist",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "ui-monospace",
          "monospace"
        ]
      },
      colors: {
        apple: {
          bg: {
            dark: '#000000',
            light: '#ffffff'
          },
          subtle: {
            dark: '#111113',
            light: '#f5f5f7'
          },
          card: {
            dark: '#161618',
            light: '#ffffff'
          },
          border: {
            dark: 'rgba(255, 255, 255, 0.08)',
            light: 'rgba(0, 0, 0, 0.08)'
          },
          blue: '#0071e3',
          'blue-bright': '#2997ff'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

