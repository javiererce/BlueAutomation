const features = [
  {
    icon: '⚡',
    title: 'Responde en segundos',
    text: 'Atiende por WhatsApp, Instagram y Facebook desde un solo sistema. Texto y audios (el huésped puede mandar audio, el agente responde siempre en texto). En español e inglés automáticamente.',
  },
  {
    icon: '📅',
    title: 'Sabe qué tenés disponible y a qué precio',
    text: 'Consulta disponibilidad real por tipo de habitación. Calcula tarifas según temporada, cantidad de noches y huéspedes. Le da al huésped una cotización concreta, no una respuesta genérica.',
  },
  {
    icon: '✅',
    title: 'Lleva al huésped hasta la reserva',
    text: 'Guía la conversación paso a paso: fechas, tipo de habitación, precio, confirmación. Si el huésped pide algo que el agente no maneja o quiere hablar con una persona, te avisa automáticamente.',
  },
];

const steps = [
  { icon: '📱', label: 'Huésped escribe' },
  { icon: '⚡', label: 'Agente responde en 3 seg' },
  { icon: '📅', label: 'Cotiza y ofrece disponibilidad' },
  { icon: '✓', label: 'Confirma reserva o escala a vos' },
];

export default function HotelesSolucion() {
  return (
    <section id="hoteles-solucion" className="py-24 bg-[#0E1420]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Cómo funciona tu recepcionista digital</h2>
          <p className="text-[#94A3B8] text-lg">Tres cosas simples. Funcionando desde el día 1.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 rounded-2xl border border-white/10 hover:border-[#00D4FF]/40 hover:-translate-y-1 transition-all duration-500"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed text-sm">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="rounded-2xl p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <p className="text-center text-[#94A3B8] text-xs font-bold uppercase tracking-widest mb-8">El flujo completo</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2 md:gap-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-2 border border-white/10" style={{ background: 'rgba(0,212,255,0.08)' }}>
                    {s.icon}
                  </div>
                  <span className="text-white text-xs font-semibold max-w-[90px]">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-[#00D4FF] font-black text-xl mx-2 md:mx-3 hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[#94A3B8] text-sm mt-8">
          Sin apps que instalar. Sin sistemas complejos. Funciona con tu WhatsApp Business actual.{' '}
          <span className="text-white font-semibold">Nosotros configuramos todo.</span>
        </p>
      </div>
    </section>
  );
}
