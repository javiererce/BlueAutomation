import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import UseCases from './components/UseCases'
import FAQ from './components/FAQ'
import TechMarquee from './components/TechMarquee'
import { MessageCircle, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from './LanguageContext'

const WHATSAPP_NUMBER = '541168873648';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    const messages = {
      es: "Hola Blue Automations, me interesa conocer más sobre sus servicios de IA.",
      en: "Hello Blue Automations, I'm interested in learning more about your AI services.",
      pt: "Olá Blue Automations, estou interessado em saber mais sobre seus serviços de IA."
    };
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[language])}`, '_blank');
  };

  const languages = [
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'pt', name: 'PT', flag: '🇧🇷' }
  ];

  return (
    <main className="min-h-screen bg-dark text-white selection:bg-neon-cyan/30 scroll-smooth">
      {/* ═══════════════════════════ TOP BAR URGENCIA ═══════════════════════════ */}
      <div className="bg-neon-gradient py-4 px-6 relative z-[60] overflow-hidden">
        <div className="container mx-auto text-center flex items-center justify-center gap-4">
          <span className="text-dark font-black text-sm md:text-lg uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-3 h-3 bg-dark rounded-full animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
            {t.topBar.urgency}
          </span>
          <button
            onClick={() => scrollTo('pricing')}
            className="hidden lg:block bg-dark text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest hover:scale-105 transition-transform"
          >
            {t.topBar.action}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <nav className="fixed top-20 md:top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 border border-white/10 bg-dark/80 backdrop-blur-xl rounded-2xl shadow-2xl">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-12 h-12 rounded-xl bg-neon-gradient text-dark flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(0,208,255,0.4)]">B</div>
            <span className="font-bold text-2xl tracking-tight text-white uppercase italic">Blue Automations</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('why-us')} className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-medium uppercase tracking-wider">{t.nav.benefits}</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-medium uppercase tracking-wider">{t.nav.process}</button>
            <button onClick={() => scrollTo('use-cases')} className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-medium uppercase tracking-wider">{t.nav.cases}</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-medium uppercase tracking-wider">{t.nav.plans}</button>
            <button onClick={() => scrollTo('faq')} className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-medium uppercase tracking-wider">{t.nav.faq}</button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-tighter"
              >
                <Globe className="w-3 h-3 text-neon-cyan" />
                {languages.find(l => l.code === language)?.name}
                <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 py-2 bg-dark border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-neon-cyan/10 transition-colors flex items-center gap-2 ${language === lang.code ? 'text-neon-cyan' : 'text-gray-400'}`}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={openWhatsApp}
              className="ml-2 px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 text-xs"
            >
              <MessageCircle className="w-4 h-4 text-neon-cyan" />
              {t.nav.whatsapp}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => {
                const codes = languages.map(l => l.code);
                const next = codes[(codes.indexOf(language) + 1) % codes.length];
                setLanguage(next);
              }}
              className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold flex items-center gap-2"
            >
              <Globe className="w-3 h-3 text-neon-cyan" />
              {languages.find(l => l.code === language)?.name}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X className="w-6 h-6 text-neon-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2 uppercase text-xs tracking-widest font-bold">{t.nav.benefits}</button>
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2 uppercase text-xs tracking-widest font-bold">{t.nav.process}</button>
            <button onClick={() => scrollTo('use-cases')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2 uppercase text-xs tracking-widest font-bold">{t.nav.cases}</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2 uppercase text-xs tracking-widest font-bold">{t.nav.plans}</button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left text-gray-300 hover:text-neon-cyan py-2 uppercase text-xs tracking-widest font-bold">{t.nav.faq}</button>
            <button
              onClick={openWhatsApp}
              className="w-full px-5 py-3 bg-neon-cyan text-dark rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.whatsapp}
            </button>
          </div>
        )}
      </nav>

      {/* ════════════════════════ SECCIONES ════════════════════════ */}
      <Hero />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <UseCases />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />

      {/* ═════════════════ BOTÓN FLOTANTE WHATSAPP ═════════════════ */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,208,255,0.5)] hover:shadow-[0_0_35px_rgba(0,208,255,0.7)] transition-all hover:scale-110 group"
        aria-label={t.nav.whatsapp}
      >
        <MessageCircle className="w-8 h-8 text-dark group-hover:rotate-12 transition-transform" />
      </button>

      {/* ══════════════════════ CTA FINAL ══════════════════════ */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t.finalCTA.title}
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            {t.finalCTA.subtitle}
          </p>
          <div className="flex justify-center">
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto btn-glow"
            >
              {t.finalCTA.button}
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TECH MARQUEE ══════════════════════ */}
      <TechMarquee />

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
                {t.contact.footer.description || t.nav.talk}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t.contact.footer.nav}</h4>
              <div className="space-y-4">
                <button onClick={() => scrollTo('why-us')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">{t.nav.benefits}</button>
                <button onClick={() => scrollTo('how-it-works')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">{t.nav.process}</button>
                <button onClick={() => scrollTo('use-cases')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">{t.nav.cases}</button>
                <button onClick={() => scrollTo('pricing')} className="block text-gray-500 hover:text-neon-cyan text-sm transition-colors">{t.nav.plans}</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t.contact.footer.contact}</h4>
              <div className="space-y-4">
                <button onClick={openWhatsApp} className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> {t.nav.talk}
                </button>
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm font-medium">{t.contact.footer.location}</p>
                  <p className="text-gray-500 text-[11px] leading-tight">{t.contact.footer.presence}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-[10px] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {t.contact.footer.rights}</p>
            <p>{t.contact.footer.designed}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
