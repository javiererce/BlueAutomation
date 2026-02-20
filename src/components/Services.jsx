import { motion } from 'framer-motion';
import { MessageSquare, PhoneCall, FileText, Database } from 'lucide-react';

const services = [
    {
        title: "Atención al Cliente y Ventas",
        description: "Atiende a tus huéspedes 24/7 por WhatsApp. Agentes virtuales que responden dudas, gestionan reservas y convierten conversaciones en ventas de habitaciones.",
        icon: MessageSquare,
        delay: 0.1
    },
    {
        title: "Recepcionista de Voz Telefónico",
        description: "Sistemas de voz inteligentes que atienden llamadas del hotel, responden preguntas frecuentes y derivan urgencias como si fueran un operador humano.",
        icon: PhoneCall,
        delay: 0.2
    },
    {
        title: "Automatización de Facturas/Check-in",
        description: "Digitalizamos el proceso de check-in procesando DNIs/Pasaportes al instante (OCR) y automatizamos la gestión de facturas de proveedores.",
        icon: FileText,
        delay: 0.3
    },
    {
        title: "Concierge Inteligente (RAG)",
        description: "Transformamos la documentación de tu hotel en un asistente experto: horarios, menús, guías turísticas y políticas, accesible al instante para huéspedes.",
        icon: Database,
        delay: 0.4
    }
];

export default function Services() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark-900" id="services">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Nuestros <span className="text-primary">Servicios Core</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Soluciones de IA diseñadas específicamente para el sector hotelero.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: service.delay }}
                                className="glass-card p-8 group cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-dark-900 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
