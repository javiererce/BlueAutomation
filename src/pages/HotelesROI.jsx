export default function HotelesROI() {
  return (
    <section id="hoteles-roi" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0a0f1a 0%,#0E1420 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">¿Cuánto te cuesta no responder a tiempo?</h2>
          <p className="text-[#94A3B8] text-lg">Hacé las cuentas con tus propios números</p>
        </div>

        {/* Calculator visual */}
        <div className="rounded-3xl border border-white/10 p-8 md:p-12 mb-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="space-y-6 mb-10">
            {[
              { label: 'Consultas que no llegás a responder por día', val: '3' },
              { label: 'De esas, ¿cuántas se convertían en reserva?', val: '1' },
              { label: 'Valor promedio de una noche', val: '$80 USD' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/5 pb-5">
                <span className="text-[#94A3B8] text-base">{row.label}</span>
                <span className="text-white font-black text-2xl whitespace-nowrap">{row.val}</span>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="text-center py-6">
            <p className="text-[#94A3B8] text-sm uppercase tracking-widest mb-2">Reservas perdidas por mes</p>
            <p className="font-black" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#00D4FF', lineHeight: 1 }}>
              $2.400 <span className="text-3xl">USD</span>
            </p>
          </div>
        </div>

        {/* Highlight box */}
        <div className="rounded-2xl p-6 md:p-8 text-center mb-6 border border-[#00D4FF]/30" style={{ background: 'rgba(0,212,255,0.05)' }}>
          <p className="text-white text-xl md:text-2xl font-black mb-2">
            El sistema cuesta{' '}
            <span style={{ color: '#00D4FF' }}>USD 79/mes</span>.
          </p>
          <p className="text-[#94A3B8] text-lg">
            Con recuperar <span className="text-white font-bold">1 sola reserva al mes</span>, ya se paga solo.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <p className="text-[#94A3B8] text-sm">Costo mensual</p>
              <p className="text-3xl font-black text-white">USD 79</p>
            </div>
            <div className="text-4xl font-black text-[#6366F1]">vs</div>
            <div className="text-center">
              <p className="text-[#94A3B8] text-sm">Pérdida mensual</p>
              <p className="text-3xl font-black" style={{ color: '#00D4FF' }}>$2.400</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[#94A3B8] text-sm">
          Y eso sin contar las reservas que perdés por Instagram y Facebook — canales que probablemente ni estás atendiendo de noche.
        </p>
      </div>
    </section>
  );
}
