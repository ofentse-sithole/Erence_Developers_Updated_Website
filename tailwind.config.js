/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure your files are scanned
  theme: {
    extend: {
      colors: {
        'light-blue': '#f0f9ff',
        'custom-gray': '#6b7280',
      },
      boxShadow: {
        'custom-light': '4px 4px 10px rgba(59, 130, 246, 0.1), -4px -4px 10px rgba(59, 130, 246, 0.1)',
      },
    },
  },
  plugins: [],
};



