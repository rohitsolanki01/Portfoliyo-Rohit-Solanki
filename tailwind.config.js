/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cal Sans"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060A',
          900: '#0A0B12',
          800: '#12141C',
        },
      },
      animation: {
        aurora: 'aurora 20s linear infinite',
        beam: 'beam 8s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-30px, 30px) rotate(180deg)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
