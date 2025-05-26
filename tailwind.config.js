/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Path to your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to all your component files
  ],
  theme: {
   extend: {
      colors: {
        'brand-pink': '#FCE8E8', // Example light pink
        'brand-dark': '#161b29', // For text and dark UI elements
        'brand-accent': '#ff5040', // Example accent, adjust as needed
        'brand-card-bg': '#051424', // Dark background for the cards
        'brand-card-text': '#FFFFFF',
        'brand-tag-bg': '#FFFFFF',
        'brand-tag-text': '#1A1A1A',
        'brand-tag-bg-active': '#1A1A1A',
        'brand-tag-text-active': '#FFFFFF',
         'brand-lime-green': '#AFFFAD', // Or the exact lime green from your "View more" button
        'brand-lime-green-dark': '#8BEF8B',
        'brand-dark-text': '#1F2937', // For titles
        'brand-light-text': '#6B7280', // For descriptions
        'brand-border': '#E5E7EB',    // For subtle borders
         'footer-bg': '#0D0D0D', // Very dark gray / off-black for the footer
        'footer-text-primary': '#FFFFFF', // White text
        'footer-text-secondary': '#A0A0A0', // Lighter gray for descriptions/links
        'footer-accent-green': '#AFFFAD',   // The vibrant green for the button
        'footer-accent-green-dark': '#8BEF8B',
        'footer-divider': '#333333', // Dark gray for the divider line
        'social-icon-bg': '#222222',
        'social-icon-hover-bg': '#333333',
      },
      fontFamily: {
        // Assuming Poppins is already set up as 'sans'
        // You might want a specific display font for the large heading
        display: ['Poppins', 'sans-serif'], // Or another bold, clean font
      },
      borderRadius: {
        'xl': '1rem', // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px (for the cards)
      },
      keyframes: {
        // ... (keep existing keyframes)
        spinAround: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
           subtlePulse: {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.05)', opacity: '.8' },
      },
      spinAroundSlow: { // Renamed to avoid conflict if 'spin-slow' is different
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        // ... (keep existing animations)
        'spin-slow': 'spinAround 25s linear infinite',
        'float-subtle': 'float 6s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 2.5s infinite ease-in-out',
          'spin-around-slow': 'spinAroundSlow 30s linear infinite',
      }
    },
  },
  plugins: [
    // Add any Tailwind plugins here if you use them
    // require('@tailwindcss/forms'), // Example for enhanced form styling
    // require('@tailwindcss/typography'), // Example for prose styling
  ],
}