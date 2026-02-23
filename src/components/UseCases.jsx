import { motion } from 'framer-motion';
import { Hotel, Utensils, Share2, Check } from 'lucide-react';

const cases = [
    {
        title: "Hoteles",
        icon: Hotel,
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
        icon: Utensils,
        benefits: [
            "Reserva automática de mesas",
            "Confirmación inmediata vía WhatsApp",
            "Reducción de llamadas perdidas",
            "Gestión de pedidos y menú digital"
        ],
        description: "Mantené tu salón lleno sin distraer a tu personal de la cocina."
    },
    {
        title: "Negocios Digitales",
        icon: Share2,
        benefits: [
            "Respuestas instantáneas en redes sociales",
            "Captación automática de clientes",
            "Derivación inteligente a humanos",
            "Sincronización con catálogos"
        ],
        description: "Convertí tus seguidores en clientes reales de forma automática."
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
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 flex flex-col group overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors" />

                                <div className="w-16 h-16 rounded-2xl bg-dark border border-white/5 flex items-center justify-center mb-8 group-hover:border-neon-cyan/50 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-neon-cyan" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                <p className="text-gray-400 font-light mb-8">{useCase.description}</p>

                                <ul className="space-y-4 mt-auto">
                                    {useCase.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
