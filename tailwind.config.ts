import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/vegetables.jpg')",
      },
      colors: {
        leafyGreen: '#86b80b',
      },
    },
  },
  plugins: [],
};
export default config;
