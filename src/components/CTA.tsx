import { MessageCircle, Wind } from 'lucide-react'
import { CONTACT_DERIVED, WA_MESSAGES } from '../config/contact'

export default function CTA() {
  return (
    <section className="cta-gradient" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem', color: 'white' }}>
          <Wind size={40} strokeWidth={2.2} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
          fontWeight: 800, color: 'white', marginBottom: '1rem', lineHeight: 1.2,
        }}>
          ¿Cada cuánto se deben limpiar?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Recomendamos una limpieza cada 6-12 meses. <br />
          dependiendo del uso, la ubicación y la cantidad de polvo en el ambiente. <br />
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href={`${CONTACT_DERIVED.waBaseUrl}?text=${WA_MESSAGES.quoteRequest}`} target="_blank" rel="noopener noreferrer" className="btn-white">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a href="#contacto" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
