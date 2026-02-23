import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useLanguage();

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
                        {t.faq.title}
                    </motion.h2>
                    <p className="text-gray-400 text-xl font-light">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {t.faq.items.map((item, index) => (
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
                                <span className="text-lg font-medium pr-8">{item.q}</span>
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
                                            {item.a}
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
