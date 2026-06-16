import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('aquamax-cookies')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('aquamax-cookies', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: '1.5rem', left: '1rem', right: '1rem',
      zIndex: 100, maxWidth: '680px',
      margin: '0 auto',
    }}>
      <div style={{
        background: 'var(--color-dark)', color: 'var(--color-dark-foreground)',
        borderRadius: '1rem', padding: '1.25rem 1.5rem',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
        border: '1px solid oklch(0.30 0.02 225)',
      }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'oklch(0.80 0.01 220)' }}>
            🍪 Usamos cookies propias para mejorar tu experiencia.{' '}
            <Link to="/cookies" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
              Más información
            </Link>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
          <button onClick={accept} className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Aceptar
          </button>
          <button onClick={accept} aria-label="Cerrar"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'oklch(0.55 0.02 220)', padding: '0.25rem' }}>
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
