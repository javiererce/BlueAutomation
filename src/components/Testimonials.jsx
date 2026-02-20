import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "María González",
        role: "Gerente General",
        hotel: "Hotel Riviera Park",
        text: "Desde que implementamos el agente de WhatsApp, nuestras reservas directas aumentaron un 40%. Los huéspedes reciben respuestas instantáneas a cualquier hora y eso marcó la diferencia.",
        stars: 5
    },
    {
        name: "Carlos Menéndez",
        role: "Director de Operaciones",
        hotel: "Posada del Valle",
        text: "El concierge virtual RAG es increíble. Los huéspedes escanean el QR en la habitación y obtienen toda la información del hotel al instante. Redujimos las llamadas a recepción en un 60%.",
        stars: 5
    },
    {
        name: "Ana Lucía Torres",
        role: "Propietaria",
        hotel: "Boutique Hotel Sereno",
        text: "La automatización de facturas nos ahorra horas de trabajo manual cada semana. El proceso de check-in con OCR es rápido y los huéspedes quedan impresionados con la tecnología.",
        stars: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-dark-800/30" id="testimonials">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Lo que dicen <span className="text-primary">nuestros clientes</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Hoteles que ya transformaron su operación con inteligencia artificial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass-card p-8 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                                <p className="text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role} — {testimonial.hotel}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
