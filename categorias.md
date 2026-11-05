# Categorías y etiquetas del blog

Propuesta para revisar las categorías y las etiquetas del blog: qué hay, qué criterio seguir y qué hacer con cada una. **Está pendiente de que la revise el equipo** en la propuesta [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59) (el primer debate fue en el issue [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35)); hasta entonces no se aplica nada en la web. Las etiquetas ya tienen un vocabulario cerrado desde octubre de 2026 ([«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog)); aquí se revisan primero las categorías y después las etiquetas, que dependen en parte de ellas. Cuando se apruebe y se aplique, los criterios pasarán a [`modelo-contenido.md`](modelo-contenido.md#etiquetas-del-blog) y la decisión, al README.

## Índice

1. [Objetivo](#objetivo)
2. [Inventario](#inventario)
3. [Criterio propuesto](#criterio-propuesto)
4. [Análisis por categoría](#análisis-por-categoría)
   - [Didáctica](#didáctica)
   - [Programación](#programación)
   - [REA](#rea)
   - [Proyectos y sus subcategorías](#proyectos-y-sus-subcategorías)
   - [Las demás](#las-demás)
5. [Propuesta](#propuesta)
   - [Categorías propuestas](#categorías-propuestas)
   - [Cambios en cada categoría actual](#cambios-en-cada-categoría-actual)
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

Además, **Proyectos** mezcla los que solo programan la placa con los que exigen conectar componentes o construir algo, y desde el lateral no se distinguen.

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

- **La categoría dice qué tipo de entrada es**: un proyecto, una noticia, un taller, una publicación de otro medio, un artículo sobre didáctica… Es lo que busca quien entra al blog desde el lateral.
- **La etiqueta dice de qué trata**: placa, entorno de programación, componentes y temas. Para eso ya está el vocabulario cerrado.
- **Pocas categorías y, normalmente, una por entrada** (dos como mucho). Una categoría con menos de unas cinco entradas no aguanta sola en el lateral.
- **Los proyectos llevan además una subcategoría de montaje**, y solo una: Placa y componentes, Manualidades o Bloques de construcción (ver [Proyectos y sus subcategorías](#proyectos-y-sus-subcategorías)).
- **Excepción ya decidida**: Inteligencia Artificial es categoría de tema porque es el eje del proyecto (ver [Decisiones tomadas](README.md#decisiones-tomadas)). Es la única: Bloques de construcción pasa a ser subcategoría de Proyectos.

## Análisis por categoría

### Didáctica

**Qué tiene**: 22 entradas. Dos de 2020–2021 (Programar Echidna con el IDE de Arduino; LED con App Inventor), una de 2024 (¡Volvemos a esLibre!) y el resto de 2025–2026: casi todos los proyectos recientes, los anuncios de REA y el manual.

**Problema**: no distingue nada. Si casi todo lo reciente es «didáctico», la categoría no ayuda a encontrar nada, y el nombre recuerda a un apartado de la web que ya no existe (`/didactica/` redirige a `/alumnado/`, ver [`redirecciones.md`](redirecciones.md)).

**Opciones**:

1. **Eliminarla** y redirigir `/category/didactica/` a `/category/proyectos/`. Cada entrada se queda con su tipo (Proyectos, Noticias, Talleres).
2. **Redefinirla** como «Propuestas para el aula» o similar, solo para entradas que son material de aula (REA, situaciones de aprendizaje, guías), con criterio estricto.
3. **Mantenerla con criterio estricto, solo para artículos sobre didáctica**: textos de reflexión sobre cómo enseñar (teoría, metodología, historia de la robótica educativa), no proyectos, noticias ni anuncios de material.

**Recomendación**: mantenerla con criterio estricto (opción 3). Así es un tipo de entrada, como las demás categorías. Hoy solo la cumple Construccionismo y STEAM I (el «I» del título anunciaba más), pero da sitio a los artículos que se escriban y `/category/didactica/` no cambia de URL. Las demás entradas la pierden: los proyectos con introducción didáctica (SmartCLASSROOM, Arte cinético con Echidna) siguen siendo proyectos, y lo que es material de aula ya está en Materiales alumnado y Recursos docentes.

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

**Recomendación**: etiqueta (opción 1). Didáctica se mantiene, pero solo para artículos sobre didáctica, no para anunciar material. La «sección» de esas entradas son las situaciones de aprendizaje (`/situaciones-aprendizaje/…`), enlazadas desde Materiales alumnado.

### Proyectos y sus subcategorías

**Qué tiene**: 29 entradas publicadas y el Tendedero automático en borrador. Con la propuesta, Proyectos y Actividades con Echidna pasa a Noticias (es un vídeo que recopila varios proyectos) y llegan dos de Hardware y Didáctica (Pantalla OLED en Echidna Shield y Black; Encendiendo un LED con App Inventor): quedan 30. Unas pocas solo programan la placa o le conectan algún componente (Selector de colores RGB, Medir temperatura con el LM35, Pantalla OLED…); la mayoría exige construir algo, con papel, cartón o materiales reutilizados (Dragón de papel, Elefante con sensores, Zombiebot, Perrobot…), con bloques de construcción (Gallo, Barrera automática, Rotógrafo…) o con materiales conductores (El Laboratorio del Dr. Frankestein, Pulsadores gigantes con MkMk).

**Problema**: desde el lateral no se distingue un proyecto que se hace con la placa y el ordenador de otro que exige preparar materiales y construir, y es lo primero que necesita saber un docente para planificar la sesión.

**Opciones**:

1. **Etiquetas de montaje** (Placa y componentes, Manualidades, Bloques de construcción): no hay que tocar la plantilla, pero se ven poco, mezcladas con las demás etiquetas, y nada obliga a ponerlas.
2. **Subcategorías de Proyectos**: salen en el lateral, bajo Proyectos, y cada una tiene su listado.

**Recomendación**: subcategorías (opción 2), con **una sola por proyecto**, la de su montaje más exigente:

| Subcategoría | Cuándo | Proyectos |
|---|---|---|
| Placa y componentes | No se construye ningún objeto: se usa lo que lleva la placa (LED RGB, sensores, acelerómetro, joystick, pulsadores…) y, si acaso, se le conecta algo (servomotor, tira de LED, pantalla, módulo Bluetooth…) | 5 |
| Manualidades | Se construye un objeto con papel, cartón, materiales reutilizados o conductores, o con piezas impresas en 3D | 17 |
| Bloques de construcción | Se construye un objeto con piezas de construcción (tipo LEGO) | 8, más el Tendedero automático en borrador |

El reparto de cada proyecto está en el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada).

Reglas para asignarla:

- **Construir manda**: un objeto construido va a Manualidades o a Bloques de construcción aunque lleve servomotores o sensores. Si mezcla bloques y manualidad, va a la que predomine.
- **Se asigna leyendo la entrada y sus vídeos o presentaciones**, no solo la descripción. Perrobot, por la descripción (sensor de distancia y servomotor), parecería de Placa y componentes, pero el perro se construye con materiales comunes: es Manualidades.
- **La subcategoría implica Proyectos**: la entrada sale también en `/category/proyectos/`.

Por qué tres y no cuatro: se pensó separar Solo placa y Componentes externos, pero al repartir los proyectos quedaban con 2 y 3 entradas, por debajo del mínimo de unas cinco. Lo que le importa al docente es si hay que construir algo o no.

**Impresión 3D**: EchidnaBoat (un barco con piezas impresas) va de momento a Manualidades. Cuando haya proyectos impresos en 3D suficientes, podrá ser una subcategoría propia; la etiqueta Impresión 3D dirá qué proyectos pasan a ella.

### Las demás

| Categoría | Propuesta | Por qué |
|---|---|---|
| Proyectos | Mantener, con tres subcategorías | Tipo de entrada claro y el más numeroso; ver [Proyectos y sus subcategorías](#proyectos-y-sus-subcategorías) |
| Noticias | Mantener | Tipo de entrada claro |
| Talleres | Mantener | Tipo de entrada claro; recibe las redirecciones de la antigua `/didactica/talleres/` |
| Publicaciones | Mantener | Tipo de entrada claro; enlaza con la página Publicaciones |
| Inteligencia Artificial | Mantener | Decidido en octubre de 2026 |
| Bloques de construcción | Pasar a subcategoría de Proyectos | Es de tema, no de tipo; como subcategoría sigue viéndose en el lateral sin ser una excepción. Ocho de sus nueve entradas son proyectos |
| Hardware | Eliminar | 3 entradas; lo que tratan ya lo dicen las etiquetas de placa. Las de anuncio de placa encajan en Noticias |
| Impresión 3D | Pasar a etiqueta | 2 entradas antiguas; como etiqueta cumple la regla de al menos dos entradas |

## Propuesta

Preparada por Jose Pujol en octubre de 2026, categoría a categoría, y ampliada en noviembre de 2026 con las subcategorías de Proyectos. Pendiente de revisión del equipo en [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59).

Con ella, el blog queda con **6 categorías** (Proyectos, Noticias, Talleres, Publicaciones, Didáctica e Inteligencia Artificial), **3 subcategorías de Proyectos** (Placa y componentes, Manualidades y Bloques de construcción) y **23 etiquetas** (las 21 actuales más REA, Impresión 3D y EchidnaWhite, menos Sensores externos).

### Categorías propuestas

| Categoría | Qué va dentro | Ejemplos |
|---|---|---|
| Proyectos | Montajes con la placa explicados paso a paso: qué se hace, cómo se conecta o se construye y el programa. Lleva siempre una de sus tres subcategorías, la de su montaje más exigente | — |
| ↳ Placa y componentes | Proyectos que no construyen ningún objeto: usan lo que lleva la placa (LED RGB, sensores, acelerómetro, joystick, pulsadores…) y, si acaso, le conectan algo (servomotor, tira de LED, pantalla, módulo Bluetooth…) | Selector de colores RGB, Pantalla OLED en Echidna Shield y Black |
| ↳ Manualidades | Proyectos que construyen un objeto con papel, cartón, materiales reutilizados o conductores, o con piezas impresas en 3D, aunque lleven servomotores o sensores | Dragón de papel, Perrobot, El Laboratorio del Dr. Frankestein |
| ↳ Bloques de construcción | Proyectos que construyen un objeto con piezas de construcción (tipo LEGO), aunque lleven servomotores o sensores | Construye un gallo que canta al amanecer, Barrera automática, Rotógrafo |
| Noticias | Novedades del proyecto: placas, entornos de programación, manuales, REA nuevos, la web, el canal de YouTube… No van las crónicas de eventos (Talleres) | A programar con Echidna ML, Manual de EchidnaBlack2 y EchidnaML |
| Talleres | Eventos en los que participa Echidna: ferias, congresos y talleres, antes o después de celebrarse | Echidna en la OSHWDem 2019, ¡Volvemos a esLibre! |
| Publicaciones | Artículos, entrevistas y pódcast de otros medios sobre Echidna | Juegos Robótica episodio 42, Programar fácil: «EchidnaShield el Arduino Shield…» |
| Didáctica | Artículos de reflexión sobre cómo enseñar: teoría, metodología, historia de la robótica educativa. No van los proyectos, aunque empiecen con una introducción didáctica, ni los anuncios de material | Construccionismo y STEAM I |
| Inteligencia Artificial | Única categoría de tema: se suma a la de tipo en las entradas centradas en la IA (proyectos y propuestas que trabajan con modelos de IA). Las que solo la usan o la mencionan llevan la etiqueta, no la categoría | Cubo de Reciclaje Inteligente, Caja fuerte |

### Cambios en cada categoría actual

| Categoría | Propuesta | Destino de sus entradas | Redirección de `/category/<id>/` |
|---|---|---|---|
| Proyectos | Mantenerla, con tres subcategorías de montaje (Placa y componentes, Manualidades y Bloques de construcción), una por proyecto | Cada proyecto lleva su subcategoría (ver el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada)). Proyectos y Actividades con Echidna pasa a Noticias: es un vídeo que recopila varios proyectos. Llegan Pantalla OLED en Echidna Shield y Black (de Hardware) y Encendiendo un LED con App Inventor (de Didáctica) | — |
| Didáctica | Mantenerla con criterio estricto: solo artículos sobre didáctica (reflexión sobre cómo enseñar), no proyectos, noticias ni anuncios de material. Hoy casi todo lo reciente la lleva y no distingue nada | Construccionismo y STEAM I pasa a ella (y deja Bloques de construcción). Las demás la pierden y se quedan con sus otras categorías. Cuatro solo la tenían a ella (o con REA): Programar Echidna con el IDE de Arduino pasa a Noticias; Encendiendo un LED con App Inventor, a Proyectos (las dos mantienen la etiqueta IDE Arduino); ¡La Tierra se mueve! y Andalucía, del alba al anochecer, a Noticias (ver REA) | — (se mantiene) |
| Programación | Eliminarla: casi todo en Echidna es programar una placa, y el entorno ya lo dicen las etiquetas | Se quedan con sus otras categorías. Dos solo la tenían a ella: Posta en marcha e proxectos con EchidnaBlack pasa a Talleres y EchidnaML: calling for B tester, a Noticias | `/category/proyectos/` |
| REA | Pasarla a etiqueta, en el grupo Temas: no es un tipo de entrada sino lo que se anuncia, y con una entrada no aguanta como categoría | Las cuatro entradas de REA (Nace la sección de REAs, ¡La Tierra se mueve!, Aprendiendo con robots y Andalucía, del alba al anochecer) llevan la etiqueta REA y la categoría Noticias | `/tag/rea/` |
| Bloques de construcción | Pasarla a subcategoría de Proyectos: es de tema, pero es una línea de trabajo propia y así se sigue viendo en el lateral. Solo para proyectos montados con piezas de construcción | Los ocho proyectos siguen en ella. Construccionismo y STEAM I no es un proyecto sino un artículo sobre bloques, construccionismo y robótica: pasa a Didáctica | `/category/proyectos/bloques-de-construccion/` |
| Hardware | Eliminarla: solo 3 entradas, y las placas ya tienen etiquetas | Echidna Black: Echidna se hace mayor… pasa a Noticias; Pantalla OLED en Echidna Shield y Black, a Proyectos; el Manual se queda en Noticias | `/ecosistema/` |
| Impresión 3D | Pasarla a etiqueta, en el grupo Temas: solo 2 entradas | Concurso PrintBot Echidna pasa a Noticias; Construccionismo y STEAM I, a Didáctica. Las dos llevan la etiqueta Impresión 3D | `/tag/impresion-3d/` |

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
- **Impresión 3D** pasa a ser etiqueta, en el grupo Temas, en Concurso PrintBot Echidna y Construccionismo y STEAM I, y se añade a EchidnaBoat e IA: Alimento de perros y gatos, que ofrecen piezas para imprimir.
- **Inteligencia Artificial** sigue siendo a la vez categoría y etiqueta; **Bloques de construcción**, solo subcategoría de Proyectos.
- **Sensores externos** sobra: lo que reunía lo recogen las subcategorías de Proyectos según el montaje.

Con eso, más EchidnaWhite y quitando Sensores externos (ver [Propuesta de etiquetas](#propuesta-de-etiquetas)), el vocabulario pasaría a 23 etiquetas.

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
| Impresión 3D | Nueva, en Temas (viene de la categoría). La llevan también los proyectos que ofrecen piezas para imprimir, para saber cuáles pasarían a una futura subcategoría Impresión 3D | Concurso PrintBot Echidna, Construccionismo y STEAM I, EchidnaBoat, IA: Alimento de perros y gatos |
| Inteligencia Artificial | Se mantiene como categoría y como etiqueta, con el criterio actual: la categoría para las entradas centradas en la IA y la etiqueta para todas las que la usan o la mencionan | Ninguna |
| OSHWDem y esLibre | Se mantienen: son eventos a los que Echidna vuelve cada año, y la etiqueta reúne sus ediciones. La categoría Talleres dice el tipo de entrada; la etiqueta, el evento | Ninguna |
| Temperatura, Micrófono, Joystick y Sensor de luz | Se mantienen: cumplen el mínimo de dos entradas, están bien aplicadas (las entradas que los nombran sin etiqueta son resúmenes de toda la placa) y cada proyecto nuevo los irá sumando | Ninguna |
| Sensores externos | Se elimina: reúne sensores muy distintos (distancia SHARP, infrarrojos, CO₂…), no ayuda a encontrar entradas y lo que pretendía lo cubren las subcategorías de Proyectos | SmartCLASSROOM, Perrobot, Barrera automática y Tendedero automático (borrador) pierden la etiqueta |
| STEAM, Música y Juegos | Se mantienen: tienen criterio claro y orientan a quien busca proyectos de arte, música o juego | Ninguna |
| Entradas sin etiquetas | Aprendiendo con robots lleva REA (anuncia un REA del INTEF); ¡Estrenamos nueva web!, EchidnaBlack2 y EchidnaML (las presenta); Echidna en el Ártico, EchidnaShield (enlaza el repositorio de EchidnaShield), y Juegos Robótica episodio 42, EchidnaWhite (ver la fila siguiente) | Aprendiendo con robots, ¡Estrenamos nueva web!, Echidna en el Ártico, Juegos Robótica episodio 42 |
| EchidnaWhite | Nueva, en Placas: Juegos Robótica episodio 42 trata de ella y Echidna en la OSHWDem 2019 la presenta, así que cumple el mínimo de dos entradas | Juegos Robótica episodio 42, Echidna en la OSHWDem 2019 |
| Etiquetas nuevas | Ninguna más: el nivel educativo apenas aparece (Primaria en 3 anuncios de REA, Secundaria en ninguno); Acelerómetro, OLED, zumbador y Bluetooth tienen una sola entrada, y los pulsadores están en casi todo proyecto sin ser el tema | Ninguna |
| App Inventor (candidata) | No se crea todavía: iría en Entornos de programación, pero solo la usa una entrada. Se añadirá cuando se publique una segunda | Encendiendo un LED con App Inventor vía Bluetooth, cuando la haya |

## Cómo se aplicarán

Si el equipo la aprueba, en una rama propia y por *pull request*, porque cambian URL `/category/…/`:

- `web/src/content/categorias.yaml`: quitar o renombrar categorías, y añadir las subcategorías con un campo que diga de qué categoría cuelgan (`parent: proyectos`).
- Plantillas del blog: el lateral muestra las subcategorías anidadas bajo Proyectos, cada una con su número de entradas; cada subcategoría tiene su listado en `/category/proyectos/<id>/`, y `/category/proyectos/` incluye las entradas de todas.
- Comprobación en el *build*: cada proyecto lleva exactamente una subcategoría.
- Front matter de las entradas afectadas (lista en el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada)), con la subcategoría de cada proyecto.
- Etiquetas nuevas (REA, Impresión 3D, EchidnaWhite) y eliminadas (Sensores externos): `web/src/lib/etiquetas.ts`, el front matter de sus entradas y la tabla de [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog).
- Redirecciones de las categorías que desaparecen, en [`redirecciones.md`](redirecciones.md#blog-y-rss) y donde estén implementadas en `web/`.
- Criterios en [`modelo-contenido.md`](modelo-contenido.md#listas-de-datos-autores-y-categorías), lista de [`escribir-blog.md`](escribir-blog.md#categorías-y-etiquetas) y decisión en «Decisiones tomadas» del README.
- Comprobar con el *build* (falla si una entrada usa una categoría que no existe) y en el servidor de desarrollo: lateral del blog, `/category/<id>/` y redirecciones.

## Pendiente

- [x] Proponer qué hacer con Didáctica: mantenerla solo para artículos sobre didáctica (hoy, Construccionismo y STEAM I).
- [x] Dar categoría a las cuatro entradas que solo tenían Didáctica.
- [x] Proponer qué hacer con Programación: eliminarla.
- [x] Confirmar la categoría de las dos entradas que solo tenían Programación.
- [x] Proponer qué hacer con REA: pasarla a etiqueta.
- [x] Comprobar la «sección de REAs»: son las situaciones de aprendizaje del repo `situaciones-aprendizaje` (`/situaciones-aprendizaje/…`), enlazadas desde Materiales alumnado; los enlaces de las entradas funcionan.
- [x] Repasar Bloques de construcción (pasa a subcategoría de Proyectos), Hardware (eliminarla) e Impresión 3D (pasarla a etiqueta).
- [x] Revisar las etiquetas: quedan 23 (las 21 actuales más REA, Impresión 3D y EchidnaWhite, menos Sensores externos).
- [x] Proponer cómo distinguir los proyectos según el montaje: tres subcategorías de Proyectos, una por proyecto; Bloques de construcción pasa a ser una de ellas.
- [x] Repartir los proyectos en las subcategorías (en el anexo): Proyectos y Actividades con Echidna pasa a Noticias y EchidnaBoat va a Manualidades.
- [ ] Añadir la etiqueta App Inventor (Entornos de programación) cuando haya una segunda entrada que la use.
- [x] Llevar las subcategorías a la revisión en [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59) ([comentario del 5 de noviembre de 2026](https://github.com/EchidnaEducacion/gobernanza/issues/59#issuecomment-6663302957)).
- [ ] Revisión del equipo en [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59).
- [ ] Aplicar la propuesta aprobada y decidir si este documento se conserva o se borra.

## Anexo: categorías y etiquetas de cada entrada

Categorías y etiquetas actuales, antes de aplicar la propuesta. La última columna es la subcategoría propuesta para cada proyecto.

| Entrada | Categorías | Etiquetas | Subcategoría propuesta |
|---|---|---|---|
| 2017/06 Proyectos y Actividades con Echidna | Proyectos | EchidnaShield | — (pasa a Noticias) |
| 2017/08 Programamos: «Echidna, un proyecto para aprender…» | Publicaciones | EchidnaShield | |
| 2017/09 Arganbot: «Probamos la placa de prácticas EchidnaShield» | Publicaciones | EchidnaShield | |
| 2017/09 EchidnaBoat | Proyectos | EchidnaShield | Manualidades |
| 2017/11 Juegos Robótica: «EchidnaShield. El escudo de prácticas…» | Publicaciones | EchidnaShield | |
| 2019/07 La Hora Maker: «Echidna Shield – una placa diseñada…» | Publicaciones | EchidnaShield | |
| 2019/07 Programar fácil: «EchidnaShield el Arduino Shield…» | Publicaciones | EchidnaShield | |
| 2019/11 Concurso PrintBot Echidna | Impresión 3D | EchidnaShield, Servomotor | |
| 2019/11 Echidna en la OSHWDem 2019 | Talleres | EchidnaShield, OSHWDem | |
| 2019/11 Obradoiro Tadega 2019 | Talleres | EchidnaShield | |
| 2020/02 Juegos Robótica episodio 42 | Publicaciones | — | |
| 2020/02 Pulsadores gigantes con MkMk | Proyectos | EchidnaShield, Makey Makey, Música | Manualidades |
| 2020/02 Selector de colores RGB | Proyectos | Snap4Arduino, LED | Placa y componentes |
| 2020/03 Open LED race para 4 jugadores | Proyectos | EchidnaShield, LED, Makey Makey, Juegos | Placa y componentes |
| 2020/04 Programar Echidna con el IDE de Arduino | Didáctica | IDE Arduino | |
| 2020/06 Echidna Black: Echidna se hace mayor… | Hardware | EchidnaBlack | |
| 2020/06 El proyecto Echidna crece | Noticias | EchidnaBlack, EchidnaScratch | |
| 2020/07 Construccionismo y STEAM I | Bloques de construcción, Impresión 3D | EchidnaBlack, EchidnaScratch, Makey Makey, STEAM | |
| 2020/07 Echidna en el Ártico | Noticias | — | |
| 2020/07 Marioneta activada por sonido | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, Micrófono, Música, STEAM | Manualidades |
| 2020/08 Elefante con sensores | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, STEAM | Manualidades |
| 2020/08 Medir temperatura con el sensor LM35… | Proyectos | EchidnaBlack, IDE Arduino, Temperatura | Placa y componentes |
| 2020/09 Zombiebot | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, LED, STEAM | Manualidades |
| 2020/10 EchidnaScratch: El erizo y el gato se hacen amigos | Noticias | EchidnaScratch | |
| 2020/11 Canal YouTube de EchidnaSTEAM | Noticias | EchidnaBlack, EchidnaScratch, Inteligencia Artificial | |
| 2020/11 Cubo de Reciclaje Inteligente | Proyectos, Inteligencia Artificial | EchidnaBlack, EchidnaScratch, Inteligencia Artificial | Manualidades |
| 2020/11 Echidna en la OSHWDem 2020 | Talleres | EchidnaBlack, EchidnaScratch, Inteligencia Artificial, OSHWDem | |
| 2020/11 SmartCLASSROOM, Echidna vs COVID-19 | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos | Manualidades |
| 2021/01 Pantalla OLED en Echidna Shield y Black | Hardware | EchidnaShield, EchidnaBlack, IDE Arduino, Joystick | Placa y componentes |
| 2021/03 Encendiendo un LED con App Inventor vía Bluetooth | Didáctica | EchidnaShield, IDE Arduino, LED | Placa y componentes |
| 2021/03 Perrobot | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos | Manualidades |
| 2021/05 Asistente virtual: Robótica e IA | Proyectos, Inteligencia Artificial | EchidnaScratch, Servomotor, LED, Inteligencia Artificial | Manualidades |
| 2021/05 Inteligencia artificial con Echidna | Inteligencia Artificial, Noticias | EchidnaScratch, Inteligencia Artificial | |
| 2022/07 Taller robótica educativa + IA en Cultura Maker 22 | Talleres | EchidnaScratch, Snap4Arduino, Inteligencia Artificial | |
| 2022/09 Dragón de papel animado con Echidna | Proyectos | Servomotor | Manualidades |
| 2022/09 Posta en marcha e proxectos con EchidnaBlack | Programación | EchidnaBlack | |
| 2023/05 Robótica educativa + IA con Echidna en #eslibre2023 | Talleres | Inteligencia Artificial, esLibre | |
| 2024/05 ¡Volvemos a esLibre! | Didáctica, Talleres | EchidnaML, esLibre | |
| 2024/06 EchidnaML: calling for B tester | Programación | EchidnaML, Inteligencia Artificial | |
| 2024/10 A programar con Echidna ML | Noticias | EchidnaML, Inteligencia Artificial | |
| 2024/10 ¡Vuelta a la OSHWDEM! Edición 2024 | Talleres | EchidnaML, OSHWDem | |
| 2025/03 EchidnaML en MAX Madrid Linux | Noticias | EchidnaML, Inteligencia Artificial | |
| 2025/03 IA: Alimento de perros y gatos | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Inteligencia Artificial, STEAM | Manualidades |
| 2025/05 Barrera de garaje con IA | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Inteligencia Artificial | Manualidades |
| 2025/05 Return of the Yodi | Didáctica, Proyectos | Servomotor, Sensor de luz | Manualidades |
| 2025/07 El corazón delator | Didáctica, Proyectos | STEAM | Manualidades |
| 2025/09 Aprendiendo con robots | Didáctica, Noticias | — | |
| 2025/09 ¡La Tierra se mueve!, un nuevo REA en la sección | Didáctica | Servomotor | |
| 2025/09 Nace la sección de REAs en Echidna | Didáctica, Noticias | EchidnaScratch, Temperatura | |
| 2025/10 Happy Halloween! Disfraza tu gato | Proyectos | EchidnaBlack2, EchidnaML, Makey Makey, STEAM | Manualidades |
| 2025/12 Construye un gallo que canta al amanecer | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensor de luz | Bloques de construcción |
| 2026/01 Barrera automática | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Sensores externos | Bloques de construcción |
| 2026/01 Coche teledirigido con el joystick | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, Joystick | Bloques de construcción |
| 2026/01 Echidna y construcciones: Estatuas musicales | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Micrófono, Música, Juegos | Bloques de construcción |
| 2026/01 Helicóptero con acelerómetro | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Juegos | Bloques de construcción |
| 2026/01 Manual de EchidnaBlack2 y EchidnaML | Didáctica, Hardware, Noticias, Programación | EchidnaBlack2, EchidnaML, Inteligencia Artificial | |
| 2026/03 Arte cinético con Echidna | Didáctica, Proyectos | STEAM | Manualidades |
| 2026/03 Caja fuerte | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Makey Makey, Inteligencia Artificial | Bloques de construcción |
| 2026/05 Andalucía, del alba al anochecer | Didáctica, REA | EchidnaBlack2, EchidnaML, Sensor de luz | |
| 2026/05 El Laboratorio del Dr. Frankestein | Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Makey Makey | Manualidades |
| 2026/05 Rotógrafo | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, STEAM | Bloques de construcción |
| 2026/10 ¡Estrenamos nueva web! | Noticias | — | |
| 2026/10 Tendedero automático (borrador) | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensores externos, STEAM | Bloques de construcción |
| 2026/10 ¡Truco o trato con EchidnaBricks! | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaBlack2, EchidnaML, Inteligencia Artificial, Servomotor, STEAM | Bloques de construcción |
