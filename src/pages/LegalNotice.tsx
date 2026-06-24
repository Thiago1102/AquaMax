import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CONTACT } from '../config/contact'

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
          Última actualización: junio de 2026
        </p>

        <div style={{ color: 'var(--color-foreground)', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Titular del sitio web',
              text: `Aquamax. Corredor del Henares, Comunidad de Madrid. Email de contacto: ${CONTACT.email}.`,
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
