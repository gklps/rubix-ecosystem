/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Rubix brand colors - exact brand palette
        rubix: {
          primary: '#033500',     // Dark green - primary brand color
          secondary: '#fee214',   // Bright yellow - secondary brand color
          dark: '#000000',
          light: '#ffffff',
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          green: {
            50: '#f0fdf4',
            100: '#e6f7e6',
            200: '#c3e8c3',
            300: '#98d498',
            400: '#6bc06b',
            500: '#033500',        // Primary green
            600: '#022600',
            700: '#021d00',
            800: '#011400',
            900: '#000b00',
          },
          yellow: {
            50: '#fffef7',
            100: '#fffce8',
            200: '#fff8c5',
            300: '#fff297',
            400: '#ffea58',
            500: '#fee214',        // Primary yellow
            600: '#e6cb00',
            700: '#c2a800',
            800: '#9f8500',
            900: '#7d6300',
          },
        },
        primary: {
          50: '#f0fdf4',
          100: '#e6f7e6',
          200: '#c3e8c3',
          300: '#98d498',
          400: '#6bc06b',
          500: '#033500',
          600: '#022600',
          700: '#021d00',
          800: '#011400',
          900: '#000b00',
        },
        secondary: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fff8c5',
          300: '#fff297',
          400: '#ffea58',
          500: '#fee214',
          600: '#e6cb00',
          700: '#c2a800',
          800: '#9f8500',
          900: '#7d6300',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
