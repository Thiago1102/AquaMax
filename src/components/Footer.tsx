import { Wind, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const WA_NUMBER = '34600000000' // TODO: Reemplaza
const PHONE     = '600 000 000'
const EMAIL     = 'info@aquamax.es'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-dark)', color: 'var(--color-dark-foreground)', padding: '3.5rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ display: 'grid', gap: '2.5rem', marginBottom: '2.5rem' }} className="footer-grid">

          {/* Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2.25rem', height: '2.25rem',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Wind size={16} color="white" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', color: 'white' }}>
                Aquamax
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.70 0.02 220)', lineHeight: 1.7, maxWidth: '260px' }}>
              Limpieza y desinfección profesional de aires acondicionados para particulares en el Corredor del Henares.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={`tel:+34${PHONE.replace(/\s/g,'')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Phone size={14} /> {PHONE}
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                💬 WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Mail size={14} /> {EMAIL}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem' }}>
                <MapPin size={14} /> Corredor del Henares, Madrid
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { to: '/privacidad',  label: 'Política de privacidad' },
                { to: '/aviso-legal', label: 'Aviso legal' },
                { to: '/cookies',     label: 'Política de cookies' },
              ].map(l => (
                <Link key={l.to} to={l.to}
                  style={{ color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid oklch(0.28 0.02 225)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.825rem', color: 'oklch(0.55 0.02 220)' }}>
            © {year} Aquamax. Todos los derechos reservados. · Corredor del Henares, Madrid.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1.5fr 1fr; } }
      `}</style>
    </footer>
  )
}
