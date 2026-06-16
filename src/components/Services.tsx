import { Wind, Droplets, ShieldCheck, CheckCircle2 } from 'lucide-react'

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

      <style>{`
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  )
}
