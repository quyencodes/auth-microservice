import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        navFont: ['Inter', 'sans-serif'],
        bodyFont: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        main: '0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)',
        'white-sm':
          '0 2px 3px -1px rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.1)',
        'white-md':
          '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
