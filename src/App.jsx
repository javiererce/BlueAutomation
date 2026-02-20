import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
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
    <main className="min-h-screen bg-dark-900 text-white selection:bg-primary/30 scroll-smooth">
      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(0,163,255,0.4)]">B</div>
            <span className="font-bold text-xl tracking-wide">Blue Automations</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Servicios</button>
            <button onClick={() => scrollTo('why-us')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Nosotros</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Proceso</button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Testimonios</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contacto</button>
            <button
              onClick={openWhatsApp}
              className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-white/5 px-6 py-6 space-y-4">
            <button onClick={() => scrollTo('services')} className="block w-full text-left text-gray-300 hover:text-white py-2">Servicios</button>
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left text-gray-300 hover:text-white py-2">Nosotros</button>
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-gray-300 hover:text-white py-2">Proceso</button>
            <button onClick={() => scrollTo('testimonials')} className="block w-full text-left text-gray-300 hover:text-white py-2">Testimonios</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-gray-300 hover:text-white py-2">Contacto</button>
            <button
              onClick={openWhatsApp}
              className="w-full px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
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
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Contact />

      {/* ═════════════════ BOTÓN FLOTANTE WHATSAPP ═════════════════ */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] transition-all hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* ══════════════════════ CTA FINAL ══════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-dark-800/50 to-dark-900">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu hotel?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Agenda una demo gratuita y descubre cómo la IA puede optimizar cada aspecto de tu operación hotelera.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]"
            >
              Quiero mi Demo Gratis
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="border-t border-white/10 bg-dark-900 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-lg">B</div>
                <span className="font-bold text-lg">Blue Automations</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Agencia especializada en Agentes de IA y sistemas de automatización. Aseguramos que tu negocio esté abierto 24/7 sin intervención humana constante. Let AI handle the routine.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Navegación</h4>
              <div className="space-y-2">
                <button onClick={() => scrollTo('services')} className="block text-gray-500 hover:text-primary text-sm transition-colors">Servicios</button>
                <button onClick={() => scrollTo('why-us')} className="block text-gray-500 hover:text-primary text-sm transition-colors">¿Por qué nosotros?</button>
                <button onClick={() => scrollTo('how-it-works')} className="block text-gray-500 hover:text-primary text-sm transition-colors">Cómo funciona</button>
                <button onClick={() => scrollTo('testimonials')} className="block text-gray-500 hover:text-primary text-sm transition-colors">Testimonios</button>
                <button onClick={() => scrollTo('contact')} className="block text-gray-500 hover:text-primary text-sm transition-colors">Contacto</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <button onClick={openWhatsApp} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
                <p>📧 info@blueautomation.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Blue Automations. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ e Inteligencia Artificial</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
