import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 500, suffix: '+', label: 'Consultas Automatizadas/mes' },
    { value: 24, suffix: '/7', label: 'Atención Ininterrumpida' },
    { value: 85, suffix: '%', label: 'Reducción en Tiempo de Respuesta' },
    { value: 3, suffix: 'x', label: 'Más Reservas Directas' },
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
        <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-dark-900 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
