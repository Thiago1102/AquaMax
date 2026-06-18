import { Phone, ChevronDown } from 'lucide-react'

const WA_NUMBER = '624040047' 
const WA_MSG    = encodeURIComponent('Hola, me gustaría solicitar un presupuesto para limpieza de aire acondicionado.')

export default function Hero() {
  return (
    <section id="inicio" className="hero-gradient" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>

      {/* Patrón decorativo de fondo */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '50vw', height: '50vw', maxWidth: '600px',
          background: 'radial-gradient(circle, oklch(0.99 0 0 / 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '40vw', height: '40vw', maxWidth: '450px',
          background: 'radial-gradient(circle, oklch(0.52 0.15 195 / 0.15) 0%, transparent 90%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '8rem 1.5rem 5rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-2-placeholder">

          {/* Contenido */}
          <div style={{ maxWidth: '640px' }}>
            {/* Etiqueta zona */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'oklch(0.99 0 0 / 0.12)', color: 'rgba(255,255,255,0.90)',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem',
              border: '1px solid oklch(0.99 0 0 / 0.2)',
            }}>
              📍 Corredor del Henares
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.1, marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Mejora el,<br />
              <span style={{ color: 'oklch(0.88 0.08 195)' }}>rendimiento y la imagen</span>{' '}
              de tus instalaciones
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              Limpieza profecional de placas solares, ventanas y aire acondicionado.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-white">
                💬 Pedir presupuesto gratis
              </a>
              <a href="#servicios" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                Ver cómo funciona
              </a>
            </div>

            {/* Datos de confianza */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { icon: '✅', text: 'Presupuesto sin compromiso' },
                { icon: '🏠', text: 'Servicio en tu domicilio' },
                { icon: '🔬', text: 'Desinfección homologada' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.80)', fontSize: '0.875rem' }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder imagen hero */}
          <div style={{
            background: 'oklch(0.99 0 0 / 0.08)',
            border: '2px dashed oklch(0.99 0 0 / 0.25)',
            borderRadius: '1.5rem',
            aspectRatio: '4/3',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.55)', gap: '0.75rem',
            padding: '2rem', textAlign: 'center',
          }} className="hidden lg:flex">
            <div style={{ fontSize: '4rem' }}>🌬️</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.5 }}>
              Espacio reservado<br />para imagen del negocio
            </p>
            <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Reemplazar con foto real</p>
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
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .hidden { display: none; }
        @media (min-width: 1024px) { .hidden.lg\\:flex { display: flex; } }
      `}</style>

      {/* Teléfono flotante (móvil) */}
      <a href="tel:+34624040047" aria-label="Llamar" className="md:hidden"
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
