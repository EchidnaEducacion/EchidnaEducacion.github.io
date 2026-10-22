# Web de Echidna (Astro)

Proyecto de la web de Echidna, con las **9 plantillas** (páginas maestras) de la tabla de abajo y el árbol de páginas, los menús y el pie de [`estructura.md`](../estructura.md).

Es un proyecto **Astro**: un layout `Base`, las **maquetas** (una página por plantilla, publicadas en `/maquetas/`) y las primeras **páginas reales**, que salen de las colecciones de contenido (ver [Páginas reales](#páginas-reales)). Se publica automáticamente en **<https://echidna.es/>** con cada *push* a `main` que toque `web/`.

Para verlas en local se usa [Bun](https://bun.sh) (los scripts ejecutan Astro con el *runtime* de Bun, así que no depende de la versión de Node instalada):

```sh
cd web
bun install
bun run dev      # http://localhost:4321/
```

`bun run build` genera el sitio estático en `web/dist/`, con el índice del buscador (Pagefind) en `dist/pagefind/`, y `bun run preview` lo sirve.

- **Formulario de contacto en local**: necesita la clave de Web3Forms en `web/.env` (`PUBLIC_WEB3FORMS_KEY=…`; el fichero está en `.gitignore`). Sin ella, el formulario avisa de que no está configurado y no envía. Con ella, carga el hCaptcha de Web3Forms (`web3forms.com/client/script.js`), que hay que marcar antes de enviar. En la web publicada, la clave sale de la variable `PUBLIC_WEB3FORMS_KEY` del repositorio (ver `.github/workflows/deploy.yml`).
- **Buscador en local**: el índice solo se genera con el *build*. `bun run dev` usa el del último `bun run build` (lo sirve en `/pagefind/` desde `dist/pagefind/`), así que el contenido nuevo no aparece en el buscador hasta repetir el *build*; sin ningún *build* previo, el buscador dice que no está disponible.

- **Si Bun no está instalado**: `curl -fsSL https://bun.sh/install | bash` y abrir una terminal nueva.
- **Sin Bun, con npm**: `npm install --no-package-lock` y `npx astro dev` (o `npx astro build && npx pagefind --site dist` y `npx astro preview`). Sin *lockfile* de npm, porque el proyecto usa el de Bun.
- **Desde VS Code**: los comandos se ejecutan en la terminal integrada (*Terminal → Nueva terminal*, que se abre en la raíz del repositorio). La URL se abre con `Ctrl+clic` o, dentro del editor, con *Simple Browser: Show* (`Ctrl+Shift+P`). La página se recarga al guardar y el servidor se para con `Ctrl+C`.

| # | Plantilla | Archivo | Ejemplo real |
|---|---|---|---|
| 1 | Base (cabecera, menú, buscador, pie) | `src/layouts/Base.astro` | todas |
| 2 | Portada | `src/pages/index.astro` (plantilla real; maqueta borrada) | `/` |
| 3 | Índice de sección | `src/layouts/Indice.astro` (plantilla real; maqueta borrada) | `/ecosistema/` |
| 3 | Índice de sección (agrupado por títulos) | `src/pages/maquetas/alumnado.astro`, `src/pages/maquetas/docentes.astro` | `/alumnado/`, `/docentes/` |
| 4 | Ficha de hardware | `src/layouts/Ficha.astro` (plantilla real; maqueta borrada) | `/ecosistema/echidnablack2/`, `/ecosistema/echidnablack2/leds/` |
| 5 | Página genérica | `src/layouts/Pagina.astro` (plantilla real; maqueta borrada) | `/quienes-somos/` |
| 6 | Contacto | `src/pages/maquetas/contacto.astro` | `/contacta/` |
| 7 | Entrada de blog | `src/layouts/Entrada.astro` (plantilla real; maqueta borrada) | `/AAAA/MM/slug/` |
| 8 | Listado / taxonomía | `src/components/ListadoBlog.astro` (plantilla real; maqueta borrada) | `/blog/`, categorías, etiquetas, autores, años |
| 9 | Error 404 | `src/pages/404.astro` (plantilla real; no usa colección) | cualquier URL que no exista |
| + | Componentes de contenido (MDX) | `src/pages/maquetas/componentes.astro` | Aviso, Descarga, Vídeo, Galería, Tarjeta |

## Línea de diseño

- **Continuidad con la marca**: naranja `#e66a00` y titulares en *Exo 2* (como la web actual).
- **Lectura fácil**: texto en *Atkinson Hyperlegible* (diseñada para baja visión) a 17 px, contraste AA, botones y zonas táctiles de 44–48 px.
- **Orientación**: cada sección tiene color propio (`body[data-section]`: `ecosistema`, `alumnado`, `docentes`, `blog`, `nosotros`), migas de pan e índice lateral «En esta página».
- **Pensado para el aula**: los materiales se agrupan por entorno y enlazan con sus recursos docentes; las fichas tienen **versión imprimible**.
- **Responsive** desde 320 px, **modo oscuro** (automático o manual), selector **ES/EN** y vídeos/presentaciones que solo cargan el iframe al pulsar. Por debajo de 540 px, el selector de idioma y el de tema pasan de la cabecera al final del menú móvil, para que quepan el logo, la lupa y el menú.
- **Sin maquetación en el contenido**: las columnas las decide la plantilla; el Markdown solo aporta texto y componentes.

## Estructura

```
web/
├── astro.config.mjs         # salida en carpetas, tipografías, plugins del Markdown (tablas, vídeos), redirecciones e índice del buscador en dev
├── redirecciones.mjs        # URL de la web anterior → nuevas (la tabla de ../redirecciones.md)
├── scripts/                 # nueva-entrada.ts (entrada nueva del blog) e imagen-redes.ts (genera public/imagen-redes.png)
├── src/
│   ├── assets/logo/         # SVG original del logo (Illustrator, con todas sus variantes)
│   ├── assets/autores/      # fotos de los autores (cuadradas y sin EXIF)
│   ├── content.config.ts    # colecciones y su esquema (ver modelo-contenido.md)
│   ├── content/paginas/es/  # páginas en Markdown: la ruta del fichero es la URL
│   ├── content/autores.yaml # autores del blog y equipo de Quiénes somos
│   ├── content/publicaciones.yaml # publicaciones sobre Echidna (página 5.2)
│   ├── content/categorias.yaml # categorías del blog
│   ├── content/recursos.yaml # materiales de alumnado (enlaces externos); miniaturas en content/recursos/
│   ├── content/blog/es/     # entradas del blog: AAAA/MM/slug/index.md → /AAAA/MM/slug/
│   ├── content/hardware/es/ # fichas de hardware: carpeta con index.md e imágenes, URL bajo /ecosistema/
│   ├── layouts/
│   │   ├── Base.astro       # <head>, iconos, cabecera, pie y scripts
│   │   ├── Pagina.astro     # plantilla «Página genérica»
│   │   ├── Indice.astro     # plantilla «Índice de sección»: intro + tarjetas de las hijas
│   │   ├── Ficha.astro      # plantilla «Ficha de hardware»
│   │   └── Entrada.astro    # plantilla «Entrada de blog»
│   ├── components/          # Cabecera (menú activo según `section`), Pie, Iconos (sprite SVG); ListadoBlog y BlogLateral, del blog
│   ├── lib/                 # url(): rutas con `base`; paginas.ts y hardware.ts: URL de cada página o ficha; blog.ts: rutas y paginación del blog; rss.ts: el RSS
│   └── pages/
│       ├── [...slug].astro  # genera las páginas de la colección `paginas`
│       ├── ecosistema/[...slug].astro # genera las fichas de la colección `hardware`
│       ├── index.astro      # portada: textos fijos; placa, materiales destacados y últimas entradas, de sus colecciones
│       ├── 404.astro
│       ├── [anio]/[mes]/[entrada].astro # entradas del blog en /AAAA/MM/slug/
│       ├── blog/, category/, tag/, author/, [anio]/ # listados del blog, paginados en …/page/2/
│       ├── rss.xml.ts       # RSS del blog en /rss.xml; feed/index.html.ts, la misma copia en /feed/
│       └── maquetas/        # index.astro: «Propuesta de plantillas»; el resto, maquetas con contenido escrito a mano
└── public/
    ├── favicon.svg          # erizo del logo; apple-touch-icon.png, su versión en PNG
    ├── imagen-redes.png     # imagen al compartir en redes (og:image), 1200 × 630; se regenera con `bun run imagen-redes`
    └── assets/
        ├── css/echidna.css  # tokens, componentes y estilos de cada plantilla
        └── js/echidna.js    # menú, tema, buscador, filtros, embebidos
```

Cada página indica sus metadatos como *props* del layout:

```astro
<Base title="Ficha de hardware" description="…" section="ecosistema">
  <main id="contenido">…</main>
</Base>
```

`section` fija el color de acento y la entrada activa del menú; `bare` usa el título sin añadir « · Echidna Educación». Las llaves `{ }` literales (p. ej. en bloques de código) deben ir en un elemento con `is:raw`.

Los enlaces internos se escriben con el helper `url()` de `src/lib/url.ts`, que antepone `base` (hoy `/`, porque la web está en la raíz): `href={url("ecosistema/")}`. Se mantiene por si la web volviera a servirse en una subcarpeta. Las URL son de carpeta (`build.format: 'directory'`): `/politica-privacidad/` se genera como `politica-privacidad/index.html`.

## Páginas reales

El contenido está en `src/content/`, validado por el esquema de `src/content.config.ts` (si falta un campo o no cumple el formato, el *build* falla e indica el fichero). Por ahora existen la colección `paginas`, con las plantillas «Página genérica», «Contacto» e «Índice de sección»; la colección `hardware`, con la «Ficha de hardware»; y la lista `autores`.

- **La ruta del fichero es la URL**, dentro de la carpeta del idioma: `src/content/paginas/es/politica-privacidad.md` → `/politica-privacidad/`; `es/quienes-somos/licencias.md` → `/quienes-somos/licencias/`. Las fichas de hardware cuelgan de `/ecosistema/` y cada una es una carpeta con sus imágenes: `src/content/hardware/es/echidnablack2/leds/index.md` → `/ecosistema/echidnablack2/leds/`. Sus descargas (PDF…) van en `public/` con la misma ruta.
- **Enlaces en el Markdown**: los internos se escriben desde la raíz (`[contacto](/contacta/)`).
- **Tablas en el Markdown**: un plugin de Sätteri (el procesador de Markdown de Astro 7), definido en `astro.config.mjs`, las mete en un `div.table-wrap`, como en las plantillas, para que tengan marco y se desplacen dentro de él en móvil en vez de ensanchar la página.
- **Código de Arduino**: los programas se escriben en un bloque ```` ```arduino ````, que se ve con los colores y los números de línea de Arduino IDE (tema `temaArduino` de `astro.config.mjs` y estilos de `pre[data-language="arduino"]` en `echidna.css`). Los demás lenguajes usan el tema oscuro.
- **Bloques de EchidnaML**: las capturas de bloques se llaman `bloque-*.png` (p. ej. `bloque-led-verde.png`) y la web las muestra todas a la misma altura, aunque se hayan capturado a escalas distintas.
- **Lupas sobre la placa**: las imágenes que amplían un componente en la placa se llaman `lupa-*.png` (p. ej. `lupa-leds.png`) y se muestran centradas, a un tercio de la columna (260 px en móvil).
- **Vídeos de YouTube y presentaciones de Google**: un párrafo que solo contiene un enlace a YouTube o a una presentación de Google (publicada, `/d/e/…/pub`, o compartida, `/d/…/edit`) se convierte (con un plugin de `astro.config.mjs`) en un reproductor que no carga nada de fuera hasta que se pulsa; el texto del enlace es el pie («Ver la presentación (Google Slides)» se queda en «Presentación»).
- **Galerías**: un párrafo que solo contiene imágenes (dos o más, en líneas seguidas sin línea en blanco entre ellas) se convierte (con otro plugin de `astro.config.mjs`) en una rejilla; cada imagen conserva su proporción. El título de la imagen, si lo tiene, es su pie: `![Texto alternativo](./foto.jpg "Pie de la foto")`. Si se quieren seguidas, a todo el ancho, cada una va en su propio párrafo.
- **Al cambiar un plugin del Markdown** (`astro.config.mjs`), Astro no vuelve a convertir las páginas que tiene en caché: hay que borrar `.astro/data-store.json` y `node_modules/.astro` y arrancar de nuevo. Si un plugin falla, el *build* termina bien pero deja la página vacía, con un `[ERROR] [glob-loader]` en la salida.
- **Índice lateral** «En esta página»: solo sale si la página lleva `toc: true` en el *front matter* (para páginas largas); se genera con sus `h2`. En los índices de sección, encima lleva también los enlaces a las páginas hijas.
- **Del menú y del pie** se enlaza la maqueta mientras no exista la página real; al crearla, se cambia el enlace por su URL definitiva.

Páginas hechas:

- **Sobre el proyecto y pie**: Política de privacidad, Contacta, Quiénes somos (`quienes-somos.md`, con las fichas del equipo que salen de `src/content/autores.yaml` gracias al campo `team`) Licencias (`quienes-somos/licencias.md`) y Publicaciones (`quienes-somos/publicaciones.md`, con `publications: 3`: las tarjetas salen de `src/content/publicaciones.yaml`, agrupadas por año).
- **Materiales alumnado** (`alumnado.md`, con `resources: alumnado`): las tarjetas salen de `src/content/recursos.yaml` (miniaturas en `src/content/recursos/`), agrupadas por entorno y grupo con `components/Recursos.astro`.
- **Recursos docentes** (`docentes.md`, con `resources: docentes`): las mismas tarjetas de `recursos.yaml`, con un título por material; los recursos sin `url` salen «Próximamente».
- **Ecosistema**: `ecosistema.md` y `ecosistema/echidnaml.md` son índices de sección, con una tarjeta por cada página hija que existe. Las hijas de EchidnaML están en `ecosistema/echidnaml/` (cada una con su carpeta de imágenes): Descarga (la versión va escrita en el texto y los enlaces, y se actualiza a mano con cada versión publicada en `echidnaml-releases`), Conectar EchidnaML y EchidnaBlack, Empezar con EchidnaBlocks, Empezar con LearningML e Instalar StandardFirmata (`listed: false`).
- **EchidnaBlack2**: Características técnicas (`ecosistema/echidnablack2/caracteristicas-tecnicas.md`, que cuelga de una ficha de hardware: las migas buscan en las dos colecciones). Complementos (`ecosistema/echidnablack2/complementos.md`) es un índice de sección cuyas tarjetas son las fichas de `hardware/es/echidnablack2/complementos/` (con `kind: complemento`); las migas de esas fichas enlazan a él.
- **Blog**: 61 entradas (las importadas de WordPress y las nuevas), en `src/content/blog/es/AAAA/MM/slug/` (cada una con sus imágenes), con la plantilla `layouts/Entrada.astro` y la ruta `pages/[anio]/[mes]/[entrada].astro`. Los listados usan `components/ListadoBlog.astro`: tarjetas en dos columnas (miniatura 2:1, título, autor, fecha, categorías y extracto), 12 por página (`POR_PAGINA` en `lib/blog.ts`), con las páginas siguientes en `…/page/2/` como en WordPress. Hay listado general (`/blog/`), por categoría (`/category/…/`, con subcategorías; la madre incluye las entradas de sus hijas), por etiqueta (`/tag/…/`), por autor (`/author/…/`, con su ficha) y por año (`/AAAA/`). Entradas y listados comparten el lateral `components/BlogLateral.astro`: categorías con su número de entradas (las de la entrada, destacadas), las 5 últimas entradas, las etiquetas y el archivo por años. El RSS está en `/rss.xml` y `/feed/`. El formato lo aprobó el equipo (ver «Decisiones tomadas» del README); las entradas nuevas se escriben como explica [`escribir-blog.md`](../escribir-blog.md).
- **Fichas de hardware**: EchidnaBlack2, Pulsadores, Joystick, Sensor de luz LDR, Acelerómetro, Micrófono, Sensor de temperatura, LED RGB, LEDs ROG, Audio y Conexiones MkMk. Con ellas están todos los componentes de la placa. Y los cuatro complementos: Servomotor de posición, Servomotor de rotación continua, Sensor de distancia de infrarrojos y Sensor de humedad del suelo.

## Cómo migrar una página

Las páginas se migran **de una en una**: se redacta, se revisa en local y se sube cuando está dada por buena.

1. **Leer el material**: la página de la web actual (WordPress) y el apartado del [manual](https://github.com/EchidnaEducacion/manual) que le corresponda. El manual suele tener texto e imágenes más actuales; se adapta, no se copia tal cual. Si el manual y la web actual no coinciden (un pin, un valor), **manda el manual**, que es más fiable, y se avisa de la diferencia. Si el propio manual se contradice, se comprueba con la serigrafía de la placa o con el cálculo, y su corrección se abre como *issue* en el [repo del manual](https://github.com/EchidnaEducacion/manual/issues) (con la etiqueta `documentation`) y se enlaza desde «Correcciones en el manual» en «Próximos pasos» del README.
2. **Preparar las imágenes** en la carpeta de la página, sin metadatos (`convert -strip`) y con nombres descriptivos: `lupa-*`, `bloque-*`, `esquema-*`, `programa-*` y `pieza-*` (dibujos de piezas sueltas, que salen a la mitad de tamaño que las lupas). Los diagramas transparentes con texto oscuro se pasan a fondo blanco para que se vean en modo oscuro. Las descargas (hojas de características…) van en `public/` con la ruta de la página. La **imagen principal** de una ficha (`image`) también es la miniatura de su tarjeta, que la muestra a una altura fija: se le quita el margen transparente (`convert -trim +repage`) para que los dibujos se vean de un tamaño parecido, y a los muy alargados se les deja algo de margen arriba y abajo (`-gravity center -extent`) para que no parezcan más grandes que los demás.
3. **Redactar el Markdown** con su *front matter* (`modelo-contenido.md` explica cada campo) y `toc: true` si la página es larga.
4. **Comprobar**: `npx astro build` sin errores; la página en el **servidor de desarrollo** (`npx astro dev`), que sirve las imágenes con otras direcciones que el *build*; móvil y modo oscuro; y que nada se salga de la pantalla de 320 a 1280 px.
5. **Documentar** en el mismo commit: la lista de páginas hechas de arriba y, si se cierra una tarea, «Próximos pasos» del README.

**Fichas de componentes**: se hacen en el orden del manual (LED, pulsadores, zumbador, sensor de luz, joystick, acelerómetro, temperatura, LED RGB, micrófono, entradas MkMk). Cada una lleva:

- la **imagen principal** del componente y el rótulo con su tipo (`kind`, `io`);
- los apartados **Descripción** (con la lupa al final), **Funcionamiento**, **Cómo se programa** (el bloque de EchidnaML) y **Ejemplos** (los del manual, con la imagen del programa y su lógica explicada);
- en el lateral, la ficha rápida con los **pines** y datos de las características técnicas, el **esquema** (`schematic`) y la **hoja de características**;
- `order` según su número en `estructura.md` (1.2.x), que ordena las tarjetas de la placa y el anterior/siguiente.

No llevan ejemplos de Arduino IDE.

En las maquetas, las imágenes son marcadores (`.ph`).

## Cómo escribir una entrada del blog

El procedimiento está en [`escribir-blog.md`](../escribir-blog.md), en la raíz del repositorio: rama propia, `bun run nueva-entrada`, borrador en el servidor de desarrollo y publicación por *pull request*, que el workflow «Comprobar la web» (`.github/workflows/comprobar.yml`) construye antes de fusionar.

## Buscador

El índice lo genera Pagefind al final del *build* (`pagefind --site dist`) y lo consulta el diálogo de la cabecera (`public/assets/js/echidna.js`). Solo se indexan las páginas cuyo `<main>` lleva `data-pagefind-body`, es decir, las de los *layouts* `Pagina`, `Indice`, `Contacto`, `Ficha` y `Entrada`; quedan fuera la portada, la 404, los listados del blog y las maquetas. Los resultados se agrupan por sección (`<meta data-pagefind-meta="seccion[content]">` de `Base.astro`) y muestran como contexto las migas de pan (`data-contexto`) o, en el blog, la fecha. Las migas no entran en el texto indexado (`data-pagefind-ignore`). En el servidor de desarrollo, la integración `indiceDelBuscadorEnDev` de `astro.config.mjs` sirve el índice del último *build*.

## SEO

Todo sale del *build*; no hay que hacer nada a mano al publicar páginas o entradas nuevas.

- **Dominio**: `site` es `https://echidna.es` en `astro.config.mjs`. De ahí salen las direcciones absolutas: `canonical`, `og:url`, el RSS, el sitemap y los datos estructurados.
- **Etiquetas de cada página** (`src/layouts/Base.astro`): `<title>`, `description`, `canonical` y Open Graph. La imagen al compartir es `public/imagen-redes.png` (1200 × 630, la genera `bun run imagen-redes`), salvo que la página pase la suya con la propiedad `image`.
- **Entradas del blog** (`src/layouts/Entrada.astro`): `og:type` `article`, con fecha de publicación (y de actualización si tiene `updated`), autor, primera categoría como sección y etiquetas. La imagen al compartir es su portada, a 1200 px de ancho como máximo (JPG, o PNG si el original lo es); sin portada, la común.
- **Datos estructurados (JSON-LD)**: la propiedad `jsonLd` de `Base.astro` los pinta en un `<script type="application/ld+json">`. La portada lleva `Organization` y cada entrada `BlogPosting`, con la asociación como editora; los datos de la asociación están en `src/lib/organizacion.ts`. Si cambian las redes del pie (`Pie.astro`), hay que cambiarlas también allí. El logo es `public/apple-touch-icon.png` (180 × 180), porque Google no admite SVG.
- **Sitemap** (`@astrojs/sitemap`, en `/sitemap-index.xml`): todas las páginas menos las maquetas, la 404 y las URL antiguas de `redirecciones.mjs`, que solo redirigen (filtro `enElSitemap` de `astro.config.mjs`).
- **`robots.txt`** (`src/pages/robots.txt.ts`): permite todo menos `/maquetas/` y da la dirección del sitemap. Las maquetas llevan además `noindex` (propiedad `noindex` de `Base.astro`).
- **Descripciones**: cada página y entrada lleva la suya en el *frontmatter* (`description`), de unos 50 a 160 caracteres. Los listados del blog (etiquetas, categorías, autores y años) usan una automática.
- **Buscadores**: `echidna.es` se da de alta en Google Search Console y Bing Webmaster Tools, donde se envía el sitemap y se vigilan los errores de rastreo y las redirecciones.
- **Comprobar los datos estructurados**: con la [prueba de resultados enriquecidos de Google](https://search.google.com/test/rich-results) o el [validador de schema.org](https://validator.schema.org/), pasando la portada y una entrada. Desde la terminal, el de schema.org responde a `curl -X POST https://validator.schema.org/validate --data-urlencode "url=https://echidna.es/"`.
