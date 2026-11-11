// Utilidades para la colección `blog`
import { getCollection, type CollectionEntry } from 'astro:content';

// URL de una entrada a partir de su id: es/2026/05/rotografo → 2026/05/rotografo
export const rutaEntrada = (entry: CollectionEntry<'blog'>) => entry.id.replace(/^es\//, '').replace(/\/index$/, '');

// Entradas publicadas en español, de la más reciente a la más antigua
export const entradasPublicadas = async () => {
  await comprobarSubcategorias();
  return (await getCollection('blog', (e) => e.id.startsWith('es/') && !e.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
};

// Una categoría con subcategorías (Proyectos) no se pone directamente: cada entrada lleva una, y solo
// una, de sus subcategorías (el montaje del proyecto). Si no se cumple, falla la publicación.
const comprobarSubcategorias = async () => {
  const categorias = await getCollection('categorias');
  const madres = new Set(categorias.map((c) => c.data.parent).filter(Boolean));
  const errores = (await getCollection('blog')).flatMap((e) => {
    const ids = e.data.categories.map((c) => c.id);
    return [
      ...ids.filter((id) => madres.has(id)).map((id) => `${e.id}: lleva «${id}»; pon solo una de sus subcategorías`),
      ...[...madres]
        .filter((m) => ids.filter((id) => categorias.find((c) => c.id === id)?.data.parent === m).length > 1)
        .map((m) => `${e.id}: lleva más de una subcategoría de «${m}»`),
    ];
  });
  if (errores.length) throw new Error(`Categorías mal puestas:\n${errores.join('\n')}`);
};

// Fecha larga: 30 de mayo de 2026
export const fechaLarga = (fecha: Date) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Entradas por página en los listados (/blog/, categorías, etiquetas y autores)
export const POR_PAGINA = 12;

// Tramo de URL de una etiqueta, como en WordPress: «IDE Arduino» → ide-arduino
export const slugEtiqueta = (etiqueta: string) =>
  etiqueta.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Rutas de los listados, sin base ni barras, como en WordPress
export const rutaCategoria = (id: string) => `category/${id}`;
export const rutaEtiqueta = (etiqueta: string) => `tag/${slugEtiqueta(etiqueta)}`;
export const rutaAutor = (id: string) => `author/${id}`;
// Archivo de un año: /2024/, como en WordPress
export const rutaAnio = (anio: number) => `${anio}`;

// Páginas de un listado: la primera en <base>/ y las siguientes en <base>/page/2/…, como en WordPress.
// Devuelve, para cada página, el tramo que sigue a la base (vacío en la primera) y sus entradas.
export function paginar(entradas: CollectionEntry<'blog'>[]) {
  const total = Math.max(1, Math.ceil(entradas.length / POR_PAGINA));
  return Array.from({ length: total }, (_, i) => ({
    tramo: i === 0 ? undefined : `page/${i + 1}`,
    pagina: i + 1,
    total,
    entradas: entradas.slice(i * POR_PAGINA, (i + 1) * POR_PAGINA),
  }));
}
