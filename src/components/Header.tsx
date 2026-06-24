import { useState, useEffect } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { CONTACT_DERIVED, WA_MESSAGES } from '../config/contact'

const navLinks = [
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Beneficios',  href: '#beneficios' },
  { label: 'Cobertura',   href: '#zona' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [isMobile, setIsMobile]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false)
    }
  }, [isMobile])

  const showSolidHeader = scrolled || mobileOpen
  const textColor    = showSolidHeader ? 'var(--color-foreground)'      : 'white'
  const mutedColor   = showSolidHeader ? 'var(--color-muted-foreground)': 'rgba(255,255,255,0.80)'

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, box-shadow 0.3s',
        background:  showSolidHeader ? 'rgba(243, 253, 255, 0.97)' : 'transparent',
        backdropFilter: showSolidHeader ? 'blur(8px)' : 'none',
        boxShadow: showSolidHeader ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>

          {/* Logo */}
          <a href="#inicio" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.PNG"
              alt="Aquamax"
              style={{ height: '3.8rem', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Nav escritorio */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  style={{ fontSize: '1.05rem', fontWeight: 600, color: mutedColor, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = scrolled ? 'var(--color-primary)' : 'white')}
                  onMouseOut={e  => (e.currentTarget.style.color = mutedColor)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA escritorio */}
          {!isMobile && (
            <div>
              <a href={`${CONTACT_DERIVED.waBaseUrl}?text=${WA_MESSAGES.generalInfo}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Pedir presupuesto
              </a>
            </div>
          )}

          {/* Botón hamburguesa */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Abrir menú"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, padding: '0.5rem' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid var(--color-border)', padding: '1rem 1.5rem 1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{ padding: '0.75rem 1rem', fontSize: '1.12rem', fontWeight: 600, color: 'var(--color-foreground)', borderRadius: '0.5rem', display: 'block' }}
              >
                {l.label}
              </a>
            ))}
            <a href={`${CONTACT_DERIVED.waBaseUrl}?text=${WA_MESSAGES.generalInfo}`} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
              <MessageCircle size={18} />
              Pedir presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
