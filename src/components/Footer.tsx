import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT, CONTACT_DERIVED } from '../config/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-dark)', color: 'var(--color-dark-foreground)', padding: '3.5rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ display: 'grid', gap: '2.5rem', marginBottom: '2.5rem' }} className="footer-grid">

          {/* Marca */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/logo.PNG"
                alt="Aquamax"
                style={{ height: '2.8rem', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.70 0.02 220)', lineHeight: 1.7, maxWidth: '260px' }}>
              Limpieza profesional de placas solares, ventanas y aire acondicionado.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={`tel:+34${CONTACT_DERIVED.phoneDigits}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Phone size={14} /> {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT_DERIVED.waBaseUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Mail size={14} /> {CONTACT.email}
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
        <div style={{ borderTop: '1px solid oklch(0.28 0.02 225)', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <p style={{ fontSize: '0.825rem', color: 'oklch(0.55 0.02 220)' }}>
                © {year} Aquamax. Todos los derechos reservados. · Corredor del Henares, Madrid.
              </p>
              <p style={{ fontSize: '0.78rem', color: 'oklch(0.62 0.02 220)' }}>
                Desarrollado por
              </p>
            </div>

            <a href="#inicio" aria-label="YADA - Desarrollado por" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              <img
                src="/YADA_complete.svg"
                alt="YADA"
                style={{ height: '3.4rem', width: 'auto', display: 'block', maxWidth: '100%' }}
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1.5fr 1fr; } }
      `}</style>
    </footer>
  )
}
