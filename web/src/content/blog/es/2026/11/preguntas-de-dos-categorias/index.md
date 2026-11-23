---
title: Preguntas de dos categorías
description: Juego de preguntas con bloques de construcción para clasificar palabras con los botones de la EchidnaBlack2; un servomotor señala la respuesta.
date: 2026-11-30
author: jorge-lobo
categories: [bloques-de-construccion]
tags: ["EchidnaBlack2", "EchidnaML", "Servomotor", "LED", "Juegos"]
image: ./preguntas-dos-categorias.png
imageAlt: "El erizo de Echidna con una pieza de construcción, junto al juego de preguntas: una base de piezas grises y amarillas con el servomotor y su indicador en el centro."
draft: true
---

En este proyecto os proponemos construir un juego de preguntas para repasar en clase. En pantalla aparece una palabra y hay que decidir a cuál de las dos categorías pertenece pulsando uno de los dos botones de la EchidnaBlack2. En nuestro ejemplo repasamos el aparato locomotor: cada palabra es un hueso o un músculo.

El funcionamiento es muy fácil: si la palabra es un hueso, hay que pulsar el [pulsador](/ecosistema/echidnablack2/pulsadores/) SR; si es un músculo, el SL. Después de cada respuesta, el [servomotor](/ecosistema/echidnablack2/complementos/servomotor-posicion/) conectado a D8 mueve un indicador que señala la categoría correcta: gira a 120° para los huesos y a 60° para los músculos. Al mismo tiempo, los [LED](/ecosistema/echidnablack2/leds/) de la placa nos dicen si hemos acertado o fallado encendiendo el LED verde o el rojo.

El indicador siempre señala la categoría correcta, tanto si hemos acertado como si no. Así, podemos conocer la respuesta correcta de una forma muy visual, lo que también nos permite aprender de los errores.

Esta actividad nos puede servir para repasar cualquier tema que se pueda dividir en dos grupos: animales vertebrados e invertebrados, sustantivos y adjetivos, números pares e impares… Basta con cambiar las palabras de las listas en el programa. Como posibilidad de ampliación, os proponemos que sea el propio alumnado quien prepare las listas de preguntas, ampliándolas lo que considere necesario, y las intercambie con sus compañeros y compañeras. La preparación de las preguntas es también una forma estupenda de repasar.

Como en anteriores ocasiones, hemos preparado una [guía de construcción](https://github.com/EchidnaEducacion/Bricks/blob/main/Preguntas%202%20categor%C3%ADas/Preguntas2C.pdf) para que podáis reproducir el modelo paso a paso.

![Animación del montaje del juego de preguntas, pieza a pieza.](/2026/11/preguntas-de-dos-categorias/preguntas-dos-categorias.gif)

Y también os dejamos un vídeo en el que podéis ver el juego en funcionamiento:

[Preguntas de 2 categorías con EchidnaBlack2 y bloques de construcción](https://youtu.be/caS9wqFPREo)

En esta imagen vemos el programa en EchidnaML. Al pulsar la bandera verde, los dos primeros scripts vacían y vuelven a llenar las listas de huesos (Radio, Peroné, Cráneo, Costilla y Vértebra) y de músculos (Tríceps, Glúteo, Trapecio, Gemelo y Abdominales), para que cada partida empiece con todas las palabras.

![Programa del juego en EchidnaML: dos scripts llenan las listas Categoría 1 (huesos) y Categoría 2 (músculos); el tercero, por siempre, pone el servo de D8 a 90, elige al azar una categoría y una palabra de su lista, espera a que se pulse SL o SR, mueve el servo a 120 (huesos) o 60 (músculos), enciende el LED verde o el rojo, borra la palabra y apaga los LED.](./programa-preguntas.png)

El tercer script es el bucle principal. Tras saludar, coloca el servomotor a 90°, en el centro, y elige al azar la categoría de la siguiente pregunta. Después escoge una palabra al azar de esa lista y el personaje la dice. Espera a que se pulse SL o SR, comprueba la respuesta, mueve el indicador y enciende el LED que corresponda durante 3 segundos. Por último, borra de la lista la palabra preguntada para que no se repita y apaga los LED.

Cuando a una lista ya no le quedan palabras, el programa sigue preguntando solo de la otra. Cuando se vacían las dos, el juego termina y el indicador se queda en el centro. Como las preguntas se eligen según la longitud de cada lista, podemos añadir o quitar palabras sin tocar el bucle principal.

Aquí tenéis el [archivo .sb3](https://github.com/EchidnaEducacion/Bricks/blob/main/Preguntas%202%20categor%C3%ADas/Preguntas2C.sb3) con la programación.

Por último, os recordamos que estamos deseando saber qué estáis haciendo con vuestras echidnas. Si os apetece contárnoslo… ¡[poneos en contacto con nosotros](/contacta/)!
