import { BadgeCheck, ChevronDown, House, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { CONTACT_DERIVED, WA_MESSAGES } from '../config/contact'

const trustItems = [
  { icon: BadgeCheck, text: 'Presupuesto sin compromiso' },
  { icon: House, text: 'Servicio en tu domicilio' },
  { icon: ShieldCheck, text: 'Desinfección homologada' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-bg-pos"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        ['--hero-bg-image' as any]: "url('/imagen-hero-mobile.png')",
        backgroundImage: 'linear-gradient(rgba(235, 235, 235, 0.77), rgba(9, 36, 62, 0.64)), var(--hero-bg-image)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ maxWidth: '92rem', margin: '0 auto', padding: '8rem 1.5rem 5rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}>

          {/* Contenido */}
          <div style={{ maxWidth: '700px' }}>
            {/* Etiqueta zona */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'oklch(0.99 0 0 / 0.12)', color: 'rgba(255,255,255,0.90)',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem',
              border: '1px solid oklch(0.99 0 0 / 0.2)',
            }}>
              <MapPin size={16} strokeWidth={2.2} />
              Corredor del Henares
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.1, marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              opacity: 0,
              transform: 'translateY(22px)',
              animation: 'heroTitleReveal 620ms cubic-bezier(0.22, 1, 0.36, 1) 70ms forwards',
            }}>
              Mejora el,<br />
              <span style={{ color: 'rgb(42, 80, 248)' }}>rendimiento y la imagen</span>{' '}
              de tus instalaciones
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              Limpieza profesional de placas solares, ventanas y aire acondicionado.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href={`${CONTACT_DERIVED.waBaseUrl}?text=${WA_MESSAGES.quoteRequest}`} target="_blank" rel="noopener noreferrer" className="btn-white">
                <MessageCircle size={18} />
                Pedir presupuesto gratis
              </a>
              <a href="#servicios" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                Ver cómo funciona
              </a>
            </div>

            {/* Datos de confianza */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
              {trustItems.map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.80)', fontSize: '0.875rem' }}>
                  <item.icon size={16} strokeWidth={2.2} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#servicios" aria-label="Ir a servicios"
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)', animation: 'bounce 2s infinite',
        }}>
        <ChevronDown size={28} />
      </a>

      <style>{`
        @keyframes heroTitleReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(30px); }
        }
        .hero-bg-pos {
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        @media (min-width: 932px) {
          .hero-bg-pos {
            --hero-bg-image: url('/imagen-hero-1.png');
            background-image: linear-gradient(rgba(146, 146, 146, 0.49), rgba(9, 36, 62, 0.64)), url('/imagen-hero-1.png');
            background-position: center 88%;
            background-size: cover;
          }
        }
      `}</style>

      {/* Teléfono flotante (móvil) */}
      <a href={`tel:+34${CONTACT_DERIVED.phoneDigits}`} aria-label="Llamar" className="md:hidden"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 40,
          width: '3.5rem', height: '3.5rem', borderRadius: '50%',
          background: 'oklch(0.52 0.19 145)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px oklch(0.18 0.025 220 / 0.3)',
        }}>
        <Phone size={20} />
      </a>
    </section>
  )
}
