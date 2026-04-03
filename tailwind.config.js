/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#f9fafb',
        surface: '#ffffff',
        accent: '#101b4f', // MX Studio dark navy
        accentMuted: 'rgba(16, 27, 79, 0.1)',
        foreground: '#111827',
        muted: '#6b7280',
        border: 'rgba(226, 232, 240, 0.5)',
      },
      boxShadow: {
        'diffusion': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'glass-inner': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}
