import HotelesHero from './HotelesHero';
import HotelesDemo from './HotelesDemo';
import HotelesProblema from './HotelesProblema';
import HotelesROI from './HotelesROI';
import HotelesSolucion from './HotelesSolucion';
import HotelesComparacion from './HotelesComparacion';
import HotelesFundadores from './HotelesFundadores';
import HotelesPrecios from './HotelesPrecios';
import HotelesFAQ from './HotelesFAQ';
import HotelesFooterCTA from './HotelesFooterCTA';
import { useState } from 'react';

const WA_LINK = 'https://wa.me/5491168873648';

export default function Hoteles() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Demo', id: 'hoteles-demo' },
    { label: 'Cómo funciona', id: 'hoteles-solucion' },
    { label: 'Precios', id: 'hoteles-precios' },
    { label: 'FAQ', id: 'hoteles-faq' },
  ];

  return (
    <main className="min-h-screen bg-[#0E1420] text-white scroll-smooth" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── TOP URGENCY BAR ── */}
      <div className="py-3 px-6 text-center text-sm font-black uppercase tracking-widest text-[#0E1420]" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E1420] animate-pulse" />
          Programa Fundadores — Solo 5 cupos disponibles en tu ciudad
        </span>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl" style={{ background: 'rgba(14,20,32,0.92)' }}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg"
              style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)', color: '#0E1420' }}
            >
              B
            </div>
            <a href="https://www.blueautomation.tech" className="font-black text-lg uppercase tracking-tight text-white hover:text-[#00D4FF] transition-colors">
              Blue Automation
            </a>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-xs font-bold border border-[#00D4FF]/40 text-[#00D4FF] ml-1">
              Hoteles
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm font-bold uppercase tracking-wider"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`${WA_LINK}?text=Hola%2C%20quiero%20probar%20el%20agente%20demo`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-white font-bold text-sm hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}
            >
              Probar demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 space-y-3" style={{ background: 'rgba(14,20,32,0.98)' }}>
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-[#94A3B8] hover:text-[#00D4FF] py-2 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`${WA_LINK}?text=Hola%2C%20quiero%20probar%20el%20agente%20demo`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full py-3 rounded-full text-white font-bold"
              style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}
            >
              Probar demo →
            </a>
          </div>
        )}
      </nav>

      {/* ── PAGE SECTIONS ── */}
      <HotelesHero />
      <HotelesDemo />
      <HotelesProblema />
      <HotelesROI />
      <HotelesSolucion />
      <HotelesComparacion />
      <HotelesFundadores />
      <HotelesPrecios />
      <HotelesFAQ />
      <HotelesFooterCTA />

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10 text-center" style={{ background: '#0a0f1a' }}>
        <p className="text-[#94A3B8] text-sm mb-3">
          <a href="https://www.blueautomation.tech" className="hover:text-[#00D4FF] transition-colors">← Volver a blueautomation.tech</a>
        </p>
        <p className="text-[#94A3B8]/50 text-xs">© {new Date().getFullYear()} Blue Automation. Todos los derechos reservados.</p>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={`${WA_LINK}?text=Hola%2C%20quiero%20info%20del%20Programa%20Fundadores`}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300"
        style={{ background: '#25D366' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.88L.057 23.943l6.205-1.632A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.032-1.38l-.36-.214-3.733.979.995-3.632-.234-.373A9.87 9.87 0 012.106 12c0-5.458 4.436-9.894 9.894-9.894 5.458 0 9.894 4.436 9.894 9.894 0 5.458-4.436 9.894-9.894 9.894z"/>
        </svg>
      </a>
    </main>
  );
}
