// Datos estructurados (JSON-LD) de la asociación: los usa la portada (Organization) y cada entrada
// del blog como editora (publisher). Las redes son las del pie (components/Pie.astro).
import { url } from './url';

export function organizacion(site: URL) {
  return {
    '@type': 'Organization',
    '@id': new URL(url('#organizacion'), site).href,
    name: 'Echidna Educación',
    alternateName: 'Echidna',
    url: new URL(url(), site).href,
    // Google pide el logo en PNG o JPG (no SVG) y de al menos 112 px: el icono de 180 × 180
    logo: new URL(url('apple-touch-icon.png'), site).href,
    sameAs: [
      'https://github.com/EchidnaEducacion',
      'https://www.youtube.com/channel/UCYmPpIWazAOc7dLs4CZEqew',
      'https://x.com/EchidnaSTEAM',
    ],
  };
}
