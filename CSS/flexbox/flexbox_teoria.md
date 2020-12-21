# **FLEXBOX**

## Introducción

<br>

*https://css-tricks.com/snippets/css/a-guide-to-flexbox/*
<br>
**Juegos:**
<br> *https://flexboxfroggy.com/#es*
<br> *http://www.flexboxdefense.com/*
<br> <br>

Desde que flexbox es un módulo propio y no una simple propiedad, incluye un montón de propiedades. Algunas de ellas deben estar impuestas en el container (el elemento padre conocido como "flex container"), donde las propiedades que se le hayan dado a él, serán aplicadas en los hijos (llamados "flex items").

Si la maquetación estandar está basada en direcciones de flujo en línea y en bloque, la maquetación flex está basada en "dirección flexible del flujo".

Los itemes serán distribuidos siguiendo los ejes principales (main axis), desde el main-start hasta el main-end, o los ejes cruzados (desde cross-start hasta cross-end).

![Explicación container](1.svg)

<br>
<br>

> ### **- Main axis**
>
> De un flex-container es el eje principal a lo largo del cual se colocan los flex items. El main axis no es necesariamente horizontal, esto depende de la propiedad flex-direction.
>
> <br>
>
> ### **- Main-start | Main-end**
>
> Los flex items están colocados dentro del contenedor empezando desde main-start y yendo hasta el main-end.
>
> <br>
>
> ### **- Main size**
>
> La anchura y la altura de un flex item, da igual cual sea la main dimension, es el tamaño del item. No es el contenedor el que marca la dimensión, sino que es el contenido de lo que haya dentro del item.
>
> <br>
>
> ### **- Cross axis**
>
> El eje perpendicular del main-axis es llamado cross-axis (eje transversal). Su dirección depende de la dirección del main axis.
>
> <br>
>
> ### **- Cross-star | cross-end**
>
> Las flex lines son rellenadas con los items y son colocadas dentro del container empezando en el lado del cross-start y yendo hasta el lado del cross-end.
>
> <br>
>
> ### **- Cross size**
>
> La anchura o la altura de un flex item, dando igual cual sea la cross dimension, es el tamazo del item. El tamaño del cross del item es el que marca la cross dimension.
> <br> > <br>

<br>
<br>

# **Propiedades del padre _(flex container)_**

<br>

![container](3.svg)

<br>
<br>

> <br>

> ### **-DISPLAY**
>
> Esta propiedad define un flex container, inline o block, dependiendo de el valor dado. Esto permite un contexto flexible para todos sus hijos directos.
>
> `.container { display: flex;}` _Para contenido en bloque_
>
> `.container { display: inline-flex;}`_Para contenido en línea_ ><br><br>

<br>

> <br>

> ### **- FLEX-DIRECTION**
>
> ![direction](2.svg)
>
> Esta establece el main-axis, así define la dirección del flex item que están contenidos en el flex container. Flexbox es aparte de un envoltorio, un concepto de dirección única. Piensa en los flex items, como objetos distribuidos en filas y columnas.
>
> `.container { flex-direction: row | row-reverse | column | column-reverse;}`
>
> <br>
>
> - **row (por defecto):** de izquierda a derecha con "ltr/ left to right" y de derecha a izquierda con "rtl/ right to left"
>
> - **row-reverse:** de derecha a izquierda con "ltr/ left to right" y de izquierda a derecha con "rtl/ right to left"
>
> - **column:** lo mismo que row pero de arriba a abajo
>
> - **column-reverse:** lo mismo que row-reverse pero de abajo a arriba.
>   <br><br>

<br>

> <br>

> ### **- FLEX-WRAP**
>
> ![direction](5.svg)
>
> Por defecto, los flex items van a intenar caber en una sola línea. Tu puedes cambiar esto y permitir que los items se ajusten como necesiten dentro del contenedor.
>
> `.container {flex-wrap: nowrap | wrap | wrap-reverse;}`
>
> - **nowrap (por defecto):** todos los flex items estarán en una línea, esto puede hacer que el contenedor se desborde.
>
> - **wrap:** los flex items serán colocados en múltiples líneas, la dirección será marcada por flex-direction.
>
> - **wrap-reverse:** los flex items serán colocados en múltiples líneas, en la dirección contraría que marque la flex-direction.>
>   <br><br>

<br>

> <br>

> ### **- FLEX-FLOW**
>
> Es una abrebiatura de las propiedades flex-direction y flex-wrap, las cuales juntas definen los main y cross ejes del container. Su valor por defecto es row nowrap.
>
> `.container {flex-flow: column wrap;}` > <br><br>

<br>

> <br>

> ### **- JUSTIFY-CONTENT**
>
> <br>
> Esta propiedad define la alineación el el main-axis. Esto ayuda a distribuir el espacio libre adicional que sobra cuando los flex-items que hay en una línea son inflexibles o su tamaño máximo no llega a ocupar el ancho del contenedor. También ejerce cierto control sobre la alineación de los elementos cuando estos desbordan la línea.
>
> <br>
> <br>
>
> `.container {justify-content: flex-start | flex-end | center | space-between | space-around |space-evenly | start | end | left | right ... + safe | unsafe;}`
>
> ![justify](6.svg)
>
> - **flex-start (por defecto):** los items son llevados al inicio desde donde comienza la flex-direction, por defecto de izquierda a derecha.
>
> - **flex-end:** los items son llevados al final donde acaba la flex-direction, por defecto de derecha a izquierda.
>
> - **start:** los items son llevados al inicio según la dirección marcada por writting-mode.
>
> - **end:** los items son llevados al final según la dirección marcada por writting-mode.
>
> - **left:** los items son llevados a la izquierda del container, a no ser que no siga la flex-direction, en ese caso se comportará como start.
>
> - **right:** los items son llevados a la derecha del container, a no ser que no siga la flex-direction, en ese caso se comportará como start.
>
> - **center:** los items serán centrados a lo largo de la línea.
>
> - **space-between:** los items son igualmente distribuidos en la línea, el primer item estará en el principio de la línea, y el último estará al final de la línea.
>
> - **space-around:** los items son igualmente distribuidos en la la línea con el mismo espacio alrededor de todos. Los items centrales sumarán su propio margen con el que va siguiente, mientras que el primero y el último tienen un lado que empieza desde 0.
>
> - **space-evenly:** en este caso se los espacios son iguales, no se suma un margen con el del item siguiente sino que son espacios independientes.
>
> _Los valores más seguros para todos los navegadores son flex-start, flex-end y center_
