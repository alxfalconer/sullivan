import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['NHGDisplay', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        muted: '#8c8880',
      },
    },
  },
} satisfies Config
