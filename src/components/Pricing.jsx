import React from 'react';
import { Check, Sparkles, Rocket, Globe, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Pricing = () => {
    const { language, t } = useLanguage();
    const WHATSAPP_NUMBER = '541168873648';

    const openWhatsApp = (planTitle) => {
        let message = '';
        if (language === 'es') {
            switch (planTitle) {
                case t.pricing.plans.plan1.title: message = "¡Hola! 👋 Quiero contratar el Plan 1 (Agente Reservas) de Blue Automations."; break;
                case t.pricing.plans.plan2.title: message = "¡Hola! 🚀 Quiero contratar el Plan Agente Pro para escalar mi negocio."; break;
                case t.pricing.plans.optionA.title: message = "¡Hola! 🌐 Quiero contratar la Landing Web Optimizada (Opción A)."; break;
                case t.pricing.plans.optionB.title: message = "¡Hola! 🔥 Quiero aprovechar el Combo Lanzamiento (Web + Agente)."; break;
                default: message = `¡Hola! Quiero contratar el servicio de ${planTitle}.`;
            }
        } else if (language === 'en') {
            message = `Hello! I'm interested in the ${planTitle} plan.`;
        } else {
            message = `Olá! Estou interessado no plano ${planTitle}.`;
        }
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const icons = [Sparkles, Rocket, Globe, Zap];
    const planKeys = ['plan1', 'plan2', 'optionA', 'optionB'];

    const plansData = planKeys.map((key, index) => {
        const plan = t.pricing.plans[key];
        const isOperational = key.startsWith('plan');
        return {
            ...plan,
            key,
            icon: icons[index],
            highlighted: key === 'plan2' || key === 'optionB',
            badge: key === 'plan2' ? t.pricing.recommended : (key === 'optionB' ? t.pricing.launchCombo : null),
            priceLabel: key === 'plan1' ? '75' : (key === 'plan2' ? '149' : (key === 'optionA' ? '65' : '119')),
            currency: key.startsWith('option') ? 'USD' : 'USD',
            footerText: isOperational ? t.pricing.realConsumption : t.pricing.oneTime,
            period: isOperational ? t.pricing.perMonth : '',
            actionText: plan.action || (isOperational ? t.pricing.consult : 'Solicitar')
        };
    });

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-dark">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,208,255,0.1),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{t.pricing.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {plansData.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-10 flex flex-col h-full relative group ${plan.highlighted ? 'border-neon-cyan/30 shadow-[0_0_40px_rgba(0,208,255,0.1)] scale-[1.02]' : ''}`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-cyan text-dark px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-neon-cyan font-bold text-xs mb-2 uppercase tracking-widest">{plan.name}</div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{plan.title}</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                                        <plan.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.priceLabel === t.pricing.specialPrice ? plan.priceLabel : `${plan.currency} $${plan.priceLabel}`}
                                    </span>
                                    {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
                                </div>
                                <p className="mt-4 text-gray-500 text-[10px] italic font-bold uppercase tracking-widest">
                                    {plan.footerText}
                                </p>
                            </div>

                            <p className="text-gray-400 text-sm mb-8 font-light italic border-l-2 border-white/5 pl-4 leading-relaxed">
                                {plan.desc}
                            </p>

                            <div className="space-y-6 mb-10 flex-grow">
                                <ul className="space-y-4">
                                    {plan.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {plan.notIncluded && (
                                    <ul className="space-y-4 pt-6 border-t border-white/5">
                                        {plan.notIncluded.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="w-4 h-px bg-gray-800 shrink-0" />
                                                <span className="line-through">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <button
                                onClick={() => openWhatsApp(plan.title)}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${plan.highlighted
                                    ? 'btn-glow'
                                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                                    }`}>
                                {plan.actionText} <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
