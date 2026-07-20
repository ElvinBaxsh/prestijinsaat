import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f5f0',
        ink: {
          900: '#14181f',
          700: '#3a3f4b',
        },
        muted: '#6b7280',
        soft: {
          border: '#e8e4da',
          softer: '#eeece5',
        },
        navy: {
          900: '#101828',
          800: '#182338',
        },
        gold: {
          50: '#fdf8ea',
          100: '#fbf1d6',
          400: '#e6c667',
          500: '#d4af37',
          600: '#b8962e',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Segoe UI', 'sans-serif'],
        body: ['Poppins', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 50px -25px rgba(20, 24, 31, 0.18)',
        card: '0 15px 35px -18px rgba(20, 24, 31, 0.15)',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rise-in': {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'float-badge': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-helmet': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        'draw-line': {
          to: { strokeDashoffset: 0 },
        },
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'nudge-x': {
          '0%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '50%': { transform: 'translateX(6px)', opacity: 0.5 },
        },
        'nudge-x-rev': {
          '0%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '50%': { transform: 'translateX(-6px)', opacity: 0.5 },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 14s linear infinite',
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float-badge': 'float-badge 6s ease-in-out infinite',
        'float-helmet': 'float-helmet 6s ease-in-out infinite 1s',
        'draw-line': 'draw-line 0.8s ease forwards',
        'nudge-x': 'nudge-x 1.3s ease-in-out infinite',
        'nudge-x-rev': 'nudge-x-rev 1.3s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        prestij: {
          primary: '#d4af37',
          'primary-content': '#14181f',
          secondary: '#101828',
          'secondary-content': '#ffffff',
          accent: '#b8962e',
          neutral: '#14181f',
          'base-100': '#ffffff',
          'base-200': '#f7f5f0',
          'base-300': '#e8e4da',
          info: '#3a3f4b',
          success: '#16a34a',
          warning: '#eab308',
          error: '#dc2626',
        },
      },
    ],
  },
}
