---
title: "Añadir las placas Echidna al IDE de Arduino"
description: "Cómo añadir las placas Echidna al gestor de placas del IDE de Arduino para elegirlas por su nombre al programarlas."
date: 2026-11-09
author: xdesig
categories: [noticias]
tags: ["EchidnaShield", "EchidnaWhite", "EchidnaBlack", "EchidnaBlack2", "IDE Arduino"]
image: ./echidnas.jpg
imageAlt: "Placas EchidnaShield, EchidnaWhite y EchidnaBlack."
draft: true
---

Instalaremos las placas Echidna (**EchidnaShield**, **EchidnaWhite** y **EchidnaBlack/2**) como placas reconocidas formalmente en el IDE de Arduino.

Aunque las placas Echidna son 100% compatibles con las tarjetas estándar del ecosistema Arduino (como Arduino Uno o Arduino Nano), de hecho las diseñamos para que así fuera, resulta mucho más cómodo y reduce los errores en el aula o taller ver directamente el nombre exacto de la placa que estás utilizando dentro del menú de selección del IDE de Arduino.

## Pasos para instalar las placas Echidna

1. **Añadir la URL del gestor de tarjetas adicionales:**

   Abre el IDE de Arduino y dirígete a **Archivo > Preferencias** (o *Arduino IDE > Settings* en macOS).

![Menú Archivo del IDE de Arduino con la opción Preferencias.](./archivo-preferencias.jpg)

En el campo **Gestor de URLs Adicionales de Tarjetas**, añade el enlace del archivo JSON oficial ubicado en el repositorio de Echidna:

[https://raw.githubusercontent.com/EchidnaEducacion/recursos/master/electronica/Boards_Arduino/package_echidna_index.json](https://raw.githubusercontent.com/EchidnaEducacion/recursos/master/electronica/Boards_Arduino/package_echidna_index.json)

(Si ya tienes otras URLs escritas en esa casilla, puedes añadir esta separándola con una coma o un Intro).

![Ventana de URLs adicionales de gestor de placas con la dirección del JSON de Echidna.](./preferencias.jpg)

Aceptaremos, y ya podremos instalar las placas en el gestor de placas

![Gestor de placas con el paquete Echidna AVR Boards, que incluye EchidnaBlack, EchidnaShield y EchidnaWhite, listo para instalar.](./gestor-placas.jpg)

**Resultado:**

![El IDE de Arduino con la placa EchidnaBlack seleccionada.](./resultado.jpg)

Créditos:

El código json se ha refactorizado usando IA.
