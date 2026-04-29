const problems = [
  {
    icon: '🌙',
    title: 'Las 11 de la noche',
    text: 'Un turista busca alojamiento para mañana. Te escribe por WhatsApp. Nadie contesta. Reserva en otro hotel.',
  },
  {
    icon: '📩',
    title: 'Fin de semana largo',
    text: 'Te llegan 20 consultas entre WhatsApp e Instagram. Tu recepcionista no da abasto. Varias quedan sin responder.',
  },
  {
    icon: '🎙️',
    title: 'El audio que llegó tarde',
    text: 'Un huésped te manda un audio preguntando precios. Lo escuchás 3 horas después. Ya reservó en otro lado.',
  },
  {
    icon: '🔁',
    title: 'Siempre las mismas preguntas',
    text: '¿Tienen pileta? ¿Aceptan mascotas? ¿A qué hora es el check-in? — todos los días, las mismas respuestas.',
  },
];

export default function HotelesProblema() {
  return (
    <section id="hoteles-problema" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">¿Te suena esto?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#00D4FF]/40 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            No es culpa tuya. Es imposible responder todo, todo el tiempo.{' '}
            <span className="text-white font-semibold">Pero cada mensaje sin respuesta es plata que se pierde.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
