const WA_NUMBER = '34600000000' // TODO: Reemplaza
const WA_MSG    = encodeURIComponent('Hola, me gustaría solicitar un presupuesto para limpieza de aire acondicionado.')

export default function CTA() {
  return (
    <section className="cta-gradient" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🌬️</div>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
          fontWeight: 800, color: 'white', marginBottom: '1rem', lineHeight: 1.2,
        }}>
          ¿Tu aire acondicionado necesita una limpieza?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Pide tu presupuesto sin compromiso. Te respondemos en menos de 24 horas y acordamos la visita a tu conveniencia.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-white">
            💬 WhatsApp
          </a>
          <a href="#contacto" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
