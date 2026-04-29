export default function HotelesFooterCTA() {
  const openWA = () => {
    window.open('https://wa.me/5491168873648?text=Hola%2C%20quiero%20agendar%20una%20demo', '_blank');
  };

  return (
    <section id="hoteles-final-cta" className="py-28 relative overflow-hidden text-center bg-[#0E1420]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }} />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Estás a un mensaje de dejar de{' '}
          <span style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            perder reservas
          </span>
        </h2>

        <p className="text-[#94A3B8] text-lg md:text-xl mb-10">
          15 minutos. Sin costo. Sin compromiso. Te mostramos cómo funciona con la info de tu hotel.
        </p>

        <button
          onClick={openWA}
          id="final-cta-whatsapp"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-black text-xl hover:scale-105 transition-all duration-300 mb-10"
          style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)', boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.88L.057 23.943l6.205-1.632A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.032-1.38l-.36-.214-3.733.979.995-3.632-.234-.373A9.87 9.87 0 012.106 12c0-5.458 4.436-9.894 9.894-9.894 5.458 0 9.894 4.436 9.894 9.894 0 5.458-4.436 9.894-9.894 9.894z"/></svg>
          Hablar por WhatsApp ahora →
        </button>

        <div className="flex flex-wrap justify-center gap-6 text-[#94A3B8] text-sm">
          <span>📱 +54 9 11 6887-3648</span>
          <span>🌐 blueautomation.tech</span>
          <span>✉️ hola@blue-automation.com</span>
        </div>
      </div>
    </section>
  );
}
