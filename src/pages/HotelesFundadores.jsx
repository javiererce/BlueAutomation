const benefits = [
  {
    icon: '🎁',
    tag: 'MES 1',
    title: 'Sin abono mensual',
    text: 'Solo pagás el consumo real de IA (~USD 5-20). Probás el sistema completo sin riesgo.',
  },
  {
    icon: '🔒',
    tag: 'MESES 2-4',
    title: 'Precio congelado',
    text: 'Empezás con el plan que elijas a precio de lanzamiento. Contrato mínimo 3 meses.',
  },
  {
    icon: '🚀',
    tag: 'EN 48 HORAS',
    title: 'Tu agente activo',
    text: 'Nos mandás la info de tu hotel y nosotros configuramos todo. Setup completo incluido.',
  },
];

export default function HotelesFundadores() {
  const openWA = () => {
    window.open('https://wa.me/5491168873648?text=Hola%2C%20quiero%20info%20del%20Programa%20Fundadores', '_blank');
  };

  return (
    <section id="hoteles-fundadores" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0E1420 0%,#0a0f1a 100%)' }}>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#6366F1]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest text-white" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)' }}>
            ⏳ Quedan pocos cupos
          </span>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Programa Fundadores 2025</h2>
          <p className="text-[#00D4FF] text-xl font-bold mb-2">Solo 5 cupos en tu ciudad</p>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Buscamos 5 hoteles que quieran ser los primeros en automatizar su atención en Villa General Belgrano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-7 rounded-2xl border border-white/10 hover:border-[#00D4FF]/40 hover:-translate-y-1 transition-all duration-500 text-center"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-4xl mb-3">{b.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.1)' }}>
                {b.tag}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#94A3B8] mb-8">
          Los fundadores mantienen el precio de lanzamiento para siempre, incluso cuando suba.
        </p>

        <div className="text-center">
          <button
            onClick={openWA}
            id="fundadores-cta"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-black text-lg hover:scale-105 hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
          >
            Quiero ser fundador →
          </button>
        </div>
      </div>
    </section>
  );
}
