import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: '#3B5260',
      'dark-bg': '#293E4B',
      'darkest-bg': '#1D272E',
      'accent-300': '#FF88C0',
      'accent-500': '#DF5C9A',
      white: '#FFFFFF',
      'gray-100': '#C0C6CA',
      'primary-100': '#D9F2FF',
      'primary-200': '#D0E9F5',
      'primary-300': '#ADCCDC',
      'primary-500': '#75ABC7',
      'primary-600': '#58748B',
      'primary-700': '#4F6D85',
      'primary-800': '#4C6477',
    },
    extend: {
      dropShadow: {
        title: '0 2px #DF5C9A',
      },
      boxShadow: {
        'primary-chip': '0px 1px #75ABC7',
      },
    },
  },
  plugins: [],
};
export default config;
