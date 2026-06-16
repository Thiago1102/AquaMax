import { Zap, Heart, Wrench, HandshakeIcon } from 'lucide-react'

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

      <style>{`
        @media (min-width: 640px)  { .grid-2 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  )
}
