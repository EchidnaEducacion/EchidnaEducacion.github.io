---
title: ¡Truco o trato con EchidnaBricks!
description: Calavera de bloques que, con un modelo de texto de LearningML y un servomotor en la EchidnaBlack2, decide si nos merecemos un trato o un buen susto.
date: 2026-10-28
author: jorge-lobo
categories: [bloques-de-construccion, didactica, proyectos, inteligencia-artificial]
tags: ["EchidnaBlack2", "EchidnaML", "Inteligencia Artificial", "Servomotor", "STEAM"]
image: ./calavera.png
imageAlt: "El erizo de Echidna con una pieza de construcción, junto a la calavera de Halloween hecha con bloques: tiene los ojos rojos y, al lado, el servomotor que mueve el cartel de la parte superior."
draft: true
---

Se acerca Halloween y no podíamos dejar pasar la ocasión de preparar un proyecto terrorífico. Esta vez os proponemos construir esta calavera. Cuando llamamos para pedir caramelos y preguntamos «¿Truco o trato?», la calavera decide si la respuesta es amable o si, por el contrario, se merece un buen susto.

Este proyecto no funciona buscando palabras concretas en la respuesta para poder clasificar, sino que utiliza un modelo de inteligencia artificial entrenado en [LearningML](/ecosistema/echidnaml/empezar-learningml/) para clasificar textos. El modelo distingue entre dos clases, TRUCO y TRATO, a partir de ejemplos de respuestas amables («Coged los caramelos que queráis», «Os lleno la bolsa ahora mismo»…) y de respuestas poco amables («Largo de mi jardín», «No pienso daros nada»…).

Al entrenar, el modelo no guarda las frases: aprende de ellas. Nadie le dice qué es una respuesta amable; lo descubre él solo a partir de los ejemplos. Por eso, después puede clasificar frases que nunca ha visto. A esto se le llama generalización. Eso sí, solo aprenderá bien si los ejemplos que le damos son buenos y variados.

El funcionamiento es sencillo: si la respuesta es amable, el [servomotor](/ecosistema/echidnablack2/complementos/servomotor-posicion/) conectado a D8 gira a 90º y el cartel superior muestra «Trato». Si no lo es, el servomotor gira a 150º, el cartel pasa a la posición de «Truco» y… ¡los ojos de la calavera se ponen rojos! No hace falta ningún LED para conseguirlo: el mismo giro del servomotor coloca unos bloques rojos justo detrás de los huecos de los ojos. Un único movimiento, dos efectos.

Os dejamos los [datos de entrenamiento para LearningML](https://github.com/EchidnaEducacion/Bricks/blob/main/Calavera/truco-o-trato.json), con veinte ejemplos de cada clase. Como posibilidad de ampliación, os proponemos mejorar el modelo, que tiene mucho margen. Por ejemplo, ¿qué pasa con frases como «No me queda chocolate, pero tengo gominolas», que empieza con un «no» pero es de lo más amable? Probad respuestas que confundan a la calavera, añadid nuevos ejemplos y volved a entrenar. Es una forma estupenda de descubrir con el alumnado cómo aprende una máquina y por qué la calidad de los datos es tan importante.

Como ya es costumbre, hemos preparado una [guía de construcción](https://github.com/EchidnaEducacion/Bricks/blob/main/Calavera/calavera.pdf) para que podáis reproducir el modelo paso a paso, junto con la [lista de piezas](https://github.com/EchidnaEducacion/Bricks/blob/main/Calavera/calavera.csv).

![Animación del montaje de la calavera, pieza a pieza.](/2026/10/truco-o-trato/calavera.gif)

Y también os dejamos un vídeo en el que podéis ver a la calavera repartiendo tratos… y trastadas:

[Calavera de Halloween con Echidna](https://youtu.be/qUjEMkBpj54)

En esta imagen vemos el programa en EchidnaML. El personaje pregunta «¿Truco o trato?» y espera la respuesta. A continuación, el bloque de LearningML clasifica el texto: si el resultado es TRUCO, mueve el servomotor a 150º y piensa «Umm… Se merece una trastada…»; si no, lo lleva a 90º y dice «¡Gracias! ¡Feliz Halloween!».

![Programa de la calavera en EchidnaML: al hacer clic en la bandera, por siempre, pregunta «¡Truco o trato!» y espera; si clasificar texto de la respuesta es TRUCO, el servo de D8 va al ángulo 150 y piensa «Umm… Se merece una trastada…» durante 3 segundos; si no, va al ángulo 90 y dice «¡Gracias! ¡Feliz Halloween!» durante 2 segundos.](./programa.png)

Aquí tenéis el [archivo .sb3](https://github.com/EchidnaEducacion/Bricks/blob/main/Calavera/calavera.sb3) con la programación y el [fondo de la puerta de Halloween](https://github.com/EchidnaEducacion/Bricks/blob/main/Calavera/puerta-halloween.svg) para el escenario.

Por último, os recordamos que estamos deseando saber qué estáis haciendo con vuestras echidnas. Si os apetece contárnoslo… ¡[poneos en contacto con nosotros](/contacta/)! Y, sobre todo… ¡Feliz Halloween!
