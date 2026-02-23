import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "¿Funciona con nuestro WhatsApp actual?",
        answer: "Sí, podemos integrar la IA en tu línea actual o configurar una nueva según prefieras. No perdés tus chats ni tus contactos."
    },
    {
        question: "¿Cuánto cuesta el uso de WhatsApp y la IA?",
        answer: "Nuestros planes tienen un costo mensual fijo más un consumo real por conversación de IA. Esto garantiza que pagues solo por el valor que recibís."
    },
    {
        question: "¿Cuánto tarda la implementación?",
        answer: "El despliegue estándar toma entre 7 y 14 días hábiles, incluyendo la configuración de la lógica y el entrenamiento de tu agente personalizado."
    },
    {
        question: "¿Necesitamos cambiar nuestro sistema actual?",
        answer: "No es necesario. Nuestros agentes están diseñados para integrarse con tus sistemas existentes de gestión (PMS, CRM, etc.) sin fricciones."
    },
    {
        question: "¿Puede responder en distintos idiomas?",
        answer: "¡Sí! La IA es políglota y puede detectar y responder en el idioma que el cliente prefiera de forma natural."
    },
    {
        question: "¿Qué pasa si la consulta es compleja?",
        answer: "La IA está entrenada para derivar automáticamente a un humano cuando detecta una consulta que requiere atención personalizada o supera su rango de acción."
    },
    {
        question: "¿Confirma reservas automáticamente?",
        answer: "Totalmente. El agente puede verificar disponibilidad en tiempo real, confirmar la reserva y enviarte la ficha del cliente lista."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 relative overflow-hidden bg-dark" id="faq">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
                    >
                        Preguntas Frecuentes
                    </motion.h2>
                    <p className="text-gray-400 text-xl font-light">
                        Todo lo que necesitás saber para empezar la transformación.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="glass-card overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium pr-8">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-neon-cyan transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
