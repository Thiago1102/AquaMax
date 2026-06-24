import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CONTACT } from '../config/contact'

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
          Última actualización: junio de 2026
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
              text: `Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en ${CONTACT.email}.`,
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
