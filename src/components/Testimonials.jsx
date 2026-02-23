import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();

    const testimonialData = [
        {
            name: "María González",
            business: "Posada Riviera Park",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "Carlos Menéndez",
            business: "Ristorante del Valle",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "Ana Lucía Torres",
            business: "TechStore E-commerce",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
        }
    ];

    return (
        <section className="py-24 bg-dark relative overflow-hidden" id="testimonials">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        {t.testimonials.title1} <span className="text-white">{t.testimonials.title2}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        {t.testimonials.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.testimonials.items.map((testimonial, index) => {
                        const data = testimonialData[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="glass-card p-10 flex flex-col group"
                            >
                                <div className="mb-8">
                                    <Quote className="w-10 h-10 text-neon-cyan/20 mb-6 group-hover:text-neon-cyan/40 transition-colors" />
                                    <p className="text-gray-300 leading-relaxed text-lg font-light italic">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-neon-gradient rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity" />
                                        <img
                                            src={data.image}
                                            alt={data.name}
                                            className="relative w-14 h-14 rounded-full object-cover border-2 border-dark"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex gap-1 mb-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-neon-cyan text-neon-cyan drop-shadow-[0_0_5px_rgba(0,208,255,0.5)]" />
                                            ))}
                                        </div>
                                        <p className="font-bold text-white text-base tracking-tight">{data.name}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role} — {data.business}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

