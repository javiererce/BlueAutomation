import { motion } from 'framer-motion';
import { MessageSquare, Cpu, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: "El cliente escribe",
        description: "Tu cliente envía una consulta por WhatsApp, Instagram o Facebook en cualquier momento del día."
    },
    {
        icon: Cpu,
        title: "El agente resuelve",
        description: "Tu Agente IA procesa la consulta al instante, responde dudas y gestiona la disponibilidad."
    },
    {
        icon: CheckCircle,
        title: "Venta confirmada",
        description: "La reserva, turno o venta queda confirmada y registrada en tus sistemas sin que tengas que hacer nada."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative bg-dark" id="how-it-works">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        ¿Cómo Funciona?
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        Un proceso inteligente en 3 simples pasos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Línea conectora horizontal para desktop */}
                    <div className="hidden md:block absolute top-[40%] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center relative z-10 group"
                            >
                                <div className="w-24 h-24 rounded-full bg-dark border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,208,255,0.2)] transition-all duration-500 relative">
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neon-cyan text-dark font-bold flex items-center justify-center text-sm">
                                        {index + 1}
                                    </div>
                                    <Icon className="w-10 h-10 text-neon-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

