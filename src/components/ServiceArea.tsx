import { MapPin } from 'lucide-react'

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
              💡 <strong>¿No ves tu localidad?</strong> Pregúntanos sin compromiso, seguramente podemos llegar.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  )
}
