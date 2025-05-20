/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#baddfd',
          300: '#7cc2fc',
          400: '#36a6f9',
          500: '#0c8df0',
          600: '#016fcf',
          700: '#0159a8',
          800: '#064b89',
          900: '#0a3f71',
          950: '#072a4e',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'hindi': ['Tiro Devanagari Hindi', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        brush: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float-up': 'floatUp 0.8s ease-out',
        'brush-move': 'brush 8s infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'texture': "url('https://images.pexels.com/photos/6858657/pexels-photo-6858657.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }
    },
  },
  plugins: [],
};