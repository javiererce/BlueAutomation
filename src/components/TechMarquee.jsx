import { useLanguage } from '../LanguageContext';

const techs = [
    { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp/25D366", color: "#25D366" },
    { name: "Meta", icon: "https://cdn.simpleicons.org/meta/0082FB", color: "#0082FB" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/ffffff", color: "#ffffff" },
    { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4", color: "#4285F4" },
    { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", color: "#635BFF" },
    { name: "Mercado Pago", icon: "https://cdn.simpleicons.org/mercadopago/00B1EA", color: "#00B1EA" },
    { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly/006BFF", color: "#006BFF" },
    { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable/18BFFF", color: "#18BFFF" },
    { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59", color: "#FF7A59" },
    { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram/26A5E4", color: "#26A5E4" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E", color: "#3FCF8E" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00", color: "#DD2C00" },
    { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/E4405F", color: "#E4405F" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C", color: "#7AB55C" },
    { name: "Tiendanube", icon: "https://cdn.simpleicons.org/tiendanube/2E31BE", color: "#2E31BE" },
    { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853", color: "#34A853" },
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack/4A154B", color: "#E01E5A" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff", color: "#ffffff" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71", color: "#EA4B71" },
    { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2", color: "#8E75B2" },
];

// Duplicate the list for seamless infinite scroll
const marqueeItems = [...techs, ...techs];

export default function TechMarquee() {
    const { language } = useLanguage();

    const title = {
        es: "Trabajamos integraciones con estas tecnologías",
        en: "We integrate with these technologies",
        pt: "Trabalhamos integrações com estas tecnologias"
    };

    return (
        <section className="py-16 relative overflow-hidden bg-dark/80 border-t border-b border-white/5">
            <div className="container mx-auto px-6 mb-10">
                <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                    {title[language] || title.es}
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-dark/80 to-transparent pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-dark/80 to-transparent pointer-events-none" />

                {/* Scrolling track */}
                <div className="flex marquee-track">
                    {marqueeItems.map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-3 px-8 shrink-0 group cursor-default"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-7 h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                            <span
                                className="text-sm font-medium whitespace-nowrap opacity-40 group-hover:opacity-90 transition-opacity duration-300"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
