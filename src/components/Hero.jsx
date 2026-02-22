import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16" id="hero">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-dark">
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-neon-cyan/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#9d00ff]/10 blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card mb-8">
                        <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
                        <span className="text-xs uppercase tracking-widest font-bold text-neon-cyan">Deep Space Automation 2026</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        TU NEGOCIO EN <br className="hidden md:block" />
                        <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,208,255,0.3)]">
                            PILOTO AUTOMÁTICO
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        Libera el potencial de tu empresa con ecosistemas de IA que no duermen. <span className="text-white font-medium">Automatización 100% autónoma</span> para un mundo que nunca se detiene.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="w-full sm:w-auto btn-glow group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                INICIAR TRANSFORMACIÓN
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button
                            onClick={() => scrollTo('services')}
                            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold border border-white/10 transition-all backdrop-blur-sm"
                        >
                            SISTEMAS DISPONIBLES
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-neon-cyan to-transparent" />
            </div>
        </section>
    );
}

