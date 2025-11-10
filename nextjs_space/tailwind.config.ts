
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 50%',
        'pos-100': '100% 50%',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Shadcn UI Base Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        
        // ⚡ QUANTUM GRADIENT (DARK) PALETTE
        'qgd': {
          bg: '#07070b',           // Deep background
          fg: '#f6f7ff',           // Near-white text
          muted: '#b8b6c9',        // Muted text
          card: '#0c0c12',         // Card background
          primary: '#5312c4',      // Purple primary
          'primary-contrast': '#f7f7fb',  // Text on primary
          accent: '#ff7f50',       // Coral accent
          ring: '#22d3ee',         // Cyan focus ring
          border: '#2c2c3d',       // Border color
          copper: '#b87333',       // Copper flame
        },
        
        // Legacy compatibility
        'primary-bg': '#07070b',
        'secondary-bg': '#0c0c12',
        'primary-accent': '#ff7f50',
        'text-primary': '#f6f7ff',
        'text-secondary': '#b8b6c9',
        
        // Legacy QuantumLeap colors (preserved for backward compatibility)
        teal: {
          50: '#e6faf8',
          100: '#ccf5f1',
          200: '#99ebe3',
          300: '#66e1d5',
          400: '#33d7c7',
          500: '#00c2b3',
          600: '#00a3a3',
          700: '#008585',
          800: '#006666',
          900: '#004848',
          950: '#002a2a',
        },
        coral: {
          50: '#fff5f2',
          100: '#ffe8e0',
          200: '#ffd1c1',
          300: '#ffb9a2',
          400: '#ffa283',
          500: '#ff7043',
          600: '#e57373',
          700: '#cc5544',
          800: '#b33333',
          900: '#991122',
          950: '#660000',
        },
        navy: {
          50: '#e6e9f0',
          100: '#ccd3e1',
          200: '#99a7c3',
          300: '#667ba5',
          400: '#334f87',
          500: '#071230',
          600: '#060e26',
          700: '#050b1d',
          800: '#040813',
          900: '#02040a',
          950: '#010205',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        qgd: '0 10px 30px -10px rgba(255,127,80,0.28)',
        'qgd-glow': '0 0 20px var(--glow)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 194, 179, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 194, 179, 0.5), 0 0 40px rgba(0, 194, 179, 0.3)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
