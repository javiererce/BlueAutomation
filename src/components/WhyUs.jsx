import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Orbit } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function WhyUs() {
    const { t } = useLanguage();

    const icons = [Zap, CheckCircle, Shield, Orbit];

    return (
        <section className="py-24 relative bg-dark overflow-hidden" id="why-us">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        {t.whyUs.title}
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        {t.whyUs.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.whyUs.reasons.map((reason, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 group text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-dark border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,208,255,0.3)] transition-all">
                                    <Icon className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-tight">{reason.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{reason.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

