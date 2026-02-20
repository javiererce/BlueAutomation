import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const reasons = [
    {
        icon: Zap,
        title: "Agentes IA 24/7",
        description: "Configuramos asistentes inteligentes capaces de mantener conversaciones, filtrar consultas y cerrar ventas en cualquier momento."
    },
    {
        icon: Shield,
        title: "Automatización Omnicanal",
        description: "Centralizamos y automatizamos tus respuestas en WhatsApp, Facebook Messenger e Instagram."
    },
    {
        icon: Clock,
        title: "Gestión de Citas",
        description: "Recordatorios automáticos e integración con calendarios y CRM para reducir las ausencias y optimizar agendas."
    },
    {
        icon: CheckCircle,
        title: "Implementación Rápida",
        description: "Ofrecemos una implementación rápida con tu sistema funcionando en 48 horas y scripts personalizados."
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
                        ¿Qué hacemos por tu negocio en <span className="text-primary">Blue Automations</span>?
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Manejamos toda la infraestructura digital para que puedas aumentar tus ingresos trabajando menos.
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
