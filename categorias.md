# Categorías y etiquetas del blog

Propuesta para revisar las categorías y las etiquetas del blog: qué hay, qué criterio seguir y qué hacer con cada una. **Está pendiente de que la revise el equipo** en el issue [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35); hasta entonces no se aplica nada en la web. Las etiquetas ya tienen un vocabulario cerrado desde octubre de 2026 ([«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog)); aquí se revisan primero las categorías y después las etiquetas, que dependen en parte de ellas. Cuando se apruebe y se aplique, los criterios pasarán a [`modelo-contenido.md`](modelo-contenido.md#etiquetas-del-blog) y la decisión, al README.

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
6. [Etiquetas](#etiquetas)
   - [Inventario de etiquetas](#inventario-de-etiquetas)
   - [Qué cambia con la propuesta de categorías](#qué-cambia-con-la-propuesta-de-categorías)
   - [Puntos a revisar](#puntos-a-revisar)
   - [Propuesta de etiquetas](#propuesta-de-etiquetas)
7. [Cómo se aplicarán](#cómo-se-aplicarán)
8. [Pendiente](#pendiente)
9. [Anexo: categorías y etiquetas de cada entrada](#anexo-categorías-y-etiquetas-de-cada-entrada)

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
- **REA no se aplica con coherencia**: «La Tierra se mueve», «Nace la sección de REAs» y «Aprendiendo con robots» anuncian REA y no la llevan.
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

**Qué tiene**: 1 entrada (Andalucía, del alba al anochecer). Hay otras tres que anuncian REA sin llevarla: «Nace la sección de REAs en Echidna», «¡La Tierra se mueve!, un nuevo REA en la sección» y «Aprendiendo con robots» (un REA del INTEF).

**Problema**: con una entrada no aguanta como categoría. Además, REA (recurso educativo abierto) no es un tipo de entrada del blog sino una característica de lo que se anuncia: las entradas son noticias de que hay un REA nuevo.

**Opciones**:

1. **Pasarla a etiqueta** (grupo Temas), en las cuatro entradas, que quedan en la categoría Noticias. Cumple la regla de al menos dos entradas por etiqueta.
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
| REA | Pasarla a etiqueta, en el grupo Temas: no es un tipo de entrada sino lo que se anuncia, y con una entrada no aguanta como categoría | Las cuatro entradas de REA (Nace la sección de REAs, ¡La Tierra se mueve!, Aprendiendo con robots y Andalucía, del alba al anochecer) llevan la etiqueta REA y la categoría Noticias | `/tag/rea/` |
| Bloques de construcción | Mantenerla como excepción, igual que Inteligencia Artificial: es de tema, pero es una línea de trabajo propia del proyecto y así se ve en el lateral. Solo para proyectos montados con piezas de construcción | Sin cambios | — |
| Hardware | Eliminarla: solo 3 entradas, y las placas ya tienen etiquetas | Echidna Black: Echidna se hace mayor… pasa a Noticias; Pantalla OLED en Echidna Shield y Black, a Proyectos; el Manual se queda en Noticias | `/ecosistema/` |
| Impresión 3D | Pasarla a etiqueta, en el grupo Temas: solo 2 entradas | Concurso PrintBot Echidna pasa a Noticias; Construccionismo y STEAM I se queda en Bloques de construcción. Las dos llevan la etiqueta Impresión 3D | `/tag/impresion-3d/` |

## Etiquetas

### Inventario de etiquetas

Vocabulario cerrado de 21 etiquetas en cinco grupos (`web/src/lib/etiquetas.ts`), con sus criterios en [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog). Uso en las 63 entradas publicadas:

| Grupo | Etiquetas (entradas) |
|---|---|
| Placas | EchidnaShield (14) · EchidnaBlack (14) · EchidnaBlack2 (11) |
| Entornos de programación | EchidnaML (17) · EchidnaScratch (13) · Snap4Arduino (4) · IDE Arduino (4) |
| Componentes | Servomotor (19) · LED (7) · Sensores externos (3) · Sensor de luz (3) · Temperatura (2) · Micrófono (2) · Joystick (2) |
| Temas | Inteligencia Artificial (15) · STEAM (10) · Makey Makey (6) · Música (3) · Juegos (3) |
| Eventos | OSHWDem (3) · esLibre (2) |

Lo que se ve:

- **Cuatro entradas no tienen ninguna etiqueta**: Juegos Robótica episodio 42, Echidna en el Ártico, Aprendiendo con robots y ¡Estrenamos nueva web!
- **25 entradas no tienen etiqueta de placa**, casi siempre porque el texto no la nombra (criterio «solo lo que la entrada dice»).
- **Siete etiquetas están en el mínimo** de dos o tres entradas.

### Qué cambia con la propuesta de categorías

- **REA** pasa a ser etiqueta, en el grupo Temas, en las cuatro entradas que anuncian un REA.
- **Impresión 3D** pasa a ser etiqueta, en el grupo Temas, en Concurso PrintBot Echidna y Construccionismo y STEAM I.
- **Inteligencia Artificial** sigue siendo a la vez categoría y etiqueta; **Bloques de construcción**, solo categoría.

Con eso, el vocabulario pasaría a 23 etiquetas.

### Puntos a revisar

Revisados uno a uno; lo propuesto está en la tabla siguiente.

1. **Inteligencia Artificial como categoría y etiqueta**: ¿se mantiene la doble?
2. **Eventos** (OSHWDem, esLibre): ¿siguen haciendo falta, ahora que Talleres es categoría?
3. **Etiquetas en el mínimo** (Temperatura, Micrófono, Joystick, Sensor de luz, Sensores externos, Música, Juegos): ¿aguantan?
4. **STEAM, Juegos y Música**: ¿aportan como temas?
5. **Entradas sin etiquetas o sin placa**: ¿alguna debería llevar?
6. **Etiquetas que faltan**.

### Propuesta de etiquetas

| Etiqueta o punto | Propuesta | Entradas afectadas |
|---|---|---|
| REA | Nueva, en Temas (viene de la categoría) | Nace la sección de REAs, ¡La Tierra se mueve!, Aprendiendo con robots, Andalucía, del alba al anochecer |
| Impresión 3D | Nueva, en Temas (viene de la categoría) | Concurso PrintBot Echidna, Construccionismo y STEAM I |
| Inteligencia Artificial | Se mantiene como categoría y como etiqueta, con el criterio actual: la categoría para las entradas centradas en la IA y la etiqueta para todas las que la usan o la mencionan | Ninguna |
| OSHWDem y esLibre | Se mantienen: son eventos a los que Echidna vuelve cada año, y la etiqueta reúne sus ediciones. La categoría Talleres dice el tipo de entrada; la etiqueta, el evento | Ninguna |
| Temperatura, Micrófono, Joystick, Sensor de luz y Sensores externos | Se mantienen: cumplen el mínimo de dos entradas, están bien aplicadas (las entradas que los nombran sin etiqueta son resúmenes de toda la placa) y cada proyecto nuevo los irá sumando | Ninguna |
| STEAM, Música y Juegos | Se mantienen: tienen criterio claro y orientan a quien busca proyectos de arte, música o juego | Ninguna |
| Entradas sin etiquetas | Aprendiendo con robots lleva REA (anuncia un REA del INTEF); ¡Estrenamos nueva web!, EchidnaBlack2 y EchidnaML (las presenta). Echidna en el Ártico (solo enlaza el repositorio) y Juegos Robótica episodio 42 (trata de Echidna White, sin etiqueta) siguen sin etiquetas | Aprendiendo con robots, ¡Estrenamos nueva web! |
| Etiquetas nuevas | Ninguna más: el nivel educativo apenas aparece (Primaria en 3 anuncios de REA, Secundaria en ninguno); Acelerómetro, OLED, zumbador y Bluetooth tienen una sola entrada, y los pulsadores están en casi todo proyecto sin ser el tema | Ninguna |

## Cómo se aplicarán

Si el equipo la aprueba, en una rama propia y por *pull request*, porque cambian URL `/category/…/`:

- `web/src/content/categorias.yaml`: quitar o renombrar categorías.
- Front matter de las entradas afectadas (lista en el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada)).
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
- [x] Revisar las etiquetas: quedan 23 (las 21 actuales más REA e Impresión 3D), sin quitar ninguna.
- [ ] Revisión del equipo en [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35).
- [ ] Aplicar la propuesta aprobada y decidir si este documento se conserva o se borra.

## Anexo: categorías y etiquetas de cada entrada

Categorías y etiquetas actuales, antes de aplicar la propuesta.

| Entrada | Categorías | Etiquetas |
|---|---|---|
| 2017/06 Proyectos y Actividades con Echidna | Proyectos | EchidnaShield |
| 2017/08 Programamos: «Echidna, un proyecto para aprender…» | Publicaciones | EchidnaShield |
| 2017/09 Arganbot: «Probamos la placa de prácticas EchidnaShield» | Publicaciones | EchidnaShield |
| 2017/09 EchidnaBoat | Proyectos | EchidnaShield |
| 2017/11 Juegos Robótica: «EchidnaShield. El escudo de prácticas…» | Publicaciones | EchidnaShield |
| 2019/07 La Hora Maker: «Echidna Shield – una placa diseñada…» | Publicaciones | EchidnaShield |
| 2019/07 Programar fácil: «EchidnaShield el Arduino Shield…» | Publicaciones | EchidnaShield |
| 2019/11 Concurso PrintBot Echidna | Impresión 3D | EchidnaShield, Servomotor |
| 2019/11 Echidna en la OSHWDem 2019 | Talleres | EchidnaShield, OSHWDem |
| 2019/11 Obradoiro Tadega 2019 | Talleres | EchidnaShield |
| 2020/02 Juegos Robótica episodio 42 | Publicaciones | — |
| 2020/02 Pulsadores gigantes con MkMk | Proyectos | EchidnaShield, Makey Makey, Música |
| 2020/02 Selector de colores RGB | Proyectos | Snap4Arduino, LED |
| 2020/03 Open LED race para 4 jugadores | Proyectos | EchidnaShield, LED, Makey Makey, Juegos |
| 2020/04 Programar Echidna con el IDE de Arduino | Didáctica | IDE Arduino |
| 2020/06 Echidna Black: Echidna se hace mayor… | Hardware | EchidnaBlack |
| 2020/06 El proyecto Echidna crece | Noticias | EchidnaBlack, EchidnaScratch |
| 2020/07 Construccionismo y STEAM I | Bloques de construcción, Impresión 3D | EchidnaBlack, EchidnaScratch, Makey Makey, STEAM |
| 2020/07 Echidna en el Ártico | Noticias | — |
| 2020/07 Marioneta activada por sonido | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, Micrófono, Música, STEAM |
| 2020/08 Elefante con sensores | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, STEAM |
| 2020/08 Medir temperatura con el sensor LM35… | Proyectos | EchidnaBlack, IDE Arduino, Temperatura |
| 2020/09 Zombiebot | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, LED, STEAM |
| 2020/10 EchidnaScratch: El erizo y el gato se hacen amigos | Noticias | EchidnaScratch |
| 2020/11 Canal YouTube de EchidnaSTEAM | Noticias | EchidnaBlack, EchidnaScratch, Inteligencia Artificial |
| 2020/11 Cubo de Reciclaje Inteligente | Proyectos, Inteligencia Artificial | EchidnaBlack, EchidnaScratch, Inteligencia Artificial |
| 2020/11 Echidna en la OSHWDem 2020 | Talleres | EchidnaBlack, EchidnaScratch, Inteligencia Artificial, OSHWDem |
| 2020/11 SmartCLASSROOM, Echidna vs COVID-19 | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos |
| 2021/01 Pantalla OLED en Echidna Shield y Black | Hardware | EchidnaShield, EchidnaBlack, IDE Arduino, Joystick |
| 2021/03 Encendiendo un LED con App Inventor vía Bluetooth | Didáctica | EchidnaShield, IDE Arduino, LED |
| 2021/03 Perrobot | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos |
| 2021/05 Asistente virtual: Robótica e IA | Proyectos, Inteligencia Artificial | EchidnaScratch, Servomotor, LED, Inteligencia Artificial |
| 2021/05 Inteligencia artificial con Echidna | Inteligencia Artificial, Noticias | EchidnaScratch, Inteligencia Artificial |
| 2022/07 Taller robótica educativa + IA en Cultura Maker 22 | Talleres | EchidnaScratch, Snap4Arduino, Inteligencia Artificial |
| 2022/09 Dragón de papel animado con Echidna | Proyectos | Servomotor |
| 2022/09 Posta en marcha e proxectos con EchidnaBlack | Programación | EchidnaBlack |
| 2023/05 Robótica educativa + IA con Echidna en #eslibre2023 | Talleres | Inteligencia Artificial, esLibre |
| 2024/05 ¡Volvemos a esLibre! | Didáctica, Talleres | EchidnaML, esLibre |
| 2024/06 EchidnaML: calling for B tester | Programación | EchidnaML, Inteligencia Artificial |
| 2024/10 A programar con Echidna ML | Noticias | EchidnaML, Inteligencia Artificial |
| 2024/10 ¡Vuelta a la OSHWDEM! Edición 2024 | Talleres | EchidnaML, OSHWDem |
| 2025/03 EchidnaML en MAX Madrid Linux | Noticias | EchidnaML, Inteligencia Artificial |
| 2025/03 IA: Alimento de perros y gatos | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Inteligencia Artificial, STEAM |
| 2025/05 Barrera de garaje con IA | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Inteligencia Artificial |
| 2025/05 Return of the Yodi | Didáctica, Proyectos | Servomotor, Sensor de luz |
| 2025/07 El corazón delator | Didáctica, Proyectos | STEAM |
| 2025/09 Aprendiendo con robots | Didáctica, Noticias | — |
| 2025/09 ¡La Tierra se mueve!, un nuevo REA en la sección | Didáctica | Servomotor |
| 2025/09 Nace la sección de REAs en Echidna | Didáctica, Noticias | EchidnaScratch, Temperatura |
| 2025/10 Happy Halloween! Disfraza tu gato | Proyectos | EchidnaBlack2, EchidnaML, Makey Makey, STEAM |
| 2025/12 Construye un gallo que canta al amanecer | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensor de luz |
| 2026/01 Barrera automática | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Sensores externos |
| 2026/01 Coche teledirigido con el joystick | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, Joystick |
| 2026/01 Echidna y construcciones: Estatuas musicales | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Micrófono, Música, Juegos |
| 2026/01 Helicóptero con acelerómetro | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Juegos |
| 2026/01 Manual de EchidnaBlack2 y EchidnaML | Didáctica, Hardware, Noticias, Programación | EchidnaBlack2, EchidnaML, Inteligencia Artificial |
| 2026/03 Arte cinético con Echidna | Didáctica, Proyectos | STEAM |
| 2026/03 Caja fuerte | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Makey Makey, Inteligencia Artificial |
| 2026/05 Andalucía, del alba al anochecer | Didáctica, REA | EchidnaBlack2, EchidnaML, Sensor de luz |
| 2026/05 El Laboratorio del Dr. Frankestein | Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Makey Makey |
| 2026/05 Rotógrafo | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, STEAM |
| 2026/10 ¡Estrenamos nueva web! | Noticias | — |
| 2026/10 Tendedero automático (borrador) | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensores externos, STEAM |
| 2026/10 ¡Truco o trato con EchidnaBricks! | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaBlack2, EchidnaML, Inteligencia Artificial, Servomotor, STEAM |
