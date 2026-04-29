import { useState } from 'react';

const faqs = [
  { q: '¿Pierdo el toque humano?', a: 'No. El agente responde de forma natural, como tu mejor recepcionista. Y cuando el huésped pide hablar con una persona, el sistema te lo pasa automáticamente. Vos siempre tenés el control.' },
  { q: '¿Y si responde algo mal?', a: 'El agente se configura exclusivamente con la información de tu hotel: tus precios, tus habitaciones, tus políticas, tus FAQs. No inventa. Si no tiene la respuesta, le dice al huésped que va a consultar y te avisa a vos.' },
  { q: '¿Es difícil de implementar?', a: 'Nosotros hacemos todo. Vos nos pasás la info de tu hotel (precios, habitaciones, servicios, preguntas frecuentes) y en 48 horas tu agente está funcionando. No necesitás instalar nada.' },
  { q: '¿Funciona con mi sistema actual?', a: 'El Plan Básico funciona de forma independiente, no necesitás ningún sistema previo. El Plan Pro se integra con Google Calendar para gestionar disponibilidad. Si usás un PMS, podemos evaluar la integración.' },
  { q: '¿Qué pasa si quiero cancelar?', a: 'Después del compromiso mínimo de 3 meses, podés cancelar con 30 días de aviso previo. Sin penalidades ni letra chica.' },
  { q: '¿Los audios de voz también los entiende?', a: 'Sí. El agente transcribe audios de WhatsApp automáticamente y responde en texto. Funciona en español e inglés.' },
  { q: '¿Atiende solo WhatsApp o también redes sociales?', a: 'Atiende WhatsApp, Instagram y Facebook desde un solo sistema. Mismo agente, misma información, múltiples canales.' },
  { q: '¿Cuánto sale el consumo de IA?', a: 'Depende del volumen de conversaciones. Para un hotel promedio, está entre USD 5 y USD 20 por mes. Se factura aparte según uso real.' },
  { q: '¿El agente puede confirmar reservas solo?', a: 'Depende del plan. En el Plan Pro, podés elegir si el agente confirma automáticamente o genera una pre-reserva para que vos la confirmes. Vos decidís el nivel de autonomía.' },
  { q: '¿Qué información necesitan de mi hotel para arrancar?', a: 'Lo básico: nombre, tipos de habitación con precios por temporada, horarios de check-in/out, servicios que ofrecés, y las 5 preguntas que más te hacen los huéspedes. Lo completás en un formulario simple y nosotros nos encargamos del resto.' },
  { q: '¿Puedo cambiar los precios o la información después?', a: 'Sí, cuando quieras. Nos avisás y actualizamos la configuración. El cambio se refleja en minutos.' },
  { q: '¿Es seguro? ¿Qué pasa con los datos de los huéspedes?', a: 'Los datos se almacenan de forma segura y aislada para cada hotel. No compartimos información entre clientes. Cumplimos con buenas prácticas de protección de datos.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-[#00D4FF] transition-colors"
      >
        <span className="text-white font-semibold text-base">{q}</span>
        <span className="text-2xl font-light shrink-0" style={{ color: '#00D4FF' }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-[#94A3B8] pb-5 leading-relaxed text-sm">{a}</p>
      )}
    </div>
  );
}

export default function HotelesFAQ() {
  return (
    <section id="hoteles-faq" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0a0f1a 0%,#0E1420 100%)' }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Preguntas frecuentes</h2>
        </div>
        <div className="rounded-2xl border border-white/10 px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
