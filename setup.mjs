/**
 * Aquamax project setup script.
 * Run once with: node setup.mjs
 * Creates all source directories and files.
 */

import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const files = {}

// ─── public/robots.txt ───────────────────────────────────────────────────────
files['public/robots.txt'] = `User-agent: *
Allow: /
Disallow: /api/
`

// ─── src/vite-env.d.ts ────────────────────────────────────────────────────────
files['src/vite-env.d.ts'] = `/// <reference types="vite/client" />
`

// ─── src/main.tsx ─────────────────────────────────────────────────────────────
files['src/main.tsx'] = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
`

// ─── src/App.tsx ──────────────────────────────────────────────────────────────
files['src/App.tsx'] = `import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LegalNotice from './pages/LegalNotice'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </>
  )
}
`

// ─── src/index.css ────────────────────────────────────────────────────────────
files['src/index.css'] = `@import "tailwindcss";

@theme {
  /* ── Colores principales ─────────────────────── */
  --color-background:        oklch(0.98 0.008 210);
  --color-foreground:        oklch(0.18 0.025 220);

  --color-primary:           oklch(0.40 0.13 225);
  --color-primary-hover:     oklch(0.34 0.13 225);
  --color-primary-foreground:oklch(0.99 0 0);

  --color-accent:            oklch(0.52 0.15 195);
  --color-accent-hover:      oklch(0.44 0.15 195);
  --color-accent-light:      oklch(0.92 0.04 195);
  --color-accent-foreground: oklch(0.99 0 0);

  --color-secondary:         oklch(0.94 0.02 210);
  --color-secondary-foreground: oklch(0.25 0.025 220);

  --color-muted:             oklch(0.96 0.01 210);
  --color-muted-foreground:  oklch(0.52 0.02 220);

  --color-card:              oklch(1 0 0);
  --color-card-foreground:   oklch(0.18 0.025 220);

  --color-border:            oklch(0.88 0.02 210);
  --color-input:             oklch(0.94 0.01 210);

  --color-dark:              oklch(0.14 0.03 230);
  --color-dark-foreground:   oklch(0.96 0.01 210);

  /* ── Tipografía ──────────────────────────────── */
  --font-heading: 'Outfit', sans-serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;

  /* ── Sombras ─────────────────────────────────── */
  --shadow-sm:  0 1px 3px  oklch(0.18 0.025 220 / 0.08);
  --shadow-md:  0 4px 12px oklch(0.18 0.025 220 / 0.10);
  --shadow-lg:  0 8px 30px oklch(0.18 0.025 220 / 0.14);
}

/* ── Reset y base ────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background-color: var(--color-background);
  color: var(--color-foreground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
}

a { text-decoration: none; }

/* ── Utilidades de botones ───────────────────────── */
@utility btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  text-decoration: none;
  white-space: nowrap;

  &:hover { background-color: var(--color-primary-hover); }
  &:active { transform: scale(0.98); }
}

@utility btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-primary);
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  border: 2px solid var(--color-primary);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
  }
}

@utility btn-white {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: var(--color-primary);
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;

  &:hover { background-color: var(--color-accent-light); }
}

@utility btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: oklch(0.52 0.19 145);
  color: white;
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  white-space: nowrap;

  &:hover { background-color: oklch(0.44 0.19 145); }
}

/* ── Gradientes de sección ───────────────────────── */
@utility hero-gradient {
  background: linear-gradient(
    140deg,
    oklch(0.34 0.14 230) 0%,
    oklch(0.40 0.13 225) 40%,
    oklch(0.46 0.15 200) 100%
  );
}

@utility cta-gradient {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
}

/* ── Card base ───────────────────────────────────── */
@utility card {
  background-color: var(--color-card);
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  padding: 2rem;
  border: 1px solid var(--color-border);
}
`

// ─── src/components/Header.tsx ────────────────────────────────────────────────
files['src/components/Header.tsx'] = `import { useState, useEffect } from 'react'
import { Menu, X, Wind } from 'lucide-react'

