const generic = [
  'Respuestas predefinidas tipo "menú de opciones"',
  'No entiende contexto ni conversaciones largas',
  'Se traba si el huésped pregunta algo fuera del guión',
  'No sabe tus precios ni tu disponibilidad',
  'Frustra al cliente y lo hace irse',
];

const blue = [
  'Inteligencia artificial avanzada (misma tecnología que ChatGPT)',
  'Entiende conversaciones naturales, incluso audios de voz',
  'Configurado con TUS precios, TUS habitaciones, TUS políticas',
  'Calcula tarifas y consulta disponibilidad en tiempo real',
  'Detecta el idioma automáticamente (español / inglés)',
  'Cuando el huésped pide hablar con alguien, te lo pasa a vos',
];

export default function HotelesComparacion() {
  return (
    <section id="hoteles-comparacion" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Esto no es un chatbot con respuestas automáticas</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Es un sistema de inteligencia artificial entrenado con la información de tu hotel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-14">
          {/* Generic */}
          <div className="p-7 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3 className="text-[#94A3B8] font-bold text-xl mb-6">Chatbot genérico</h3>
            <ul className="space-y-3">
              {generic.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#94A3B8] text-sm">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Blue Automation */}
          <div className="p-7 rounded-2xl border-2" style={{ background: 'rgba(0,212,255,0.04)', borderColor: '#00D4FF' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm" style={{ background: 'linear-gradient(135deg,#00D4FF,#6366F1)', color: '#0E1420' }}>B</div>
              <h3 className="text-white font-bold text-xl">Blue Automation</h3>
            </div>
            <ul className="space-y-3">
              {blue.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white text-sm">
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: '#00D4FF' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-[#94A3B8] text-base max-w-3xl mx-auto">
          La diferencia es simple: un chatbot repite frases.{' '}
          <span className="text-white font-semibold">Este sistema entiende lo que le preguntan y responde con la información real de tu hotel.</span>
        </p>
      </div>
    </section>
  );
}
