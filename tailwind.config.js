/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'primary': 'var(--mat-sys-primary)',
        'on-primary': 'var(--mat-sys-on-primary)',
        'secondary': 'var(--mat-sys-secondary)',
        'on-secondary': 'var(--mat-sys-on-secondary)',
        'surface': '#ABCABC',
        'on-surface': 'var(--mat-sys-on-surface)',
        'error': 'var(--mat-sys-error)',
        'on-error': 'var(--mat-sys-on-error)',
      },
    },
  },
  plugins: [],
};
