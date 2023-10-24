import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      darkPrimary: "#053B50",
      darkSecondary: "#176B87",
      info: "#64CCC5",
      lightSecondary: "#F1F5F9",
      lightPrimary: "#FFFFFF",
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