// TODO: Reemplaza con el número real de WhatsApp (formato: código país + número sin espacios)
const WA_NUMBER = '34600000000'
const WA_MSG    = encodeURIComponent('Hola, me gustaría solicitar información sobre limpieza de aire acondicionado.')

const navLinks = [
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Beneficios',  href: '#beneficios' },
  { label: 'Zona',        href: '#zona' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor    = scrolled ? 'var(--color-foreground)'      : 'white'
  const mutedColor   = scrolled ? 'var(--color-muted-foreground)': 'rgba(255,255,255,0.80)'

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, box-shadow 0.3s',
        background:  scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>

          {/* Logo */}
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{
              width: '2.25rem', height: '2.25rem',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              borderRadius: '0.6rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Wind size={16} color="white" strokeWidth={2.5} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem', color: textColor, transition: 'color 0.3s' }}>
              Aquamax
            </span>
          </a>

          {/* Nav escritorio */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                style={{ fontSize: '0.9rem', fontWeight: 500, color: mutedColor, transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = scrolled ? 'var(--color-primary)' : 'white')}
                onMouseOut={e  => (e.currentTarget.style.color = mutedColor)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA escritorio */}
          <div className="hidden md:block">
            <a href={\`https://wa.me/\${WA_NUMBER}?text=\${WA_MSG}\`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Pedir presupuesto
            </a>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Abrir menú"
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, padding: '0.5rem' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div style={{ background: 'white', borderTop: '1px solid var(--color-border)', padding: '1rem 1.5rem 1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{ padding: '0.75rem 1rem', fontSize: '1rem', fontWeight: 500, color: 'var(--color-foreground)', borderRadius: '0.5rem', display: 'block' }}
              >
                {l.label}
              </a>
            ))}
            <a href={\`https://wa.me/\${WA_NUMBER}?text=\${WA_MSG}\`} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
              \u{1F4AC} Pedir presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
`

// ─── src/components/Hero.tsx ──────────────────────────────────────────────────
files['src/components/Hero.tsx'] = `import { Phone, ChevronDown } from 'lucide-react'

const WA_NUMBER = '34600000000' // TODO: Reemplaza
const WA_MSG    = encodeURIComponent('Hola, me gustaría solicitar un presupuesto para limpieza de aire acondicionado.')

export default function Hero() {
  return (
    <section id="inicio" className="hero-gradient" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>

      {/* Patrón decorativo de fondo */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: '50vw', height: '50vw', maxWidth: '600px',
          background: 'radial-gradient(circle, oklch(0.99 0 0 / 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '40vw', height: '40vw', maxWidth: '450px',
          background: 'radial-gradient(circle, oklch(0.52 0.15 195 / 0.15) 0%, transparent 70%)',
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
              \u{1F4CD} Corredor del Henares
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.1, marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Tu aire,<br />
              <span style={{ color: 'oklch(0.88 0.08 195)' }}>más limpio</span>{' '}
              y saludable
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              Limpieza y desinfección profesional de aires acondicionados para particulares.
              Mejora el aire que respiras y el rendimiento de tu equipo.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href={\`https://wa.me/\${WA_NUMBER}?text=\${WA_MSG}\`} target="_blank" rel="noopener noreferrer" className="btn-white">
                \u{1F4AC} Pedir presupuesto gratis
              </a>
              <a href="#servicios" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                Ver cómo funciona
              </a>
            </div>

            {/* Datos de confianza */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { icon: '\u2705', text: 'Presupuesto sin compromiso' },
                { icon: '\u{1F3E0}', text: 'Servicio en tu domicilio' },
                { icon: '\u{1F52C}', text: 'Desinfección homologada' },
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
            <div style={{ fontSize: '4rem' }}>\u{1F32C}\uFE0F</div>
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

      <style>{\`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .hidden { display: none; }
        @media (min-width: 1024px) { .hidden.lg\\\\:flex { display: flex; } }
      \`}</style>

      {/* Teléfono flotante (móvil) */}
      <a href="tel:+34600000000" aria-label="Llamar" className="md:hidden"
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
`

// ─── src/components/Services.tsx ──────────────────────────────────────────────
files['src/components/Services.tsx'] = `import { Wind, Droplets, ShieldCheck, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Wind,        title: 'Limpieza de filtros',           desc: 'Desmontamos y lavamos a fondo todos los filtros para eliminar polvo y suciedad acumulada.' },
  { icon: Droplets,    title: 'Limpieza de evaporador',        desc: 'Tratamos las bobinas del evaporador con productos profesionales que eliminan bacterias, hongos y malos olores.' },
  { icon: ShieldCheck, title: 'Desinfección homologada',       desc: 'Aplicamos un desinfectante de uso profesional, seguro para tu familia y mascotas, que elimina gérmenes y alérgenos.' },
  { icon: CheckCircle2, title: 'Revisión de funcionamiento',   desc: 'Comprobamos que el equipo funciona correctamente y te explicamos cómo mantenerlo en buen estado.' },
]

export default function Services() {
  return (
    <section id="servicios" style={{ background: 'white', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'var(--color-accent-light)', color: 'var(--color-accent)',
            padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '1rem', fontFamily: 'var(--font-heading)',
          }}>
            Nuestro servicio
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '1rem' }}>
            ¿Qué hace Aquamax?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted-foreground)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            La mayoría de los hogares nunca limpian el interior de su aire acondicionado.
            Filtros sucios, bacterias y hongos circulan por el aire que tú y tu familia respiráis cada día.
          </p>
        </div>

        {/* Layout dos columnas */}
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="md-grid-2">

          {/* Texto principal */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-foreground)' }}>
              Limpieza profesional sin salir de casa
            </h3>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              En Aquamax realizamos una <strong>limpieza profunda y desinfección completa</strong> de tu equipo de aire acondicionado directamente en tu domicilio. No hay que desmontarlo ni llevarlo a ningún sitio.
            </p>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Utilizamos productos homologados y equipos profesionales para garantizar un resultado que no consigues con la limpieza doméstica habitual. El servicio dura entre 45 y 90 minutos según el equipo.
            </p>
            <a href="#contacto" className="btn-primary">
              Solicitar servicio
            </a>
          </div>

          {/* Pasos del proceso */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '1.25rem', borderRadius: '0.875rem',
                border: '1px solid var(--color-border)',
                background: 'var(--color-muted)',
                transition: 'box-shadow 0.2s',
              }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem', flexShrink: 0,
                  background: 'var(--color-accent-light)', color: 'var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <step.icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '0.25rem' }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-foreground)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{\`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
      \`}</style>
    </section>
  )
}
`

// ─── src/components/Benefits.tsx ──────────────────────────────────────────────
files['src/components/Benefits.tsx'] = `import { Zap, Heart, Wrench, HandshakeIcon } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Mejor rendimiento',
    desc: 'Un equipo limpio consume hasta un 15% menos de energía y enfría o calienta con mayor eficiencia. Notas la diferencia en la factura de la luz.',
    color: 'oklch(0.75 0.14 85)',
    bg:   'oklch(0.97 0.04 85)',
  },
  {
    icon: Heart,
    title: 'Aire más saludable',
    desc: 'Eliminamos bacterias, hongos, ácaros y alérgenos que se acumulan en los filtros y bobinas. Respirar aire limpio mejora el descanso y reduce alergias.',
    color: 'var(--color-accent)',
    bg:   'var(--color-accent-light)',
  },
  {
    icon: Wrench,
    title: 'Mayor vida útil',
    desc: 'El mantenimiento regular previene averías costosas y prolonga la vida de tu equipo. Una inversión pequeña que evita un gasto grande.',
    color: 'var(--color-primary)',
    bg:   'oklch(0.94 0.04 225)',
  },
  {
    icon: HandshakeIcon,
    title: 'Trato cercano y de confianza',
    desc: 'Somos un negocio local del Corredor del Henares. Trabajamos con seriedad, puntualidad y un precio justo. Nuestros clientes nos recomiendan.',
    color: 'oklch(0.52 0.15 145)',
    bg:   'oklch(0.95 0.04 145)',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" style={{ background: 'var(--color-muted)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'var(--color-accent-light)', color: 'var(--color-accent)',
            padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '1rem', fontFamily: 'var(--font-heading)',
          }}>
            Por qué elegir Aquamax
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '1rem' }}>
            Beneficios de una limpieza profesional
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-foreground)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Más allá de la higiene, limpiar tu aire acondicionado tiene ventajas reales para tu bolsillo y tu salud.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }} className="grid-2 grid-4">
          {benefits.map((b, i) => (
            <article key={i} style={{
              background: 'white', borderRadius: '1.25rem', padding: '2rem',
              border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
              onMouseOut={e  => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >
              <div style={{
                width: '3rem', height: '3rem', borderRadius: '0.75rem', marginBottom: '1.25rem',
                background: b.bg, color: b.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <b.icon size={22} strokeWidth={2} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.6rem' }}>
                {b.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', lineHeight: 1.7 }}>
                {b.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{\`
        @media (min-width: 640px)  { .grid-2 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
      \`}</style>
    </section>
  )
}
`

// ─── src/components/ServiceArea.tsx ───────────────────────────────────────────
files['src/components/ServiceArea.tsx'] = `import { MapPin } from 'lucide-react'

const localidades = [
  'Alcalá de Henares',
  'Torrejón de Ardoz',
  'Coslada',
  'San Fernando de Henares',
  'Mejorada del Campo',
  'Velilla de San Antonio',
  'Arganda del Rey',
  'Rivas-Vaciamadrid',
]

export default function ServiceArea() {
  return (
    <section id="zona" style={{ background: 'white', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="md-grid-2">

          {/* Texto */}
          <div>
            <span style={{
              display: 'inline-block', background: 'var(--color-accent-light)', color: 'var(--color-accent)',
              padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600,
              marginBottom: '1rem', fontFamily: 'var(--font-heading)',
            }}>
              Zona de servicio
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '1rem' }}>
              Trabajamos en el Corredor del Henares
            </h2>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Somos un negocio local y nos desplazamos a tu domicilio en las principales localidades del Corredor del Henares. Si no ves tu localidad en el listado, consúltanos igualmente: podemos llegar a otras zonas cercanas.
            </p>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '2rem' }}>
              El desplazamiento es gratuito dentro de nuestra zona habitual de trabajo.
            </p>
            <a href="#contacto" className="btn-primary">
              Consultar mi zona
            </a>
          </div>

          {/* Lista de localidades */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {localidades.map(loc => (
                <div key={loc} style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.75rem 1rem', borderRadius: '0.625rem',
                  background: 'var(--color-muted)', border: '1px solid var(--color-border)',
                  fontSize: '0.9375rem', color: 'var(--color-foreground)', fontWeight: 500,
                }}>
                  <MapPin size={15} color="var(--color-accent)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  {loc}
                </div>
              ))}
            </div>
            <p style={{
              fontSize: '0.875rem', color: 'var(--color-muted-foreground)',
              background: 'var(--color-accent-light)', borderRadius: '0.625rem',
              padding: '0.875rem 1rem', border: '1px solid oklch(0.52 0.15 195 / 0.2)',
            }}>
              \u{1F4A1} <strong>¿No ves tu localidad?</strong> Pregúntanos sin compromiso, seguramente podemos llegar.
            </p>
          </div>
        </div>
      </div>

      <style>{\`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
      \`}</style>
    </section>
  )
}
`

// ─── src/components/CTA.tsx ───────────────────────────────────────────────────
files['src/components/CTA.tsx'] = `const WA_NUMBER = '34600000000' // TODO: Reemplaza
const WA_MSG    = encodeURIComponent('Hola, me gustaría solicitar un presupuesto para limpieza de aire acondicionado.')

export default function CTA() {
  return (
    <section className="cta-gradient" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>\u{1F32C}\uFE0F</div>
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
          <a href={\`https://wa.me/\${WA_NUMBER}?text=\${WA_MSG}\`} target="_blank" rel="noopener noreferrer" className="btn-white">
            \u{1F4AC} WhatsApp
          </a>
          <a href="#contacto" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
`

// ─── src/components/Contact.tsx ───────────────────────────────────────────────
files['src/components/Contact.tsx'] = `import { useState } from 'react'
import { Phone, Mail, MessageSquare, Send } from 'lucide-react'

// TODO: Reemplaza con los datos reales del negocio
const PHONE      = '600 000 000'
const WA_NUMBER  = '34600000000'
const EMAIL      = 'info@aquamax.es'

interface FormState {
  name:     string
  phone:    string
  location: string
  message:  string
}

export default function Contact() {
  const [form, setForm]       = useState<FormState>({ name: '', phone: '', location: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      \`Hola, me llamo \${form.name}. Estoy interesado en vuestros servicios de limpieza de aire acondicionado. Localidad: \${form.location}. Teléfono: \${form.phone}. \${form.message ? \`Mensaje: \${form.message}\` : ''}\`
    )
    window.open(\`https://wa.me/\${WA_NUMBER}?text=\${text}\`, '_blank')
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1.5px solid var(--color-border)',
    borderRadius: '0.625rem',
    fontSize: '0.9375rem', color: 'var(--color-foreground)',
    background: 'white', outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contacto" style={{ background: 'var(--color-muted)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'var(--color-accent-light)', color: 'var(--color-accent)',
            padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '1rem', fontFamily: 'var(--font-heading)',
          }}>
            Contacto
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '1rem' }}>
            Hablemos sin compromiso
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-foreground)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Cuéntanos qué necesitas y te responderemos lo antes posible con un presupuesto claro y sin sorpresas.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="md-grid-2">

          {/* Info de contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: Phone,        label: 'Teléfono',  value: PHONE,  href: \`tel:+34\${PHONE.replace(/\\s/g,'')}\`, cta: 'Llamar ahora' },
              { icon: MessageSquare,label: 'WhatsApp',  value: PHONE,  href: \`https://wa.me/\${WA_NUMBER}\`,          cta: 'Escribir por WhatsApp' },
              { icon: Mail,         label: 'Email',     value: EMAIL,  href: \`mailto:\${EMAIL}\`,                     cta: 'Enviar email' },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.label !== 'Teléfono' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem 1.5rem', borderRadius: '1rem',
                  background: 'white', border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)', textDecoration: 'none',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '0.75rem', flexShrink: 0,
                  background: 'var(--color-accent-light)', color: 'var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted-foreground)', fontWeight: 500, marginBottom: '0.15rem' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-foreground)', fontSize: '1rem' }}>
                    {item.value}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                    {item.cta} \u2192
                  </p>
                </div>
              </a>
            ))}

            <div style={{
              padding: '1.25rem 1.5rem', borderRadius: '1rem',
              background: 'var(--color-accent-light)',
              border: '1px solid oklch(0.52 0.15 195 / 0.2)',
              fontSize: '0.9rem', color: 'oklch(0.35 0.1 200)', lineHeight: 1.6,
            }}>
              \u{1F550} <strong>Horario de atención:</strong><br />
              Lunes a viernes: 8:00 – 20:00<br />
              Sábados: 9:00 – 14:00
            </div>
          </div>

          {/* Formulario */}
          {submitted ? (
            <div style={{
              background: 'white', borderRadius: '1.25rem', padding: '3rem 2rem',
              border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>\u{1F389}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.75rem' }}>
                ¡Mensaje enviado!
              </h3>
              <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.7 }}>
                Hemos abierto WhatsApp con tu mensaje. Si no se abrió automáticamente, escríbenos al {PHONE}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: 'white', borderRadius: '1.25rem', padding: '2rem',
              border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}>
              <div style={{ display: 'grid', gap: '1.25rem' }} className="form-grid">
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '0.4rem' }}>
                    Tu nombre *
                  </label>
                  <input id="name" name="name" type="text" required
                    placeholder="Ej: María García"
                    value={form.name} onChange={handleChange} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '0.4rem' }}>
                    Teléfono *
                  </label>
                  <input id="phone" name="phone" type="tel" required
                    placeholder="Ej: 600 000 000"
                    value={form.phone} onChange={handleChange} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '0.4rem' }}>
                  Localidad *
                </label>
                <select id="location" name="location" required
                  value={form.location} onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')}
                >
                  <option value="">Selecciona tu localidad</option>
                  {['Alcalá de Henares','Torrejón de Ardoz','Coslada','San Fernando de Henares','Mejorada del Campo','Velilla de San Antonio','Arganda del Rey','Rivas-Vaciamadrid','Otra'].map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '0.4rem' }}>
                  Mensaje (opcional)
                </label>
                <textarea id="message" name="message" rows={3}
                  placeholder="Cuéntanos qué necesitas: tipo de equipo, número de unidades..."
                  value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '1rem', padding: '0.875rem' }}>
                <Send size={18} />
                Enviar por WhatsApp
              </button>

              <p style={{ fontSize: '0.8rem', color: 'var(--color-muted-foreground)', textAlign: 'center', lineHeight: 1.5 }}>
                Al enviar, se abrirá WhatsApp con tu mensaje pre-redactado.
                Tus datos no se almacenan en ningún servidor.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{\`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 540px) { .form-grid { grid-template-columns: 1fr 1fr; } }
      \`}</style>
    </section>
  )
}
`

// ─── src/components/Footer.tsx ────────────────────────────────────────────────
files['src/components/Footer.tsx'] = `import { Wind, Phone, Mail, MapPin } from 'lucide-react'
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
              <a href={\`tel:+34\${PHONE.replace(/\\s/g,'')}\`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Phone size={14} /> {PHONE}
              </a>
              <a href={\`https://wa.me/\${WA_NUMBER}\`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'oklch(0.70 0.02 220)', fontSize: '0.9rem', textDecoration: 'none' }}>
                \u{1F4AC} WhatsApp
              </a>
              <a href={\`mailto:\${EMAIL}\`}
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
            \u00A9 {year} Aquamax. Todos los derechos reservados. · Corredor del Henares, Madrid.
          </p>
        </div>
      </div>

      <style>{\`
        @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1.5fr 1fr; } }
      \`}</style>
    </footer>
  )
}
`

// ─── src/components/CookieBanner.tsx ─────────────────────────────────────────
files['src/components/CookieBanner.tsx'] = `import { useState, useEffect } from 'react'
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
            \u{1F36A} Usamos cookies propias para mejorar tu experiencia.{' '}
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
`

// ─── src/pages/Home.tsx ───────────────────────────────────────────────────────
files['src/pages/Home.tsx'] = `import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import ServiceArea from '../components/ServiceArea'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <ServiceArea />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
`

// ─── src/pages/PrivacyPolicy.tsx ──────────────────────────────────────────────
files['src/pages/PrivacyPolicy.tsx'] = `import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2.5rem', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-foreground)', marginBottom: '0.5rem' }}>
          Política de Privacidad
        </h1>
        <p style={{ color: 'var(--color-muted-foreground)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          Última actualización: junio de 2025
        </p>

        <div style={{ color: 'var(--color-foreground)', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Responsable del tratamiento',
              text: 'Aquamax, con domicilio en el Corredor del Henares (Madrid) y dirección de correo electrónico info@aquamax.es, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web.',
            },
            {
              title: '2. Datos que recogemos',
              text: 'Únicamente recogemos los datos que tú nos facilitas voluntariamente a través del formulario de contacto: nombre, teléfono, localidad y mensaje. No recopilamos ningún otro dato personal de forma automática.',
            },
            {
              title: '3. Finalidad del tratamiento',
              text: 'Los datos facilitados se utilizan exclusivamente para responder a tu solicitud de información o presupuesto. No los utilizamos para ninguna otra finalidad ni los cedemos a terceros.',
            },
            {
              title: '4. Base legal',
              text: 'El tratamiento de tus datos se basa en tu consentimiento, que otorgas al enviarnos el formulario de contacto.',
            },
            {
              title: '5. Conservación de los datos',
              text: 'Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud. En el caso del formulario de contacto, dado que el envío se realiza directamente a través de WhatsApp, los datos no quedan almacenados en nuestros servidores.',
            },
            {
              title: '6. Tus derechos',
              text: 'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviándonos un email a info@aquamax.es. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
            },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.6rem' }}>
                {section.title}
              </h2>
              <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8 }}>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`

// ─── src/pages/LegalNotice.tsx ────────────────────────────────────────────────
files['src/pages/LegalNotice.tsx'] = `import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LegalNotice() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2.5rem', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-foreground)', marginBottom: '0.5rem' }}>
          Aviso Legal
        </h1>
        <p style={{ color: 'var(--color-muted-foreground)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          Última actualización: junio de 2025
        </p>

        <div style={{ color: 'var(--color-foreground)', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Titular del sitio web',
              text: 'Aquamax. Corredor del Henares, Comunidad de Madrid. Email de contacto: info@aquamax.es.',
            },
            {
              title: '2. Objeto y ámbito de aplicación',
              text: 'El presente aviso legal regula el acceso y uso del sitio web aquamax.es, puesto a disposición de los usuarios de Internet por parte de Aquamax con la finalidad de informar sobre los servicios ofrecidos.',
            },
            {
              title: '3. Propiedad intelectual e industrial',
              text: 'Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son propiedad de Aquamax o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa.',
            },
            {
              title: '4. Exclusión de responsabilidad',
              text: 'Aquamax no se responsabiliza de las interrupciones del servicio, errores técnicos o daños derivados del uso del sitio web. La información contenida en la web tiene carácter meramente informativo y orientativo.',
            },
            {
              title: '5. Ley aplicable y jurisdicción',
              text: 'Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los Juzgados y Tribunales de la Comunidad de Madrid.',
            },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.6rem' }}>
                {section.title}
              </h2>
              <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8 }}>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`

// ─── src/pages/CookiePolicy.tsx ───────────────────────────────────────────────
files['src/pages/CookiePolicy.tsx'] = `import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2.5rem', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-foreground)', marginBottom: '0.5rem' }}>
          Política de Cookies
        </h1>
        <p style={{ color: 'var(--color-muted-foreground)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          Última actualización: junio de 2025
        </p>

        <div style={{ color: 'var(--color-foreground)', lineHeight: 1.8 }}>
          {[
            {
              title: '¿Qué son las cookies?',
              text: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Sirven para recordar tus preferencias y mejorar tu experiencia de navegación.',
            },
            {
              title: '¿Qué cookies utilizamos?',
              text: 'Este sitio web utiliza únicamente cookies propias de carácter técnico y de preferencias. Concretamente, almacenamos una cookie ("aquamax-cookies") para recordar si has aceptado el aviso de cookies. No utilizamos cookies de seguimiento ni de terceros.',
            },
            {
              title: '¿Cómo puedo gestionar o eliminar las cookies?',
              text: 'Puedes configurar tu navegador para rechazar o eliminar las cookies en cualquier momento. Ten en cuenta que deshabilitar las cookies puede afectar a la funcionalidad del sitio. Las instrucciones para gestionar cookies varían según el navegador: consulta las opciones de privacidad de Chrome, Firefox, Safari o Edge.',
            },
            {
              title: 'Más información',
              text: 'Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en info@aquamax.es.',
            },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.6rem' }}>
                {section.title}
              </h2>
              <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8 }}>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`

// ─── Execute ──────────────────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url))
let passed = 0
let failed = 0

for (const [relPath, content] of Object.entries(files)) {
  const absPath = join(__dirname, relPath)
  const dir = dirname(absPath)

  try {
    mkdirSync(dir, { recursive: true })
    if (existsSync(absPath)) {
      console.log(`⏭  SKIP (exists): ${relPath}`)
    } else {
      writeFileSync(absPath, content, 'utf8')
      console.log(`✅ CREATED: ${relPath}`)
      passed++
    }
  } catch (err) {
    console.error(`❌ FAILED:  ${relPath} — ${err.message}`)
    failed++
  }
}

console.log(`\nDone: ${passed} created, ${failed} failed.`)
console.log('You can now run: npm install && npm run dev')
