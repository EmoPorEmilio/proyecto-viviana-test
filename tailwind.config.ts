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
      accent: '#DF5C9A',
      white: '#FFFFFF',
      'lightest-primary': '#D9F2FF',
      'light-primary': '#D0E9F5',
      'dark-primary': '#58748B',
    },
    extend: {
      dropShadow: {
        title: '0 2px #DF5C9A',
      },
    },
  },
  plugins: [],
};
export default config;
