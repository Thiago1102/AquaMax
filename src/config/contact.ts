export const CONTACT = {
  phoneDisplay: '624 040 047',
  waNumber: '34624040047',
  email: 'miguelgilmorales@gmail.com',
} as const

export const CONTACT_DERIVED = {
  phoneDigits: CONTACT.phoneDisplay.replace(/\s/g, ''),
  waBaseUrl: `https://wa.me/${CONTACT.waNumber}`,
} as const

export const WA_MESSAGES = {
  generalInfo: encodeURIComponent('Hola, me gustaría solicitar información sobre limpieza de aire acondicionado.'),
  quoteRequest: encodeURIComponent('Hola, me gustaría solicitar un presupuesto para limpieza de aire acondicionado.'),
} as const