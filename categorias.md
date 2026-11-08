# Categorías y etiquetas del blog

Propuesta para revisar las categorías y las etiquetas del blog. **Está pendiente de que la revise el equipo** en [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59) (el primer debate fue en el issue [#35](https://github.com/EchidnaEducacion/EchidnaEducacion.github.io/issues/35)); hasta entonces no se aplica nada en la web. Cuando se apruebe y se aplique, los criterios pasarán a [`modelo-contenido.md`](modelo-contenido.md#etiquetas-del-blog) y la decisión, al README.

## Índice

1. [Análisis](#análisis)
   - [Categorías](#categorías)
   - [Etiquetas](#etiquetas)
2. [Propuesta](#propuesta)
   - [Criterio](#criterio)
   - [Categorías propuestas](#categorías-propuestas)
   - [Qué pasa con las categorías actuales](#qué-pasa-con-las-categorías-actuales)
   - [Etiquetas propuestas](#etiquetas-propuestas)
   - [Alternativas descartadas](#alternativas-descartadas)
   - [Cómo se aplicaría](#cómo-se-aplicaría)
3. [Dudas](#dudas)
   - [Categoría y entradas de Publicaciones](#categoría-y-entradas-de-publicaciones)
   - [Entradas sin categoría propia: didáctica y tutoriales](#entradas-sin-categoría-propia-didáctica-y-tutoriales)
4. [Pendiente](#pendiente)
5. [Anexo: categorías y etiquetas de cada entrada](#anexo-categorías-y-etiquetas-de-cada-entrada)

---

## Análisis

Lo que hay hoy en el blog. Datos de octubre de 2026: 63 entradas publicadas y 1 en borrador (Tendedero automático, que no se cuenta).

### Categorías

Las 11 categorías (`web/src/content/categorias.yaml`) vienen de WordPress, sin criterios escritos para asignarlas. Una entrada puede tener varias.

| Categoría | Entradas | Años | Qué tiene |
|---|---|---|---|
| Proyectos | 29 | 2017–2026 | Montajes con la placa explicados paso a paso |
| Didáctica | 22 | 2020–2026 | Casi todos los proyectos recientes, los anuncios de REA y el manual; 19 son de 2025–2026 |
| Noticias | 11 | 2020–2026 | Novedades del proyecto (placas, entornos, web, canal de YouTube…) |
| Bloques de construcción | 9 | 2020–2026 | Proyectos con piezas de construcción (tipo LEGO), todos de 2025–2026, y el artículo Construccionismo y STEAM I |
| Programación | 9 | 2022–2026 | Seis proyectos con EchidnaML, el manual, la llamada a *beta testers* y un taller |
| Talleres | 7 | 2019–2024 | Eventos en los que participa Echidna (OSHWDem, esLibre, Cultura Maker…) |
| Inteligencia Artificial | 7 | 2020–2026 | Solo entradas centradas en la IA |
| Publicaciones | 6 | 2017–2020 | Artículos y pódcast de otros medios sobre Echidna |
| Hardware | 3 | 2020–2026 | Echidna Black, pantalla OLED, manual de EchidnaBlack2 |
| Impresión 3D | 2 | 2019–2020 | Concurso PrintBot y Construccionismo y STEAM I |
| REA | 1 | 2026 | Solo «Andalucía, del alba al anochecer» |

Lo que se ve:

- **Didáctica es un cajón de sastre**: la llevan casi todas las entradas recientes, junto a Proyectos, y no distingue nada. Además, recuerda a un apartado de la web antigua que ya no existe (`/didactica/` redirige a `/alumnado/`).
- **Programación podría llevarla cualquier entrada**: casi todo en Echidna es programar una placa, y el entorno ya lo dicen las etiquetas.
- **REA no aguanta como categoría ni se aplica con coherencia**: tiene una entrada, y otras tres que anuncian un REA («Nace la sección de REAs», «¡La Tierra se mueve!» y «Aprendiendo con robots») no la llevan.
- **Hardware e Impresión 3D tienen dos o tres entradas**, y de lo que tratan ya lo dicen las etiquetas.
- **Unas categorías dicen el tipo de entrada** (Proyectos, Noticias, Talleres, Publicaciones) **y otras el tema** (Programación, Hardware, Impresión 3D, Bloques de construcción, Inteligencia Artificial), que se solapan con las etiquetas.
- **Las entradas recientes llevan tres o cuatro categorías** (p. ej. Barrera automática: Bloques de construcción, Didáctica, Programación y Proyectos), lo que diluye el lateral.
- **Proyectos mezcla montajes muy distintos**: unos pocos solo programan la placa o le conectan algún componente; la mayoría exige construir algo con papel, cartón, materiales reutilizados o bloques. Desde el lateral no se distinguen, y es lo primero que necesita saber un docente para preparar la sesión.

### Etiquetas

Vocabulario cerrado de 21 etiquetas en cinco grupos desde octubre de 2026 (`web/src/lib/etiquetas.ts`), con sus criterios en [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog). Uso en las 63 entradas publicadas:

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
- **Sensores externos reúne sensores muy distintos** (distancia SHARP, infrarrojos, CO₂…) y no ayuda a encontrar entradas.

## Propuesta

Preparada por Jose Pujol en octubre de 2026 y ampliada en noviembre de 2026 con las subcategorías de Proyectos y la eliminación de Didáctica. Con ella, el blog queda con **5 categorías** (Proyectos, Noticias, Talleres, Publicaciones e Inteligencia Artificial), **3 subcategorías de Proyectos** (Placa y componentes, Manualidades y Bloques de construcción) y **23 etiquetas** (las 21 actuales más REA, Impresión 3D y EchidnaWhite, menos Sensores externos).

### Criterio

- **La categoría dice qué tipo de entrada es**: un proyecto, una noticia, un taller o una publicación de otro medio. Es lo que busca quien entra al blog desde el lateral. Los tipos que aún tienen muy pocas entradas (artículos sobre didáctica, tutoriales de configuración) van a Noticias hasta que lleguen al mínimo (ver [Dudas](#entradas-sin-categoría-propia-didáctica-y-tutoriales)).
- **La etiqueta dice de qué trata**: placa, entorno de programación, componentes y temas, con el vocabulario cerrado.
- **Una categoría por entrada.** La única excepción es Inteligencia Artificial, categoría de tema porque es el eje del proyecto (ver [Decisiones tomadas](README.md#decisiones-tomadas)): se suma a la de tipo en las entradas centradas en la IA.
- **Cada proyecto lleva una subcategoría de montaje, y solo una**, la de su montaje más exigente:
  - **Construir manda**: un objeto construido va a Manualidades o a Bloques de construcción aunque lleve servomotores o sensores. Si mezcla bloques y manualidad, va a la que predomine.
  - **Se asigna leyendo la entrada y sus vídeos o presentaciones**, no solo la descripción. Perrobot, por la descripción (sensor de distancia y servomotor), parecería de Placa y componentes, pero el perro se construye con materiales comunes: es Manualidades.
  - **La subcategoría implica Proyectos**: la entrada sale también en el listado de Proyectos.
- **Mínimos**: una categoría con menos de unas cinco entradas no aguanta sola en el lateral; una etiqueta nueva tiene que servir para al menos dos entradas.

### Categorías propuestas

| Categoría | Qué va dentro | Entradas | Ejemplos |
|---|---|---|---|
| Proyectos | Montajes con la placa explicados paso a paso: qué se hace, cómo se conecta o se construye y el programa. Lleva siempre una de sus tres subcategorías | 30 | — |
| ↳ Placa y componentes | Proyectos que no construyen ningún objeto: usan lo que lleva la placa (LED RGB, sensores, acelerómetro, joystick, pulsadores…) y, si acaso, le conectan algo (servomotor, tira de LED, pantalla, módulo Bluetooth…) | 5 | Selector de colores RGB, Pantalla OLED en Echidna Shield y Black |
| ↳ Manualidades | Proyectos que construyen un objeto con papel, cartón, materiales reutilizados o conductores, o con piezas impresas en 3D | 17 | Dragón de papel, Perrobot, El Laboratorio del Dr. Frankestein |
| ↳ Bloques de construcción | Proyectos que construyen un objeto con piezas de construcción (tipo LEGO) | 8, más el Tendedero en borrador | Construye un gallo que canta al amanecer, Barrera automática, Rotógrafo |
| Noticias | Novedades del proyecto: placas, entornos de programación, manuales, REA nuevos, la web, el canal de YouTube… y, mientras no tengan categoría propia, los artículos sobre didáctica y los tutoriales de configuración. No van las crónicas de eventos (Talleres) | 19 | A programar con Echidna ML, Manual de EchidnaBlack2 y EchidnaML |
| Talleres | Eventos en los que participa Echidna: ferias, congresos y talleres, antes o después de celebrarse | 8 | Echidna en la OSHWDem 2019, ¡Volvemos a esLibre! |
| Publicaciones | Artículos, entrevistas y pódcast de otros medios sobre Echidna | 6 | Juegos Robótica episodio 42, Programar fácil: «EchidnaShield el Arduino Shield…» |
| Inteligencia Artificial | Además de su categoría de tipo, las entradas centradas en la IA (proyectos y propuestas que trabajan con modelos de IA). Las que solo la usan o la mencionan llevan la etiqueta, no la categoría | 7 | Cubo de Reciclaje Inteligente, Caja fuerte |

La categoría propuesta para cada entrada, con la subcategoría de cada proyecto, está en el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada).

### Qué pasa con las categorías actuales

| Categoría actual | Qué se hace | Adónde van sus entradas | Redirección de `/category/<id>/` |
|---|---|---|---|
| Proyectos | Se mantiene, con tres subcategorías | Cada proyecto lleva su subcategoría. Proyectos y Actividades con Echidna pasa a Noticias (es un vídeo que recopila varios proyectos). Llegan Pantalla OLED (de Hardware) y Encendiendo un LED con App Inventor (de Didáctica) | — |
| Noticias, Talleres y Publicaciones | Se mantienen | Sin cambios | — |
| Inteligencia Artificial | Se mantiene | Sin cambios | — |
| Didáctica | Se elimina: con una sola entrada no llega al mínimo (ver [Dudas](#entradas-sin-categoría-propia-didáctica-y-tutoriales)) | Sus entradas se quedan con sus otras categorías; las que solo la tenían: Programar Echidna con el IDE de Arduino, ¡La Tierra se mueve! y Andalucía, del alba al anochecer pasan a Noticias, y Encendiendo un LED con App Inventor, a Proyectos. | `/category/noticias/` |
| Bloques de construcción | Pasa a subcategoría de Proyectos | Los ocho proyectos siguen en ella; Construccionismo y STEAM I pasa a Noticias | — (no cambia de URL) |
| Programación | Se elimina | Se quedan con sus otras categorías. Las dos que solo la tenían: Posta en marcha e proxectos con EchidnaBlack pasa a Talleres y EchidnaML: calling for B tester, a Noticias | `/category/proyectos/` |
| Hardware | Se elimina | Echidna Black: Echidna se hace mayor… pasa a Noticias; Pantalla OLED en Echidna Shield y Black, a Proyectos; el Manual se queda en Noticias | `/ecosistema/` |
| REA | Pasa a etiqueta | Las cuatro entradas que anuncian un REA llevan la etiqueta REA y la categoría Noticias | `/tag/rea/` |
| Impresión 3D | Pasa a etiqueta | Concurso PrintBot Echidna pasa a Noticias; Construccionismo y STEAM I, también | `/tag/impresion-3d/` |

### Etiquetas propuestas

| Etiqueta | Qué se hace | Entradas afectadas |
|---|---|---|
| REA | Nueva, en Temas (viene de la categoría) | Nace la sección de REAs, ¡La Tierra se mueve!, Aprendiendo con robots, Andalucía, del alba al anochecer |
| Impresión 3D | Nueva, en Temas (viene de la categoría). La llevan también los proyectos que ofrecen piezas para imprimir, para saber cuáles pasarían a una futura subcategoría Impresión 3D | Concurso PrintBot Echidna, Construccionismo y STEAM I, EchidnaBoat, IA: Alimento de perros y gatos |
| EchidnaWhite | Nueva, en Placas: Juegos Robótica episodio 42 trata de ella y Echidna en la OSHWDem 2019 la presenta | Juegos Robótica episodio 42, Echidna en la OSHWDem 2019 |
| Sensores externos | Se elimina: lo que pretendía lo dicen ahora las subcategorías de Proyectos | SmartCLASSROOM, Perrobot, Barrera automática y Tendedero automático (borrador) |
| Entradas sin etiquetas | Aprendiendo con robots lleva REA; ¡Estrenamos nueva web!, EchidnaBlack2 y EchidnaML (las presenta); Echidna en el Ártico, EchidnaShield (enlaza su repositorio), y Juegos Robótica episodio 42, EchidnaWhite | Aprendiendo con robots, ¡Estrenamos nueva web!, Echidna en el Ártico, Juegos Robótica episodio 42 |
| Inteligencia Artificial | Se mantiene como categoría y como etiqueta: la categoría para las entradas centradas en la IA y la etiqueta para todas las que la usan o la mencionan | Ninguna |
| OSHWDem y esLibre | Se mantienen: son eventos a los que Echidna vuelve cada año. La categoría Talleres dice el tipo de entrada; la etiqueta, el evento | Ninguna |
| Temperatura, Micrófono, Joystick y Sensor de luz | Se mantienen: cumplen el mínimo, están bien aplicadas y cada proyecto nuevo los irá sumando | Ninguna |
| STEAM, Música y Juegos | Se mantienen: tienen criterio claro y orientan a quien busca proyectos de arte, música o juego | Ninguna |
| App Inventor (candidata) | No se crea todavía: iría en Entornos de programación, pero solo la usa una entrada | Encendiendo un LED con App Inventor vía Bluetooth, cuando haya una segunda |

No se crean más: el nivel educativo apenas aparece (Primaria en 3 anuncios de REA, Secundaria en ninguno); Acelerómetro, OLED, zumbador y Bluetooth tienen una sola entrada, y los pulsadores están en casi todo proyecto sin ser el tema.

### Alternativas descartadas

- **Redefinir Didáctica como «Propuestas para el aula»** (REA, situaciones de aprendizaje, guías): lo que es material de aula ya está en Materiales alumnado y Recursos docentes.
- **Mantener Programación** solo para tutoriales y manuales: el entorno ya lo dicen las etiquetas.
- **Etiquetas de montaje** en vez de subcategorías: no obligan a ponerlas y se ven poco, mezcladas con las demás etiquetas.
- **Cuatro subcategorías** (Solo placa y Componentes externos por separado): al repartir, quedaban con 2 y 3 entradas. Lo que le importa al docente es si hay que construir algo o no.
- **Eliminar la categoría Inteligencia Artificial** para que todas las entradas lleven una sola categoría: se planteó en noviembre de 2026 y de momento se mantiene.

### Cómo se aplicaría

Si el equipo la aprueba, en una rama propia y por *pull request*, porque cambian URL `/category/…/`. La web ya admite subcategorías (campo `parent` de la lista de categorías): el lateral las muestra bajo su categoría y el listado de la categoría incluye las entradas de sus subcategorías.

- `web/src/content/categorias.yaml`: quitar Didáctica, Programación, Hardware, REA e Impresión 3D; añadir Placa y componentes y Manualidades, y poner `parent: proyectos` a las tres subcategorías.
- Comprobación en el *build*: cada proyecto lleva exactamente una subcategoría.
- Front matter de las entradas afectadas (ver el [anexo](#anexo-categorías-y-etiquetas-de-cada-entrada)).
- Etiquetas nuevas y eliminadas: `web/src/lib/etiquetas.ts`, el front matter de sus entradas y la tabla de [«Etiquetas del blog»](modelo-contenido.md#etiquetas-del-blog).
- Redirecciones de las categorías que desaparecen, en [`redirecciones.md`](redirecciones.md#blog-y-rss) y donde estén implementadas en `web/`.
- Criterios en [`modelo-contenido.md`](modelo-contenido.md#listas-de-datos-autores-y-categorías), lista de [`escribir-blog.md`](escribir-blog.md#categorías-y-etiquetas) y decisión en «Decisiones tomadas» del README.
- Comprobar con el *build* y en el servidor de desarrollo: lateral del blog, `/category/<id>/` y redirecciones.

## Dudas

Cuestiones que han surgido después de preparar la propuesta. Salvo que se diga otra cosa, no están en sus tablas: se incorporarán cuando el equipo decida.

### Categoría y entradas de Publicaciones

Planteada por Jose Pujol en noviembre de 2026: ¿tiene sentido que el blog, que es contenido propio, tenga entradas sobre lo que publican otros?

Lo que se ve:

- **Las 6 entradas no tienen contenido propio**: son una línea y un enlace al medio. La de Arganbot, por ejemplo, dice solo que «prueban el primer prototipo de Echidna, y nos escriben el siguiente artículo».
- **Ya están en la página [5.2 Publicaciones](estructura.md)** (`/quienes-somos/publicaciones/`, datos en `web/src/content/publicaciones.yaml`), que reúne unas 27 con fecha, tipo e importancia (ver [`publicaciones.md`](publicaciones.md)).
- **La categoría no se usa desde 2020**: lo publicado después (Educación 3.0, Hisparob, CATEDU, Junta de Andalucía, los TFM de la Universidad Miguel Hernández…) no ha pasado por el blog, y la página hace ese papel.
- **No encaja en el [criterio](#criterio)**: la categoría dice qué tipo de entrada es, y una publicación de otro medio no es una entrada del blog, sino un enlace externo, como los materiales del alumnado.

Propuesta (opción A):

- **Borrar las 6 entradas y la categoría.** Sus URL y `/category/publicaciones/` redirigen a `/quienes-somos/publicaciones/`. El blog queda con 4 categorías.
- **Si sale algo importante** (como el artículo de Educación 3.0), se escribe una entrada propia en Noticias, con comentario nuestro, y se añade a la página 5.2.

Alternativa (opción B): conservar las entradas en Noticias como registro histórico. Se quita la categoría, pero las entradas siguen sin contenido.

Si se aprueba la A, cambia también:

- La tabla de [categorías propuestas](#categorías-propuestas), la de [qué pasa con las categorías actuales](#qué-pasa-con-las-categorías-actuales) y el recuento del inicio de la [propuesta](#propuesta) (5 → 4 categorías).
- La etiqueta **EchidnaWhite** se queda con una sola entrada (Echidna en la OSHWDem 2019), por debajo del mínimo, porque la otra es Juegos Robótica episodio 42. Habría que decidir si se crea igualmente.
- La fila «Entradas sin etiquetas» de las [etiquetas propuestas](#etiquetas-propuestas) pierde Juegos Robótica episodio 42.
- Las 6 URL van a [`redirecciones.md`](redirecciones.md#blog-y-rss).
- Antes de borrar, comprobar que la página 5.2 recoge todo lo de esas entradas (el pódcast de Programar Fácil que citaba la web antigua ya consta como no localizado).

### Entradas sin categoría propia: didáctica y tutoriales

Surgida en noviembre de 2026. Con el mínimo de unas cinco entradas por categoría, dos tipos de entrada se quedan sin categoría propia y, de momento, van a Noticias. Ya está en las tablas de la propuesta: Didáctica se elimina.

- **Artículos sobre didáctica** (teoría, metodología, historia de la robótica educativa): solo hay uno, Construccionismo y STEAM I. La propuesta mantenía Didáctica para dar sitio a los que se escribieran (el «I» anunciaba más), pero es el mismo caso que los tutoriales y se le aplica el mismo mínimo.
- **Tutoriales de configuración** de entornos de programación y de hardware (instalar un entorno, dar de alta una placa, actualizar el firmware…): Programar Echidna con el IDE de Arduino (2020) y una entrada en preparación sobre instalar las placas Echidna (EchidnaShield, EchidnaWhite y EchidnaBlack/2) como placas reconocidas formalmente en el IDE de Arduino. No son proyectos (no hay montaje), ni artículos de didáctica, ni eventos. Con las categorías actuales irían en Programación, que la propuesta elimina.

Los problemas:

- **Noticias pasa a ser «lo que no es proyecto, taller ni publicación»**, y un artículo de reflexión o un tutorial no son noticias. Con tan pocas entradas es asumible.
- **Quien busque un tutorial no lo encuentra desde el lateral**: solo lo orientan las etiquetas (IDE Arduino y la placa).
- **[Mantener Programación para tutoriales](#alternativas-descartadas) no lo resolvía**: Programación es un tema, no un tipo de entrada.

Propuesta:

- **De momento, las dos van a Noticias.** La entrada en preparación va ya en Noticias, con las etiquetas IDE Arduino, EchidnaShield, EchidnaBlack y EchidnaBlack2, para no tener que moverla al aplicar la propuesta.
- **Cuando uno de los dos tipos llegue a unas cinco entradas**, se crea su categoría (Didáctica, Tutoriales o Guías) y se pasan a ella.

Afecta también a la etiqueta **EchidnaWhite**: la entrada en preparación sería la tercera que la usa, y la segunda si se aprueba la opción A de [Publicaciones](#categoría-y-entradas-de-publicaciones), con lo que seguiría cumpliendo el mínimo.

## Pendiente

- [ ] Revisión del equipo en [gobernanza#59](https://github.com/EchidnaEducacion/gobernanza/issues/59) (cambios de noviembre en [este comentario](https://github.com/EchidnaEducacion/gobernanza/issues/59#issuecomment-6663302957)).
- [ ] Decidir con el equipo la duda sobre la [categoría y las entradas de Publicaciones](#categoría-y-entradas-de-publicaciones).
- [ ] Revisar con el equipo las [entradas sin categoría propia](#entradas-sin-categoría-propia-didáctica-y-tutoriales) y crear su categoría cuando lleguen al mínimo.
- [ ] Aplicar la propuesta aprobada y decidir si este documento se conserva o se borra.
- [ ] Añadir la etiqueta App Inventor cuando haya una segunda entrada que la use.

## Anexo: categorías y etiquetas de cada entrada

Categorías y etiquetas actuales, antes de aplicar la propuesta. La última columna es la categoría propuesta, con la subcategoría en los proyectos.

| Entrada | Categorías | Etiquetas | Categoría propuesta |
|---|---|---|---|
| 2017/06 Proyectos y Actividades con Echidna | Proyectos | EchidnaShield | Noticias |
| 2017/08 Programamos: «Echidna, un proyecto para aprender…» | Publicaciones | EchidnaShield | Publicaciones |
| 2017/09 Arganbot: «Probamos la placa de prácticas EchidnaShield» | Publicaciones | EchidnaShield | Publicaciones |
| 2017/09 EchidnaBoat | Proyectos | EchidnaShield | Proyectos › Manualidades |
| 2017/11 Juegos Robótica: «EchidnaShield. El escudo de prácticas…» | Publicaciones | EchidnaShield | Publicaciones |
| 2019/07 La Hora Maker: «Echidna Shield – una placa diseñada…» | Publicaciones | EchidnaShield | Publicaciones |
| 2019/07 Programar fácil: «EchidnaShield el Arduino Shield…» | Publicaciones | EchidnaShield | Publicaciones |
| 2019/11 Concurso PrintBot Echidna | Impresión 3D | EchidnaShield, Servomotor | Noticias |
| 2019/11 Echidna en la OSHWDem 2019 | Talleres | EchidnaShield, OSHWDem | Talleres |
| 2019/11 Obradoiro Tadega 2019 | Talleres | EchidnaShield | Talleres |
| 2020/02 Juegos Robótica episodio 42 | Publicaciones | — | Publicaciones |
| 2020/02 Pulsadores gigantes con MkMk | Proyectos | EchidnaShield, Makey Makey, Música | Proyectos › Manualidades |
| 2020/02 Selector de colores RGB | Proyectos | Snap4Arduino, LED | Proyectos › Placa y componentes |
| 2020/03 Open LED race para 4 jugadores | Proyectos | EchidnaShield, LED, Makey Makey, Juegos | Proyectos › Placa y componentes |
| 2020/04 Programar Echidna con el IDE de Arduino | Didáctica | IDE Arduino | Noticias |
| 2020/06 Echidna Black: Echidna se hace mayor… | Hardware | EchidnaBlack | Noticias |
| 2020/06 El proyecto Echidna crece | Noticias | EchidnaBlack, EchidnaScratch | Noticias |
| 2020/07 Construccionismo y STEAM I | Bloques de construcción, Impresión 3D | EchidnaBlack, EchidnaScratch, Makey Makey, STEAM | Noticias |
| 2020/07 Echidna en el Ártico | Noticias | — | Noticias |
| 2020/07 Marioneta activada por sonido | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, Micrófono, Música, STEAM | Proyectos › Manualidades |
| 2020/08 Elefante con sensores | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, STEAM | Proyectos › Manualidades |
| 2020/08 Medir temperatura con el sensor LM35… | Proyectos | EchidnaBlack, IDE Arduino, Temperatura | Proyectos › Placa y componentes |
| 2020/09 Zombiebot | Proyectos | EchidnaBlack, Snap4Arduino, Servomotor, LED, STEAM | Proyectos › Manualidades |
| 2020/10 EchidnaScratch: El erizo y el gato se hacen amigos | Noticias | EchidnaScratch | Noticias |
| 2020/11 Canal YouTube de EchidnaSTEAM | Noticias | EchidnaBlack, EchidnaScratch, Inteligencia Artificial | Noticias |
| 2020/11 Cubo de Reciclaje Inteligente | Proyectos, Inteligencia Artificial | EchidnaBlack, EchidnaScratch, Inteligencia Artificial | Proyectos › Manualidades + Inteligencia Artificial |
| 2020/11 Echidna en la OSHWDem 2020 | Talleres | EchidnaBlack, EchidnaScratch, Inteligencia Artificial, OSHWDem | Talleres |
| 2020/11 SmartCLASSROOM, Echidna vs COVID-19 | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos | Proyectos › Manualidades |
| 2021/01 Pantalla OLED en Echidna Shield y Black | Hardware | EchidnaShield, EchidnaBlack, IDE Arduino, Joystick | Proyectos › Placa y componentes |
| 2021/03 Encendiendo un LED con App Inventor vía Bluetooth | Didáctica | EchidnaShield, IDE Arduino, LED | Proyectos › Placa y componentes |
| 2021/03 Perrobot | Proyectos | EchidnaBlack, EchidnaScratch, Servomotor, Sensores externos | Proyectos › Manualidades |
| 2021/05 Asistente virtual: Robótica e IA | Proyectos, Inteligencia Artificial | EchidnaScratch, Servomotor, LED, Inteligencia Artificial | Proyectos › Manualidades + Inteligencia Artificial |
| 2021/05 Inteligencia artificial con Echidna | Inteligencia Artificial, Noticias | EchidnaScratch, Inteligencia Artificial | Noticias + Inteligencia Artificial |
| 2022/07 Taller robótica educativa + IA en Cultura Maker 22 | Talleres | EchidnaScratch, Snap4Arduino, Inteligencia Artificial | Talleres |
| 2022/09 Dragón de papel animado con Echidna | Proyectos | Servomotor | Proyectos › Manualidades |
| 2022/09 Posta en marcha e proxectos con EchidnaBlack | Programación | EchidnaBlack | Talleres |
| 2023/05 Robótica educativa + IA con Echidna en #eslibre2023 | Talleres | Inteligencia Artificial, esLibre | Talleres |
| 2024/05 ¡Volvemos a esLibre! | Didáctica, Talleres | EchidnaML, esLibre | Talleres |
| 2024/06 EchidnaML: calling for B tester | Programación | EchidnaML, Inteligencia Artificial | Noticias |
| 2024/10 A programar con Echidna ML | Noticias | EchidnaML, Inteligencia Artificial | Noticias |
| 2024/10 ¡Vuelta a la OSHWDEM! Edición 2024 | Talleres | EchidnaML, OSHWDem | Talleres |
| 2025/03 EchidnaML en MAX Madrid Linux | Noticias | EchidnaML, Inteligencia Artificial | Noticias |
| 2025/03 IA: Alimento de perros y gatos | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Inteligencia Artificial, STEAM | Proyectos › Manualidades + Inteligencia Artificial |
| 2025/05 Barrera de garaje con IA | Didáctica, Programación, Proyectos, Inteligencia Artificial | EchidnaML, Inteligencia Artificial | Proyectos › Manualidades + Inteligencia Artificial |
| 2025/05 Return of the Yodi | Didáctica, Proyectos | Servomotor, Sensor de luz | Proyectos › Manualidades |
| 2025/07 El corazón delator | Didáctica, Proyectos | STEAM | Proyectos › Manualidades |
| 2025/09 Aprendiendo con robots | Didáctica, Noticias | — | Noticias |
| 2025/09 ¡La Tierra se mueve!, un nuevo REA en la sección | Didáctica | Servomotor | Noticias |
| 2025/09 Nace la sección de REAs en Echidna | Didáctica, Noticias | EchidnaScratch, Temperatura | Noticias |
| 2025/10 Happy Halloween! Disfraza tu gato | Proyectos | EchidnaBlack2, EchidnaML, Makey Makey, STEAM | Proyectos › Manualidades |
| 2025/12 Construye un gallo que canta al amanecer | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensor de luz | Proyectos › Bloques de construcción |
| 2026/01 Barrera automática | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Sensores externos | Proyectos › Bloques de construcción |
| 2026/01 Coche teledirigido con el joystick | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, Joystick | Proyectos › Bloques de construcción |
| 2026/01 Echidna y construcciones: Estatuas musicales | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Micrófono, Música, Juegos | Proyectos › Bloques de construcción |
| 2026/01 Helicóptero con acelerómetro | Bloques de construcción, Didáctica, Programación, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Juegos | Proyectos › Bloques de construcción |
| 2026/01 Manual de EchidnaBlack2 y EchidnaML | Didáctica, Hardware, Noticias, Programación | EchidnaBlack2, EchidnaML, Inteligencia Artificial | Noticias |
| 2026/03 Arte cinético con Echidna | Didáctica, Proyectos | STEAM | Proyectos › Manualidades |
| 2026/03 Caja fuerte | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaML, Servomotor, Makey Makey, Inteligencia Artificial | Proyectos › Bloques de construcción + Inteligencia Artificial |
| 2026/05 Andalucía, del alba al anochecer | Didáctica, REA | EchidnaBlack2, EchidnaML, Sensor de luz | Noticias |
| 2026/05 El Laboratorio del Dr. Frankestein | Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, LED, Makey Makey | Proyectos › Manualidades |
| 2026/05 Rotógrafo | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, Servomotor, STEAM | Proyectos › Bloques de construcción |
| 2026/10 ¡Estrenamos nueva web! | Noticias | — | Noticias |
| 2026/10 Tendedero automático (borrador) | Bloques de construcción, Didáctica, Proyectos | EchidnaBlack2, EchidnaML, Servomotor, Sensores externos, STEAM | Proyectos › Bloques de construcción |
| 2026/10 ¡Truco o trato con EchidnaBricks! | Bloques de construcción, Didáctica, Proyectos, Inteligencia Artificial | EchidnaBlack2, EchidnaML, Inteligencia Artificial, Servomotor, STEAM | Proyectos › Bloques de construcción + Inteligencia Artificial |
