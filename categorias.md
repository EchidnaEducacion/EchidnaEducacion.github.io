# Categorías del blog

Propuesta para revisar las categorías del blog: qué hay, qué criterio seguir y qué hacer con cada una. **Está pendiente de que la revise el equipo** en el issue [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35); hasta entonces no se aplica nada en la web. Las etiquetas ya se revisaron en octubre de 2026 ([«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog)); aquí se hace lo mismo con las categorías. Cuando se apruebe y se aplique, los criterios pasarán a [`modelo-contenido.md`](modelo-contenido.md#listas-de-datos-autores-y-categorías) y la decisión, al README.

## Índice

1. [Objetivo](#objetivo)
2. [Inventario](#inventario)
3. [Criterio propuesto](#criterio-propuesto)
4. [Análisis por categoría](#análisis-por-categoría)
   - [Didáctica](#didáctica)
   - [Programación](#programación)
   - [REA](#rea)
   - [Las demás](#las-demás)
5. [Propuesta](#propuesta)
6. [Cómo se aplicarán](#cómo-se-aplicarán)
7. [Pendiente](#pendiente)
8. [Anexo: categorías de cada entrada](#anexo-categorías-de-cada-entrada)

---

## Objetivo

Las 11 categorías actuales (`web/src/content/categorias.yaml`) vienen de WordPress con dos cambios: se quitó Recursos (sus subcategorías pasaron a primer nivel) y se añadió Inteligencia Artificial. No hay criterios escritos para asignarlas, y tres están en duda:

- **Didáctica**: era un apartado de la web antigua (`/didactica/`), que ya no existe, y no se sabe bien qué aporta.
- **Programación**: parece que entra casi todo.
- **REA**: quizá debería ser una etiqueta.

El resultado debe ser una lista corta de categorías con un criterio claro, que salga bien en el lateral del blog y que quien escriba una entrada sepa aplicar sin dudar.

## Inventario

Datos de octubre de 2026: 63 entradas publicadas y 1 en borrador (Tendedero automático, que no se cuenta). Una entrada puede tener varias categorías.

| Categoría | Entradas | Años | Observación |
|---|---|---|---|
| Proyectos | 29 | 2017–2026 | La más usada y la más clara: montajes con la placa explicados paso a paso |
| Didáctica | 22 | 2020–2026 | 19 son de 2025–2026: casi toda entrada reciente la lleva, junto a Proyectos |
| Noticias | 11 | 2020–2026 | Novedades del proyecto (placas, entornos, web, canal de YouTube…) |
| Bloques de construcción | 9 | 2020–2026 | Proyectos con piezas de construcción (tipo LEGO); todas de 2025–2026 salvo una |
| Programación | 9 | 2022–2026 | Mezcla proyectos, el manual, un taller y la llamada a *beta testers* |
| Talleres | 7 | 2019–2024 | Eventos en los que participa Echidna (OSHWDem, esLibre, Cultura Maker…) |
| Inteligencia Artificial | 7 | 2020–2026 | Con criterio propio: solo entradas centradas en la IA |
| Publicaciones | 6 | 2017–2020 | Artículos y pódcast de otros medios sobre Echidna |
| Hardware | 3 | 2020–2026 | Echidna Black, pantalla OLED, manual de EchidnaBlack2 |
| Impresión 3D | 2 | 2019–2020 | Concurso PrintBot y Construccionismo y STEAM I |
| REA | 1 | 2026 | Solo «Andalucía, del alba al anochecer» |

Lo que se ve:

- **El cajón de sastre es Didáctica, no Programación.** Programación está en 9 entradas; Didáctica, en 22, y en casi todas acompaña a Proyectos sin distinguir nada.
- **Hay categorías que dicen el tipo de entrada** (Proyectos, Noticias, Talleres, Publicaciones) **y otras que dicen el tema** (Programación, Hardware, Impresión 3D, Bloques de construcción, Inteligencia Artificial). Las de tema se solapan con las etiquetas (placas, entornos, componentes).
- **REA no se aplica con coherencia**: «La Tierra se mueve» y «Nace la sección de REAs» hablan de REA y no la llevan.
- **Las entradas recientes llevan tres o cuatro categorías** (p. ej. Barrera automática: Bloques de construcción, Didáctica, Programación y Proyectos), lo que diluye el lateral.

## Criterio propuesto

- **La categoría dice qué tipo de entrada es**: un proyecto, una noticia, un taller, una publicación de otro medio… Es lo que busca quien entra al blog desde el lateral.
- **La etiqueta dice de qué trata**: placa, entorno de programación, componentes y temas. Para eso ya está el vocabulario cerrado.
- **Pocas categorías y, normalmente, una por entrada** (dos como mucho). Una categoría con menos de unas cinco entradas no aguanta sola en el lateral.
- **Excepción ya decidida**: Inteligencia Artificial es categoría de tema porque es el eje del proyecto (ver [Decisiones tomadas](README.md#decisiones-tomadas)). Se propone la misma excepción para Bloques de construcción.

## Análisis por categoría

### Didáctica

**Qué tiene**: 22 entradas. Dos de 2020–2021 (Programar Echidna con el IDE de Arduino; LED con App Inventor), una de 2024 (¡Volvemos a esLibre!) y el resto de 2025–2026: casi todos los proyectos recientes, los anuncios de REA y el manual.

**Problema**: no distingue nada. Si casi todo lo reciente es «didáctico», la categoría no ayuda a encontrar nada, y el nombre recuerda a un apartado de la web que ya no existe (`/didactica/` redirige a `/alumnado/`, ver [`redirecciones.md`](redirecciones.md)).

**Opciones**:

1. **Eliminarla** y redirigir `/category/didactica/` a `/category/proyectos/`. Cada entrada se queda con su tipo (Proyectos, Noticias, Talleres).
2. **Redefinirla** como «Propuestas para el aula» o similar, solo para entradas que son material de aula (REA, situaciones de aprendizaje, guías), con criterio estricto.

**Recomendación**: eliminarla (opción 1). Lo que es material de aula ya está en Materiales alumnado y Recursos docentes; en el blog basta con el tipo de entrada.

### Programación

**Qué tiene**: 9 entradas. Seis proyectos recientes con EchidnaML (alimento de perros y gatos, barrera de garaje, gallo, barrera automática, estatuas musicales, helicóptero), el manual de EchidnaBlack2 y EchidnaML, la llamada a *beta testers* de EchidnaML y un taller en gallego de 2022.

**Problema**: casi todo en Echidna es programar una placa, así que la categoría podría llevarla cualquier entrada. El entorno ya lo dicen las etiquetas (EchidnaML, EchidnaScratch, Snap4Arduino, IDE Arduino).

**Opciones**:

1. **Eliminarla** y redirigir `/category/programacion/` a `/category/proyectos/`. Cada entrada se queda con su tipo y sus etiquetas de entorno.
2. **Mantenerla** solo para entradas sobre el lenguaje o el entorno en sí (tutoriales, manuales), no para proyectos.

**Recomendación**: eliminarla (opción 1).

### REA

**Qué tiene**: 1 entrada (Andalucía, del alba al anochecer). Hay otras dos que hablan de REA sin llevarla: «Nace la sección de REAs en Echidna» y «¡La Tierra se mueve!, un nuevo REA en la sección».

**Problema**: con una entrada no aguanta como categoría. Además, REA (recurso educativo abierto) no es un tipo de entrada del blog sino una característica de lo que se anuncia: las entradas son noticias de que hay un REA nuevo.

**Opciones**:

1. **Pasarla a etiqueta** (grupo Temas), en las tres entradas, que pasan a la categoría Noticias. Cumple la regla de al menos dos entradas por etiqueta.
2. **Fusionarla con Didáctica**, si Didáctica se redefine como «Propuestas para el aula».

**Recomendación**: etiqueta (opción 1), salvo que se mantenga Didáctica redefinida. La «sección» de esas entradas son las situaciones de aprendizaje (`/situaciones-aprendizaje/…`), enlazadas desde Materiales alumnado.

### Las demás

| Categoría | Propuesta | Por qué |
|---|---|---|
| Proyectos | Mantener | Tipo de entrada claro y el más numeroso |
| Noticias | Mantener | Tipo de entrada claro |
| Talleres | Mantener | Tipo de entrada claro; recibe las redirecciones de la antigua `/didactica/talleres/` |
| Publicaciones | Mantener | Tipo de entrada claro; enlaza con la página Publicaciones |
| Inteligencia Artificial | Mantener | Decidido en octubre de 2026 |
| Bloques de construcción | Mantener como excepción | Es de tema, no de tipo, pero tiene 9 entradas y es una línea de trabajo propia; podría ser etiqueta o excepción como IA |
| Hardware | Eliminar | 3 entradas; lo que tratan ya lo dicen las etiquetas de placa. Las de anuncio de placa encajan en Noticias |
| Impresión 3D | Pasar a etiqueta | 2 entradas antiguas; como etiqueta cumple la regla de al menos dos entradas |

## Propuesta

Preparada por Jose Pujol en octubre de 2026, categoría a categoría. Pendiente de revisión del equipo en [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35).

Con ella, el blog queda con **6 categorías** (Proyectos, Noticias, Talleres, Publicaciones, Inteligencia Artificial y Bloques de construcción) y **23 etiquetas** (las 21 actuales más REA e Impresión 3D).

| Categoría | Propuesta | Destino de sus entradas | Redirección de `/category/<id>/` |
|---|---|---|---|
| Didáctica | Eliminarla: casi todo lo reciente la lleva y no distingue nada; el material de aula ya está en Materiales alumnado y Recursos docentes | Se quedan con sus otras categorías. Cuatro solo la tenían a ella (o con REA): Programar Echidna con el IDE de Arduino pasa a Noticias; Encendiendo un LED con App Inventor, a Proyectos (las dos mantienen la etiqueta IDE Arduino); ¡La Tierra se mueve! y Andalucía, del alba al anochecer, a Noticias (ver REA) | `/category/proyectos/` |
| Programación | Eliminarla: casi todo en Echidna es programar una placa, y el entorno ya lo dicen las etiquetas | Se quedan con sus otras categorías. Dos solo la tenían a ella: Posta en marcha e proxectos con EchidnaBlack pasa a Talleres y EchidnaML: calling for B tester, a Noticias | `/category/proyectos/` |
| REA | Pasarla a etiqueta, en el grupo Temas: no es un tipo de entrada sino lo que se anuncia, y con una entrada no aguanta como categoría | Las tres entradas de REA (Nace la sección de REAs, ¡La Tierra se mueve! y Andalucía, del alba al anochecer) llevan la etiqueta REA y la categoría Noticias | `/tag/rea/` |
| Bloques de construcción | Mantenerla como excepción, igual que Inteligencia Artificial: es de tema, pero es una línea de trabajo propia del proyecto y así se ve en el lateral. Solo para proyectos montados con piezas de construcción | Sin cambios | — |
| Hardware | Eliminarla: solo 3 entradas, y las placas ya tienen etiquetas | Echidna Black: Echidna se hace mayor… pasa a Noticias; Pantalla OLED en Echidna Shield y Black, a Proyectos; el Manual se queda en Noticias | `/ecosistema/` |
| Impresión 3D | Pasarla a etiqueta, en el grupo Temas: solo 2 entradas | Concurso PrintBot Echidna pasa a Noticias; Construccionismo y STEAM I se queda en Bloques de construcción. Las dos llevan la etiqueta Impresión 3D | `/tag/impresion-3d/` |

## Cómo se aplicarán

Si el equipo la aprueba, en una rama propia y por *pull request*, porque cambian URL `/category/…/`:

- `web/src/content/categorias.yaml`: quitar o renombrar categorías.
- Front matter de las entradas afectadas (lista en el [anexo](#anexo-categorías-de-cada-entrada)).
- Si alguna pasa a etiqueta: `web/src/lib/etiquetas.ts` y la tabla de [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog).
- Redirecciones de las categorías que desaparecen, en [`redirecciones.md`](redirecciones.md#blog-y-rss) y donde estén implementadas en `web/`.
- Criterios en [`modelo-contenido.md`](modelo-contenido.md#listas-de-datos-autores-y-categorías), lista de [`escribir-blog.md`](escribir-blog.md#categorías-y-etiquetas) y decisión en «Decisiones tomadas» del README.
- Comprobar con el *build* (falla si una entrada usa una categoría que no existe) y en el servidor de desarrollo: lateral del blog, `/category/<id>/` y redirecciones.

## Pendiente

- [x] Proponer qué hacer con Didáctica: eliminarla.
- [x] Dar categoría a las cuatro entradas que solo tenían Didáctica.
- [x] Proponer qué hacer con Programación: eliminarla.
- [x] Confirmar la categoría de las dos entradas que solo tenían Programación.
- [x] Proponer qué hacer con REA: pasarla a etiqueta.
- [x] Comprobar la «sección de REAs»: son las situaciones de aprendizaje del repo `situaciones-aprendizaje` (`/situaciones-aprendizaje/…`), enlazadas desde Materiales alumnado; los enlaces de las entradas funcionan.
- [x] Repasar Bloques de construcción (mantenerla), Hardware (eliminarla) e Impresión 3D (pasarla a etiqueta).
- [ ] Revisión del equipo en [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35).
- [ ] Aplicar la propuesta aprobada y decidir si este documento se conserva o se borra.

## Anexo: categorías de cada entrada

| Entrada | Categorías |
|---|---|
| 2017/06 Proyectos y Actividades con Echidna | Proyectos |
| 2017/08 Programamos: «Echidna, un proyecto para aprender…» | Publicaciones |
| 2017/09 Arganbot: «Probamos la placa de prácticas EchidnaShield» | Publicaciones |
| 2017/09 EchidnaBoat | Proyectos |
| 2017/11 Juegos Robótica: «EchidnaShield. El escudo de prácticas…» | Publicaciones |
| 2019/07 La Hora Maker: «Echidna Shield – una placa diseñada…» | Publicaciones |
| 2019/07 Programar fácil: «EchidnaShield el Arduino Shield…» | Publicaciones |
| 2019/11 Concurso PrintBot Echidna | Impresión 3D |
| 2019/11 Echidna en la OSHWDem 2019 | Talleres |
| 2019/11 Obradoiro Tadega 2019 | Talleres |
| 2020/02 Juegos Robótica episodio 42 | Publicaciones |
| 2020/02 Pulsadores gigantes con MkMk | Proyectos |
| 2020/02 Selector de colores RGB | Proyectos |
| 2020/03 Open LED race para 4 jugadores | Proyectos |
| 2020/04 Programar Echidna con el IDE de Arduino | Didáctica |
| 2020/06 Echidna Black: Echidna se hace mayor… | Hardware |
| 2020/06 El proyecto Echidna crece | Noticias |
| 2020/07 Construccionismo y STEAM I | Bloques de construcción, Impresión 3D |
| 2020/07 Echidna en el Ártico | Noticias |
| 2020/07 Marioneta activada por sonido | Proyectos |
| 2020/08 Elefante con sensores | Proyectos |
| 2020/08 Medir temperatura con el sensor LM35… | Proyectos |
| 2020/09 Zombiebot | Proyectos |
| 2020/10 EchidnaScratch: El erizo y el gato se hacen amigos | Noticias |
| 2020/11 Canal YouTube de EchidnaSTEAM | Noticias |
| 2020/11 Cubo de Reciclaje Inteligente | Proyectos, Inteligencia Artificial |
| 2020/11 Echidna en la OSHWDem 2020 | Talleres |
| 2020/11 SmartCLASSROOM, Echidna vs COVID-19 | Proyectos |
| 2021/01 Pantalla OLED en Echidna Shield y Black | Hardware |
| 2021/03 Encendiendo un LED con App Inventor vía Bluetooth | Didáctica |
| 2021/03 Perrobot | Proyectos |
| 2021/05 Asistente virtual: Robótica e IA | Proyectos, Inteligencia Artificial |
| 2021/05 Inteligencia artificial con Echidna | Inteligencia Artificial, Noticias |
| 2022/07 Taller robótica educativa + IA en Cultura Maker 22 | Talleres |
| 2022/09 Dragón de papel animado con Echidna | Proyectos |
| 2022/09 Posta en marcha e proxectos con EchidnaBlack | Programación |
| 2023/05 Robótica educativa + IA con Echidna en #eslibre2023 | Talleres |
| 2024/05 ¡Volvemos a esLibre! | Didáctica, Talleres |
| 2024/06 EchidnaML: calling for B tester | Programación |
| 2024/10 A programar con Echidna ML | Noticias |
| 2024/10 ¡Vuelta a la OSHWDEM! Edición 2024 | Talleres |
| 2025/03 EchidnaML en MAX Madrid Linux | Noticias |
| 2025/03 IA: Alimento de perros y gatos | Didáctica, Programación, Proyectos, Inteligencia Artificial |
| 2025/05 Barrera de garaje con IA | Didáctica, Programación, Proyectos, Inteligencia Artificial |
| 2025/05 Return of the Yodi | Didáctica, Proyectos |
| 2025/07 El corazón delator | Didáctica, Proyectos |
| 2025/09 Aprendiendo con robots | Didáctica, Noticias |
| 2025/09 ¡La Tierra se mueve!, un nuevo REA en la sección | Didáctica |
| 2025/09 Nace la sección de REAs en Echidna | Didáctica, Noticias |
| 2025/10 Happy Halloween! Disfraza tu gato | Proyectos |
| 2025/12 Construye un gallo que canta al amanecer | Bloques de construcción, Didáctica, Programación, Proyectos |
| 2026/01 Barrera automática | Bloques de construcción, Didáctica, Programación, Proyectos |
| 2026/01 Coche teledirigido con el joystick | Bloques de construcción, Didáctica, Proyectos |
| 2026/01 Echidna y construcciones: Estatuas musicales | Bloques de construcción, Didáctica, Programación, Proyectos |
| 2026/01 Helicóptero con acelerómetro | Bloques de construcción, Didáctica, Programación, Proyectos |
| 2026/01 Manual de EchidnaBlack2 y EchidnaML | Didáctica, Hardware, Noticias, Programación |
| 2026/03 Arte cinético con Echidna | Didáctica, Proyectos |
| 2026/03 Caja fuerte | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial |
| 2026/05 Andalucía, del alba al anochecer | Didáctica, REA |
| 2026/05 El Laboratorio del Dr. Frankestein | Didáctica, Proyectos |
| 2026/05 Rotógrafo | Bloques de construcción, Didáctica, Proyectos |
| 2026/10 ¡Estrenamos nueva web! | Noticias |
| 2026/10 Tendedero automático (borrador) | Bloques de construcción, Didáctica, Proyectos |
| 2026/10 ¡Truco o trato con EchidnaBricks! | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial |
