/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#05070a', // Deep black
                    950: '#030406',
                    900: '#05070a',
                    800: '#0d1117',
                    700: '#1a1a3a', // Deep space purple/blue
                },
                neon: {
                    cyan: '#00d0ff',
                    purple: '#9d00ff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'space-gradient': 'radial-gradient(circle at top, #0d1117 0%, #05070a 100%)',
                'neon-gradient': 'linear-gradient(135deg, #00d0ff 0%, #9d00ff 100%)',
            }
        },
    },
    plugins: [],
}

