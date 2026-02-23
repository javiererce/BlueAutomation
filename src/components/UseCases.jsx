import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import hotelImg from '../assets/hotel.png';
import restaurantImg from '../assets/restaurant.png';
import businessImg from '../assets/business.png';

const cases = [
    {
        title: "Hoteles",
        image: hotelImg,
        benefits: [
            "Confirmación automática de reservas",
            "Gestión de múltiples habitaciones",
            "Atención a consultas fuera de horario",
            "Check-in digital inteligente"
        ],
        description: "Optimizá la experiencia de tus huéspedes desde el primer mensaje."
    },
    {
        title: "Restaurantes",
        image: restaurantImg,
        benefits: [
            "Reserva automática de mesas",
            "Confirmación inmediata vía WhatsApp",
            "Reducción de llamadas perdidas",
            "Gestión de pedidos y menú digital"
        ],
        description: "Mantené tu salón lleno sin distraer a tu personal de la cocina."
    },
    {
        title: "Negocios Digitales y Tradicionales",
        image: businessImg,
        benefits: [
            "Respuestas instantáneas en redes sociales",
            "Captación automática de clientes",
            "Derivación inteligente a humanos",
            "Sincronización con catálogos"
        ],
        description: "Convertí tus seguidores y visitantes en clientes reales de forma automática."
    }
];

export default function UseCases() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark" id="use-cases">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        Soluciones por Industria
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        Diseñamos agentes especializados que entienden los desafíos específicos de tu sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cases.map((useCase, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card flex flex-col group overflow-hidden relative border border-white/5"
                            >
                                {/* Imagen de Fondo con Overlay */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={useCase.image}
                                        alt={useCase.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                    <p className="text-gray-400 font-light mb-6 text-sm">{useCase.description}</p>

                                    <ul className="space-y-3 mb-6">
                                        {useCase.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[13px] text-gray-300">
                                                <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
