import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const reasons = [
    {
        icon: Zap,
        title: "Implementación Rápida",
        description: "En menos de 2 semanas tu hotel tiene agentes IA funcionando y atendiendo huéspedes."
    },
    {
        icon: Shield,
        title: "Sin Riesgo",
        description: "Ofrecemos un periodo de prueba para que veas resultados antes de comprometerte."
    },
    {
        icon: Clock,
        title: "24/7 Sin Descanso",
        description: "Tus agentes nunca duermen. Atienden reservas, llamadas y consultas a cualquier hora."
    },
    {
        icon: CheckCircle,
        title: "Especialistas en Hotelería",
        description: "No somos una agencia genérica. Cada solución está diseñada pensando en la operación hotelera."
    }
];

export default function WhyUs() {
    return (
        <section className="py-24 relative bg-dark-800/30" id="why-us">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        ¿Por qué <span className="text-primary">Blue Automation</span>?
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        No solo automatizamos. Transformamos la experiencia completa de tu hotel.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
