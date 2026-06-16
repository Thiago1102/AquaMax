# Aquamax – Web corporativa

Landing page profesional para **Aquamax**, servicio de limpieza y desinfección de aires acondicionados en el Corredor del Henares.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (con tokens OKLCH personalizados)
- **React Router v7** (rutas para páginas legales)
- **Lucide React** (iconos)

---

## 🚀 Puesta en marcha

### 1. Generar los archivos fuente

```bash
node setup.mjs
```

Esto crea todas las carpetas y archivos del proyecto (`src/`, `public/`, etc.).

### 2. Instalar dependencias

```bash
npm install
```

### 3. Arrancar el servidor de desarrollo

```bash
npm run dev
```

La web estará disponible en `http://localhost:5173`

### 4. Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

---

## ✏️ Personalización antes de publicar

Busca `TODO: Reemplaza` en los archivos fuente para actualizar los datos reales:

| Campo | Archivo(s) | Valor por defecto |
|---|---|---|
| Número de WhatsApp | `Header.tsx`, `Hero.tsx`, `CTA.tsx`, `Contact.tsx`, `Footer.tsx` | `34600000000` |
| Teléfono visible | `Contact.tsx`, `Footer.tsx` | `600 000 000` |
| Email | `Contact.tsx`, `Footer.tsx`, páginas legales | `info@aquamax.es` |

### Imágenes reales
Busca los placeholders marcados con fondo punteado en la web. Para reemplazarlos:
1. Añade las imágenes en `public/images/`
2. Sustituye los `<div>` placeholder por etiquetas `<img>` o `<picture>`

### Dominio en SEO
En `index.html` actualiza:
- `<link rel="canonical" href="https://www.aquamax.es/" />`
- `property="og:url"`
- El JSON-LD schema al final del `<head>`

---

## 📁 Estructura del proyecto

```
aquamax/
├── index.html              ← SEO: title, meta, schema.org
├── setup.mjs               ← Script de generación (ejecutar 1 vez)
├── src/
│   ├── main.tsx
│   ├── App.tsx             ← Rutas principales
│   ├── index.css           ← Tailwind v4 + tokens de diseño
│   ├── components/
│   │   ├── Header.tsx      ← Navegación sticky + menú móvil
│   │   ├── Hero.tsx        ← Sección principal con gradiente
│   │   ├── Services.tsx    ← Qué hace Aquamax
│   │   ├── Benefits.tsx    ← 4 beneficios en tarjetas
│   │   ├── ServiceArea.tsx ← Localidades del Corredor del Henares
│   │   ├── CTA.tsx         ← Llamada a la acción
│   │   ├── Contact.tsx     ← Formulario → WhatsApp + datos de contacto
│   │   ├── Footer.tsx      ← Pie de página con enlaces legales
│   │   └── CookieBanner.tsx← Banner de cookies (localStorage)
│   └── pages/
│       ├── Home.tsx
│       ├── PrivacyPolicy.tsx
│       ├── LegalNotice.tsx
│       └── CookiePolicy.tsx
└── public/
    └── robots.txt
```

---

## 🎨 Sistema de diseño

### Colores (OKLCH)
| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `oklch(0.40 0.13 225)` | Botones, links, acentos |
| `--color-accent` | `oklch(0.52 0.15 195)` | Teal, frescura, badges |
| `--color-foreground` | `oklch(0.18 0.025 220)` | Texto principal |
| `--color-muted-foreground` | `oklch(0.52 0.02 220)` | Texto secundario |

### Tipografía
- **Headings**: Outfit (600–800) — moderna, cercana
- **Body**: Plus Jakarta Sans (400–600) — legible, limpia

### Clases de botón custom
- `btn-primary` — Azul sólido, para CTA principales
- `btn-outline` — Contorno azul, para CTAs secundarias
- `btn-white` — Blanco sobre fondos oscuros (hero, CTA section)
- `btn-whatsapp` — Verde WhatsApp

---

## 📞 Flujo de contacto

El formulario de contacto **no requiere backend**. Al enviar, construye un mensaje pre-redactado y abre WhatsApp directamente. Esto es:
- Inmediato para el cliente (respuesta en WhatsApp)
- Sin necesidad de servidor ni SMTP
- Adaptado al flujo real de un negocio local

---

*Proyecto base para Aquamax · Corredor del Henares · 2025*
