import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: 'Plan 1',
            title: 'Agente Reservas / Agenda',
            price: '75',
            description: 'Gestión inteligente de disponibilidad y citas.',
            features: [
                'Atención automática 24/7',
                'Gestión de reservas o turnos',
                'Confirmaciones automáticas',
                'Recordatorios',
                '1 idioma incluido',
                'Hasta volumen estándar'
            ],
            notIncluded: [
                'Integraciones complejas',
                'CRM personalizado',
                'Desarrollo a medida'
            ],
            highlighted: false
        },
        {
            name: 'Plan 2',
            title: 'Agente Pro Operativo',
            price: '120',
            description: 'Automatización total para escalar tu operación.',
            features: [
                'Todo lo anterior',
                'Integraciones con sistemas',
                'Envío de links de pago',
                'Reporte mensual',
                'Lógica personalizada avanzada'
            ],
            highlighted: true
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,208,255,0.1),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Planes de Automatización</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Escoge el nivel de inteligencia que tu negocio necesita. + consumo real de IA.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-8 flex flex-col h-full relative ${plan.highlighted ? 'neon-border scale-105 z-20' : ''
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-cyan text-dark px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,208,255,0.5)]">
                                    RECOMENDADO
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="text-neon-cyan font-bold text-sm mb-2 uppercase tracking-widest">{plan.name}</div>
                                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gradient">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-400">/mes</span>
                                </div>
                                <p className="mt-4 text-gray-500 text-xs italic">+ consumo real de IA</p>
                            </div>

                            <div className="space-y-6 mb-8 flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-neon-cyan shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {plan.notIncluded && (
                                    <ul className="space-y-3 pt-4 border-t border-white/5">
                                        {plan.notIncluded.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                                <span className="w-5 h-px bg-gray-700 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${plan.highlighted
                                    ? 'btn-glow'
                                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                                }`}>
                                Comenzar con {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
