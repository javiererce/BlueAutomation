import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Diagnóstico Gratuito",
        description: "Analizamos las necesidades específicas de tu hotel o posada y detectamos las áreas que más se benefician de la automatización."
    },
    {
        number: "02",
        title: "Diseño de la Solución",
        description: "Creamos un plan personalizado eligiendo los agentes ideales: WhatsApp, voz, OCR o RAG, adaptados a tu operación."
    },
    {
        number: "03",
        title: "Implementación Rápida",
        description: "Ponemos en marcha tus agentes en menos de 2 semanas, con entrenamiento incluido para tu equipo."
    },
    {
        number: "04",
        title: "Soporte y Optimización",
        description: "Monitoreamos el rendimiento de tus agentes, ajustamos respuestas y escalamos la solución según crece tu negocio."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative bg-dark-900" id="how-it-works">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        ¿Cómo <span className="text-primary">Funciona</span>?
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Un proceso simple y transparente de principio a fin.
                    </p>
                </div>

                <div className="relative">
                    {/* Línea vertical conectora */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 glass-card p-8">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-dark-900 border-2 border-primary flex items-center justify-center text-primary font-bold text-lg shrink-0 z-10">
                                    {step.number}
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
