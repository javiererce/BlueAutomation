import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16" id="hero">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-white/10 mb-8 mt-12">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-gray-300">Agencia Especializada en Agentes IA & Automatización</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Tu Negocio <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">
                            Abierto 24/7 con IA
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Una respuesta tardía es una venta perdida. Automatizamos tus respuestas en WhatsApp, Instagram y Messenger para responder consultas, vender y agendar reservas sin intervención humana constante.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] flex items-center justify-center gap-2 group"
                        >
                            Agendar Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollTo('services')}
                            className="w-full sm:w-auto px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white rounded-xl font-semibold border border-white/10 transition-all"
                        >
                            Ver Servicios
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
