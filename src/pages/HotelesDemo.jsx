export default function HotelesDemo() {
  const openDemo = () => {
    window.open('https://wa.me/5491168873648?text=Hola%2C%20quiero%20probar%20el%20agente%20demo', '_blank');
  };

  return (
    <section id="hoteles-demo" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0E1420 0%, #0a0f1a 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Probalo ahora mismo</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Escribile al agente demo como si fueras un huésped. Preguntale por disponibilidad, precios, servicios — lo que quieras. Te responde en segundos.
          </p>
        </div>

        {/* Phone mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto mb-14">
          {/* WhatsApp phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest">WhatsApp</span>
            <div className="w-full max-w-[240px] rounded-[2rem] border-2 border-white/10 bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-sm font-bold text-[#25D366]">H</div>
                <div>
                  <p className="text-white text-xs font-semibold">Hotel Demo</p>
                  <p className="text-[#25D366] text-[10px]">en línea</p>
                </div>
              </div>
              <div className="bg-[#0B141A] p-3 space-y-2">
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white text-xs px-2 py-1.5 rounded-xl rounded-tl-none max-w-[90%]">¿Cuánto sale una noche para 2?</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#005C4B] text-white text-xs px-2 py-1.5 rounded-xl rounded-tr-none max-w-[90%]">¡Hola! Habitación doble con desayuno: $85/noche. ¿Para qué fechas? 🗓️</div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white text-xs px-2 py-1.5 rounded-xl rounded-tl-none max-w-[90%]">Del 15 al 18 de julio</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#005C4B] text-white text-xs px-2 py-1.5 rounded-xl rounded-tr-none max-w-[90%]">¡Disponible! 3 noches = $255 total. ¿Lo reservo?</div>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(90deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Instagram DM</span>
            <div className="w-full max-w-[240px] rounded-[2rem] border-2 border-white/10 bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="px-3 py-2 flex items-center gap-2" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)' }}>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">H</div>
                <div>
                  <p className="text-white text-xs font-semibold">hotelblue</p>
                  <p className="text-white/70 text-[10px]">Activo/a ahora</p>
                </div>
              </div>
              <div className="bg-[#000] p-3 space-y-2">
                <div className="flex justify-start">
                  <div className="border border-white/20 text-white text-xs px-2 py-1.5 rounded-xl rounded-tl-none max-w-[90%]">¿Aceptan mascotas?</div>
                </div>
                <div className="flex justify-end">
                  <div className="text-white text-xs px-2 py-1.5 rounded-xl rounded-tr-none max-w-[90%]" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d)' }}>¡Sí! Aceptamos mascotas pequeñas sin cargo adicional 🐾</div>
                </div>
                <div className="flex justify-start">
                  <div className="border border-white/20 text-white text-xs px-2 py-1.5 rounded-xl rounded-tl-none max-w-[90%]">¿Y tienen pileta?</div>
                </div>
                <div className="flex justify-end">
                  <div className="text-white text-xs px-2 py-1.5 rounded-xl rounded-tr-none max-w-[90%]" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d)' }}>Sí, pileta climatizada abierta todo el año 🏊</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openDemo}
            id="demo-cta-whatsapp"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-black text-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #6366F1)',
              boxShadow: '0 0 40px rgba(0,212,255,0.5)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.88L.057 23.943l6.205-1.632A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.032-1.38l-.36-.214-3.733.979.995-3.632-.234-.373A9.87 9.87 0 012.106 12c0-5.458 4.436-9.894 9.894-9.894 5.458 0 9.894 4.436 9.894 9.894 0 5.458-4.436 9.894-9.894 9.894z"/></svg>
            Hablar con el agente demo →
          </button>
          <p className="text-[#94A3B8] text-sm mt-4">Es gratis. Sin compromiso. Sin formularios.</p>
          <p className="text-[#00D4FF] text-sm font-semibold mt-1">+54 9 11 6887-3648</p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(0,212,255,0.4); }
          50% { box-shadow: 0 0 60px rgba(99,102,241,0.7); }
        }
      `}</style>
    </section>
  );
}
