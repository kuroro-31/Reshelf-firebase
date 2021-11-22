module.exports = {
  mode: 'jit',
  tailwindcss: {
    exposeConfig: true,
  },
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#33C4CC',
        black: '#354247',
        grey: '#86868b',
        purple: '#8e43e7',
        red: '#ff4f81',
      },
      backgroundColor: {
        primary: '#33C4CC',
        black: '#354247',
        grey: '#86868b',
        purple: '#8e43e7',
        red: '#ff4f81',
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '21px',
        '3xl': '26px',
        '4xl': '32px',
        '5xl': '42px',
        '6xl': '56px',
        '7xl': '70px',
      },
      fontWeight: {
        bold: '600',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
