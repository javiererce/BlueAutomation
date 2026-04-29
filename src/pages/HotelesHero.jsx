
export default function HotelesHero() {
  const openDemo = () => {
    window.open('https://wa.me/5491168873648?text=Hola%2C%20quiero%20probar%20el%20agente%20demo', '_blank');
  };

  return (
    <section id="hoteles-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
      {/* BG glows */}
      <div className="absolute inset-0 bg-[#0E1420]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              Recepcionista Digital 24/7 para Hoteles
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              Dejá de perder reservas por no responder{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                WhatsApp a tiempo
              </span>
            </h1>

            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed mb-10">
              Tu recepcionista digital atiende consultas, calcula tarifas y confirma reservas — automáticamente, las 24 horas, los 7 días.
            </p>

            <button
              onClick={openDemo}
              id="hero-cta-whatsapp"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-black text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] hover:scale-105 transition-all duration-300 mb-10"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #6366F1)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.88L.057 23.943l6.205-1.632A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.032-1.38l-.36-.214-3.733.979.995-3.632-.234-.373A9.87 9.87 0 012.106 12c0-5.458 4.436-9.894 9.894-9.894 5.458 0 9.894 4.436 9.894 9.894 0 5.458-4.436 9.894-9.894 9.894z"/></svg>
              Probalo ahora por WhatsApp →
            </button>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { val: '100%', label: 'consultas respondidas' },
                { val: '3 seg', label: 'tiempo de respuesta' },
                { val: '24/7', label: 'sin días libres' },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-3">
                  <span className="text-2xl font-black" style={{ color: '#00D4FF' }}>{s.val}</span>
                  <span className="text-[#94A3B8] text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: WhatsApp mock */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-4 border-white/10 bg-[#111827] shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* WA header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-lg font-bold text-[#00D4FF]">B</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Hotel Blue</p>
                    <p className="text-green-300 text-xs">en línea</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                </div>

                {/* Messages */}
                <div className="bg-[#0B141A] px-3 py-4 space-y-3 min-h-[320px]">
                  {/* Guest */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white text-sm px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]">
                      ¿Tienen habitación doble para el 20 de junio, 2 personas?
                      <div className="text-white/40 text-[10px] mt-1 text-right">11:47 PM</div>
                    </div>
                  </div>
                  {/* Agent */}
                  <div className="flex justify-end">
                    <div className="bg-[#005C4B] text-white text-sm px-3 py-2 rounded-2xl rounded-tr-none max-w-[85%]">
                      ¡Disponible! $85/noche con desayuno. 3 noches = $255. ¿La reservo?
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-white/40 text-[10px]">11:47 PM</span>
                        <svg width="14" height="10" viewBox="0 0 18 12" fill="#53BDEB"><path d="M1 5.5L5.5 10 17 1M6 10l4.5-4.5"/></svg>
                      </div>
                    </div>
                  </div>
                  {/* Guest */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white text-sm px-3 py-2 rounded-2xl rounded-tl-none max-w-[75%]">
                      Sí, perfecto!
                      <div className="text-white/40 text-[10px] mt-1 text-right">11:48 PM</div>
                    </div>
                  </div>
                  {/* Agent */}
                  <div className="flex justify-end">
                    <div className="bg-[#005C4B] text-white text-sm px-3 py-2 rounded-2xl rounded-tr-none max-w-[85%]">
                      Reserva confirmada ✓ Le envío los datos de pago ahora.
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-white/40 text-[10px]">11:48 PM</span>
                        <svg width="14" height="10" viewBox="0 0 18 12" fill="#53BDEB"><path d="M1 5.5L5.5 10 17 1M6 10l4.5-4.5"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timestamp badge */}
                <div className="bg-[#0B141A] px-3 pb-3">
                  <div className="text-center text-[10px] text-[#00D4FF] font-semibold bg-[#00D4FF]/10 rounded-full px-3 py-1">
                    ⚡ Respuesta automática en 3 segundos — 11:47pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
