// Antepone `base` a una ruta interna del sitio. Hoy la web está en la raíz (`base` es /),
// pero el helper se mantiene por si vuelve a servirse en una subcarpeta.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const url = (path = '') => base + path.replace(/^\//, '');

// Los enlaces externos se abren en una pestaña nueva; las rutas internas (/…), en la misma
export const pestana = (href: string) => (href.startsWith('/') ? {} : { target: '_blank', rel: 'noopener' });
