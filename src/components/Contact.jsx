import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building2, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';

const CONTACT_EMAIL = 'javiererce@gmail.com';
const WHATSAPP_NUMBER = '541168873648';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        hotelName: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        const subject = encodeURIComponent(`Solicitud de Demo - ${formData.hotelName || formData.name}`);
        const body = encodeURIComponent(
            `Hola Javier,\n\nMe gustaría agendar una demo.\n\n` +
            `Nombre: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Teléfono: ${formData.phone}\n` +
            `Empresa/Hotel: ${formData.hotelName}\n\n` +
            `Mensaje: ${formData.message}`
        );

        // Abrir cliente de correo
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        setStatus('success');
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', hotelName: '', message: '' });
        }, 3000);
    };

    const inputClass = "w-full pl-12 pr-4 py-4 bg-dark-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all";

    return (
        <section className="py-24 relative bg-dark-900/50" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    >
                        Agendá tu Demo
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        Dejanos tus datos para coordinar una sesión estratégica y automatizar tu negocio.
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
                            <h3 className="text-2xl font-bold mb-2">¡Solicitud Iniciada!</h3>
                            <p className="text-gray-400">Se ha abierto tu cliente de correo para enviar la solicitud a {CONTACT_EMAIL}.</p>
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
                                    <input type="text" name="hotelName" placeholder="Nombre de tu negocio" value={formData.hotelName} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>

                            <textarea
                                name="message"
                                placeholder="¿Qué te gustaría automatizar en tu operación?"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-4 bg-dark-900 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all resize-none font-light"
                            />

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 btn-glow flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Procesando...</>
                                ) : (
                                    <><Send className="w-5 h-5" /> Enviar y Agendar por Email</>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
