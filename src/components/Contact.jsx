import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building2, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WHATSAPP_NUMBER = '541168873648';

export default function Contact() {
    const { language, t } = useLanguage();
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

        const messageTemplates = {
            es: `🚀 *Nueva solicitud de Demo - Blue Automations*%0A%0A👤 *Nombre:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📞 *Teléfono:* ${formData.phone}%0A🏢 *Empresa:* ${formData.hotelName}%0A💬 *Mensaje:* ${formData.message}`,
            en: `🚀 *New Demo Request - Blue Automations*%0A%0A👤 *Name:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📞 *Phone:* ${formData.phone}%0A🏢 *Company:* ${formData.hotelName}%0A💬 *Message:* ${formData.message}`,
            pt: `🚀 *Novo Pedido de Demo - Blue Automations*%0A%0A👤 *Nome:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📞 *Telefone:* ${formData.phone}%0A🏢 *Empresa:* ${formData.hotelName}%0A💬 *Mensagem:* ${formData.message}`
        };

        const message = messageTemplates[language] || messageTemplates.es;

        // Abrir WhatsApp con los datos
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

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
                        {t.contact.title}
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                        {t.contact.subtitle}
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
                            <h3 className="text-2xl font-bold mb-2">{t.contact.success.title}</h3>
                            <p className="text-gray-400">{t.contact.success.message}</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="text" name="name" placeholder={t.contact.form.namePlaceholder} value={formData.name} onChange={handleChange} required className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="email" name="email" placeholder="email@example.com *" value={formData.email} onChange={handleChange} required className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="tel" name="phone" placeholder={t.contact.phone} value={formData.phone} onChange={handleChange} className={inputClass} />
                                </div>

                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input type="text" name="hotelName" placeholder={t.contact.form.company} value={formData.hotelName} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>

                            <textarea
                                name="message"
                                placeholder={t.contact.form.messagePlaceholder}
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
                                    <><Loader2 className="w-5 h-5 animate-spin" /> {t.contact.form.sending}</>
                                ) : (
                                    <><Send className="w-5 h-5" /> {t.contact.form.send}</>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
