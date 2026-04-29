const tableRows = [
  { feat: 'Atención 24/7 (WhatsApp + IG + FB)', basic: true, pro: true },
  { feat: 'Respuestas inteligentes + audios', basic: true, pro: true },
  { feat: 'Multi-idioma automático', basic: true, pro: true },
  { feat: 'Escalada a humano', basic: true, pro: true },
  { feat: 'Consulta de disponibilidad real', basic: false, pro: true },
  { feat: 'Cálculo de tarifas automático', basic: false, pro: true },
  { feat: 'Gestión de reservas', basic: false, pro: true },
  { feat: 'Integración Google Calendar', basic: false, pro: true },
];

export default function HotelesPrecios() {
  const openWA = () => {
    window.open('https://wa.me/5491168873648?text=Hola%2C%20quiero%20info%20del%20Programa%20Fundadores', '_blank');
  };

  return (
    <section id="hoteles-precios" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Planes simples, sin sorpresas</h2>
          <p className="text-[#94A3B8] text-lg">Solo pagás lo que usás. Sin costos ocultos.</p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Basic */}
          <div className="p-8 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="text-[#94A3B8] text-xs uppercase tracking-widest font-bold mb-4">Plan Básico</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-black text-white">USD 79</span>
              <span className="text-[#94A3B8] mb-2">/mes</span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-8">+ consumo IA (~USD 5-20/mes)</p>
            <ul className="space-y-3 mb-8">
              {['Atención automática 24/7 por WhatsApp, Instagram y Facebook',
                'Respuestas inteligentes a consultas frecuentes',
                'Entiende texto y audios de voz (responde siempre en texto)',
                'Detección automática de idioma (español / inglés)',
                'Escalada a humano cuando el huésped lo pide',
                'Configurado con la info de tu hotel'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#94A3B8] text-sm">
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: '#00D4FF' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={openWA} className="w-full py-3 rounded-full border border-[#00D4FF] text-[#00D4FF] font-bold hover:bg-[#00D4FF]/10 transition-all">
              Empezar con Básico
            </button>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-2xl border-2 relative" style={{ background: 'rgba(0,212,255,0.04)', borderColor: '#00D4FF', boxShadow: '0 0 40px rgba(0,212,255,0.1)' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0E1420]" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}>
              MÁS COMPLETO
            </div>
            <p className="text-[#00D4FF] text-xs uppercase tracking-widest font-bold mb-4">Plan Pro</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-black text-white">USD 99</span>
              <span className="text-[#94A3B8] mb-2">/mes</span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-8">+ consumo IA (~USD 5-20/mes)</p>
            <ul className="space-y-3 mb-8">
              {['Todo lo del Plan Básico +',
                'Consulta de disponibilidad real por tipo de habitación',
                'Cálculo automático de tarifas (temporada, noches, huéspedes)',
                'Gestión de reservas (confirmación o pre-reserva)',
                'Integración con Google Calendar',
                'Flujo conversacional completo: de la consulta a la reserva'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white text-sm">
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: '#00D4FF' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={openWA} className="w-full py-3 rounded-full font-bold text-[#0E1420] hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}>
              Empezar con Pro
            </button>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="grid grid-cols-3 border-b border-white/10 p-4">
            <span className="text-[#94A3B8] text-sm font-bold">Funcionalidad</span>
            <span className="text-center text-white text-sm font-bold">Básico</span>
            <span className="text-center text-sm font-bold" style={{ color: '#00D4FF' }}>Pro</span>
          </div>
          {tableRows.map((row) => (
            <div key={row.feat} className="grid grid-cols-3 border-b border-white/5 p-4 hover:bg-white/2 transition-colors">
              <span className="text-[#94A3B8] text-sm">{row.feat}</span>
              <span className="text-center">{row.basic ? <span style={{ color: '#00D4FF' }}>✓</span> : <span className="text-white/20">—</span>}</span>
              <span className="text-center">{row.pro ? <span style={{ color: '#00D4FF' }}>✓</span> : <span className="text-white/20">—</span>}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#94A3B8] text-sm mt-6">
          Ambos planes incluyen setup e implementación. Consumo de IA se factura aparte según uso real (promedio USD 5-20/mes).
        </p>
      </div>
    </section>
  );
}
