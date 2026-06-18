const steps = [
  {
    title: 'Limpieza de filtros',
    desc: 'Desmontamos y lavamos a fondo todos los filtros para eliminar polvo y suciedad acumulada.',
    image: '/limpieza-de-aire-ac.png',
    imageAlt: 'Técnico limpiando un aire acondicionado',
  },
  {
    title: 'Limpieza de evaporador',
    desc: 'Utilizamos equipos y productos específicos que no dañan tus paneles solares.',
    image: '/limpieza-de-paneles-solares.jpg',
    imageAlt: 'Limpieza profesional de paneles solares',
  },
  {
    title: 'Seguridad y confianza',
    desc: 'Trabajamos con equipos profesionales y medidas de seguridad para cualquier tipo de instalación en altura.',
    image: '/limpieza-de-persianas-.jpg',
    imageAlt: 'Profesional limpiando una ventana en altura',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{ background: 'var(--color-background)', padding: '5rem 1.5rem', borderTop: '1px solid rgba(11, 95, 139, 0.12)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(68, 151, 177, 0.22)', color: 'var(--color-accent)',
            padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '1rem', fontFamily: 'var(--font-heading)',
          }}>
            Nuestro servicio
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.7rem)', fontWeight: 800, color: 'var(--color-foreground)', marginBottom: 0 }}>
            ¿Qué hace Aquamax?
          </h2>
        </div>

        {/* Layout dos columnas */}
        <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }} className="md-grid-2">

          {/* Texto principal */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.55rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-foreground)' }}>
              Limpieza profesional sin salir de casa
            </h3>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '34rem' }}>
              En Aquamax realizamos una <strong>limpieza profunda y desinfección completa</strong> de tu equipo de aire acondicionado directamente en tu domicilio. No hay que desmontarlo ni llevarlo a ningún sitio.
            </p>
            <p style={{ color: 'var(--color-muted-foreground)', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: '34rem' }}>
              La mayoría de los hogares nunca limpian sus <strong>aires acondicionados, placas solares ni ventanas.</strong> Esto hace que bacterias y hongos circulen por el aire que respiras, mientras que la suciedad acumulada reduce la eficiencia de tus paneles y la luminosidad de tu hogar.
            </p>
            <a href="#contacto" className="btn-primary">
              Solicitar servicio
            </a>
          </div>

          {/* Pasos del proceso */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1.15fr 1fr', alignItems: 'stretch',
                borderRadius: '0.9rem', overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(11, 95, 139, 0.12)',
                background: 'white',
                minHeight: '7.2rem',
              }}>

                <div style={{ background: 'var(--color-primary-hover)', color: 'white', padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.45rem', lineHeight: 1.2 }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.55, color: 'rgb(255, 255, 255)' }}>
                    {step.desc}
                  </p>
                </div>

                <div style={{ minHeight: '100%', background: '#eaf4f8' }}>
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    style={{ display: 'block', width: '100%', height: '100%', minHeight: '7.2rem', objectFit: 'cover' }}
                  />
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
