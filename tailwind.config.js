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
                    900: '#0B0F19', // Fondo principal
                    800: '#111827', // Fondo secundario (tarjetas)
                    700: '#1F2937', // Hover en tarjetas
                },
                primary: {
                    DEFAULT: '#00A3FF', // Azul brillante / neón
                    hover: '#2563EB', // Azul oscuro
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Tipografía moderna técnica y limpia
            }
        },
    },
    plugins: [],
}
