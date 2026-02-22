import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP_NUMBER = '541168873648';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Blue%20Automations%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20IA.`, '_blank');
  };

  return (
    <main className="min-h-screen bg-dark text-white selection:bg-neon-cyan/30 scroll-smooth">
      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 rounded-xl bg-neon-gradient text-dark flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(0,208,255,0.4)]">B</div>
            <span className="font-bold text-xl tracking-tight text-white uppercase italic">Blue Automations</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-medium">Servicios</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-medium">Precios</button>
            <button onClick={() => scrollTo('why-us')} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-medium">Nosotros</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-medium">Proceso</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-medium">Contacto</button>
            <button
              onClick={openWhatsApp}
              className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-neon-cyan" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X className="w-6 h-6 text-neon-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
            <button onClick={() => scrollTo('services')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2">Servicios</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2">Precios</button>
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2">Nosotros</button>
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2">Proceso</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2">Contacto</button>
            <button
              onClick={openWhatsApp}
              className="w-full px-5 py-3 bg-neon-cyan text-dark rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* ════════════════════════ SECCIONES ════════════════════════ */}
      <Hero />
      <Stats />
      <Services />
      <Pricing />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Contact />

      {/* ═════════════════ BOTÓN FLOTANTE WHATSAPP ═════════════════ */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,208,255,0.5)] hover:shadow-[0_0_35px_rgba(0,208,255,0.7)] transition-all hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-dark group-hover:rotate-12 transition-transform" />
      </button>

      {/* ══════════════════════ CTA FINAL ══════════════════════ */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            ¿Listo para automatizar tu éxito?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Maximiza tus márgenes y reduce tu carga operativa con infraestructura de IA centralizada y escalable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto btn-glow"
            >
              Consultar Implementación
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-neon-cyan" />
              WhatsApp Directo
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="border-t border-white/5 bg-dark/80 py-16 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-gradient text-dark flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(0,208,255,0.3)]">B</div>
                <span className="font-bold text-xl uppercase italic">Blue Automations</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm italic">
                "Especializados en el desarrollo e implementación de agentes de IA para la automatización de atención al cliente y procesos operativos."
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navegación</h4>
              <div className="space-y-4">
                <button onClick={() => scrollTo('services')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">Servicios</button>
                <button onClick={() => scrollTo('pricing')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">Precios</button>
                <button onClick={() => scrollTo('why-us')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">¿Por qué nosotros?</button>
                <button onClick={() => scrollTo('how-it-works')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">Cómo funciona</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <div className="space-y-4">
                <button onClick={openWhatsApp} className="flex items-center gap-2 text-gray-500 hover:text-neon-cyan transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Direct
                </button>
                <p className="text-gray-500 text-sm">info@blueautomation.com</p>
                <p className="text-gray-500 text-sm">Montevideo, Uruguay</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-[10px] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Blue Automations SYSTEM // ALL RIGHTS RESERVED</p>
            <p>DESIGNED FOR THE DEEP SPACE PERSPECTIVE</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
