import { useState } from 'react'
import { Phone, Mail, MessageSquare, Send } from 'lucide-react'

// TODO: Reemplaza con los datos reales del negocio
const PHONE      = '624 040 047'
const WA_NUMBER  = '34624040047'
const EMAIL      = 'miguelgilmorales@gmail.com'

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
      `Hola, me llamo ${form.name}. Estoy interesado en vuestros servicios de limpieza. Localidad: ${form.location}. Teléfono: ${form.phone}. ${form.message ? `Mensaje: ${form.message}` : ''}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
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
              { icon: Phone,        label: 'Teléfono',  value: PHONE,  href: `tel:+34${PHONE.replace(/\s/g,'')}`, cta: 'Llamar ahora' },
              { icon: MessageSquare,label: 'WhatsApp',  value: PHONE,  href: `https://wa.me/${WA_NUMBER}`,          cta: 'Escribir por WhatsApp' },
              { icon: Mail,         label: 'Email',     value: EMAIL,  href: `mailto:${EMAIL}`,                     cta: 'Enviar email' },
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
                    {item.cta} →
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
              🕐 <strong>Horario de atención:</strong><br />
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
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

      <style>{`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 540px) { .form-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  )
}
