import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CONTACT } from '../config/contact'

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
          Última actualización: junio de 2026
        </p>

        <div style={{ color: 'var(--color-foreground)', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Responsable del tratamiento',
              text: `Aquamax, con domicilio en el Corredor del Henares (Madrid) y dirección de correo electrónico ${CONTACT.email}, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web.`,
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
              text: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviándonos un email a ${CONTACT.email}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
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
