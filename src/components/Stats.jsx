import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 500, suffix: '+', label: 'Consultas / mes' },
    { value: 24, suffix: '/7', label: 'Disponibilidad' },
    { value: 95, suffix: '%', label: 'Precisión IA' },
    { value: 10, suffix: 'x', label: 'Eficiencia Op.' },
];

function AnimatedNumber({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const increment = value / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-bold text-neon-cyan drop-shadow-[0_0_15px_rgba(0,208,255,0.4)]">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-dark/50 border-y border-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-gradient opacity-[0.02]" />
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-500 mt-4 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-neon-cyan transition-colors">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

