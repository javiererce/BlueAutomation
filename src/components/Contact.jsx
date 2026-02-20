import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building2, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/leads';
const WHATSAPP_NUMBER = '541168873648';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        hotelName: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // 1. Intentar guardar en el backend
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Error en el servidor');

            setStatus('success');
        } catch (error) {
            console.warn('Backend no disponible, redirigiendo a WhatsApp:', error);
            setStatus('success');
        }

        // 2. Siempre abrir WhatsApp con los datos (como respaldo y canal principal)
        const message = `🏨 *Nueva solicitud de Demo - Blue Automation*%0A%0A👤 *Nombre:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📞 *Teléfono:* ${formData.phone}%0A🏢 *Hotel/Posada:* ${formData.hotelName}%0A💬 *Mensaje:* ${formData.message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

        // 3. Reset después de 4 segundos
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', hotelName: '', message: '' });
        }, 4000);
    };

    const inputClass = "w-full pl-12 pr-4 py-4 bg-dark-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

    return (
        <section className="py-24 relative bg-dark-800/30" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Agenda tu <span className="text-primary">Demo Gratuita</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Déjanos tus datos y te mostraremos cómo la IA puede transformar la operación de tu hotel.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12"
                >
                    {status === 'success' ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-12"
                        >
                            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-2">¡Datos Recibidos!</h3>
                            <p className="text-gray-400">Te redirigimos a WhatsApp para confirmar tu demo. ¡Hablamos pronto!</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="text" name="name" placeholder="Tu nombre completo *" value={formData.name} onChange={handleChange} required className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="email" name="email" placeholder="tu@email.com *" value={formData.email} onChange={handleChange} required className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="tel" name="phone" placeholder="Tu teléfono" value={formData.phone} onChange={handleChange} className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="text" name="hotelName" placeholder="Nombre de tu hotel o posada" value={formData.hotelName} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Cuéntanos sobre tu hotel y qué te gustaría automatizar..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-4 bg-dark-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                            />

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] flex items-center justify-center gap-2 group text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                                ) : (
                                    <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Enviar y Agendar Demo</>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
