import { motion } from 'framer-motion';
import { MessageSquare, PhoneCall, FileText, Database, Radio, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const icons = [MessageSquare, PhoneCall, FileText, Database];

    return (
        <section className="py-24 relative overflow-hidden bg-dark" id="services">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Radio className="w-3 h-3 animate-pulse" />
                        {t.services.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        {t.services.title}
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.services.items.map((service, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-10 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors" />

                                <div className="w-16 h-16 rounded-2xl bg-dark border border-white/5 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,208,255,0.2)] transition-all duration-500">
                                    <Icon className="w-8 h-8 text-neon-cyan" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg font-light">
                                    {service.desc}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-neon-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 cursor-pointer">
                                    {t.services.explore} <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}


