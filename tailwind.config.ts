import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'bg-100': '#3B5260',
        'bg-200': '#293E4B',
        'bg-300': '#24313a',
        'bg-400': '#1D272E',
        'accent-200': '#FFB2D7',
        'accent-300': '#FF88C0',
        'accent-500': '#DF5C9A',
        white: '#FFFFFF',
        'gray-100': '#C0C6CA',
        'gray-200': '#A2AEB4',
        'primary-100': '#D9F2FF',
        'primary-200': '#D0E9F5',
        'primary-300': '#ADCCDC',
        'primary-500': '#75ABC7',
        'primary-600': '#58748B',
        'primary-700': '#4F6D85',
        'primary-800': '#4C6477',
        'success-100': '#E5FFF3',
        'success-400': '#C2FFC8',
        'success-600': '#559D87',
        'danger-100': '#FFDCDC',
        'danger-400': '#FF8787',
        'danger-600': '#9D5555',
      },
      dropShadow: {
        title: '0 2px #DF5C9A',
        'title-primary': '0 4px #58748B',
      },
      boxShadow: {
        'primary-chip': '0px 1px #75ABC7',
      },
    },
  },
  plugins: [],
};
export default config;
