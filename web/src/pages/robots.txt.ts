// robots.txt: todo se puede indexar menos las maquetas, y la dirección del sitemap
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nDisallow: /maquetas/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
