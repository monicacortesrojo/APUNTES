# **ARRAYS**

Una lista de expresiones separadas por comas entre corchetes.
Usaremos una array cada vez que quereamos garantizar el orden de algo.

    const emptyArr = []
    const arr = (1 + 2)
    const matrix=
    [[1,2,3],
    [4,5,6],
    [7,8,9]];

_Una array dentro de otra array_

En una array podemos meter valores undefined

`const sparseArr =[1,,,,5]`
<br>

### **INICIALIZADORES DE ARRAY** <br>

    const arr = [1,2,3, -1.2];
    const p = {x:2.3, y: arr[3]};
    q.x acceso

<br>

Carece de tipos, dentro puede haber cualquier cosa.
Objetos u otros arrays. Pudiendo ser un array de arrays, filas y columnas
Tienen un base 0, y es dinámico, no hace falta declarar su tamaño
Su longitud se nombra con length
<br><br><br>
![Arrays](img/arrA_arrB.PNG)
<br>

> <br>
>
> # **¿Cómo se puede crear un Array?**
>
> Literal de array : [ ]<br>
> Split operator : ...<br>
> Array()<br>
> Array.of<br>
> Array.from:<br>
> Espera recibir un iterable o un objeto parecido a un array,
> Array.from(original); [...original] <br><br> >![Arrays](img/array_from.PNG) >![Arrays](img/arrayfrom_2.PNG)
>
> let d = Array.of() retorna un array vacia
>
> let e = Array.of(10); [10]
>
> <br>

<br>
<br>

    const base = 1024;
    const table = [base, base + 1, base + 2]

    const x = [1, , 3];<br>
    const y = [, ,]; un array con 3 posiciones vacias<br>

    const a = [1,2,3];<br>
    const b = [0, ...a, 4]; [0,1,2,3,4]<br>

    const original = [1,2,3];<br>
    const copy = [...original];<br>

    copy[0] = [0];<br>
    original[0];<br>

`const digits = [..."0123456789"];` me convierte este array en una array con strings diferentes
<br>
<br>
<br>

## **SET**

El set no admite valores duplicados y es iterable (IVESTIGAR MAS)

`let a = new Array();` esto crea un array vacio MEJOR USAMOS LITERALES

`const roll = Array.from(new Array(4), () => Math.floor(Math.random()\* 6) + 1)`
<br><br>

## **LENGTH**

`const a = [1,2,3,4,5] a.length = 3 a = [1,2,3]`

El length es un invariante y no lo debemos tocar
<br>
<br>

## **METODOS DE ARRAYS**

**a.push:** Añadimos elementos al final del array<br>
**a.unshift:** Añadimos elementos al principio del array<br>
**a.pop:** Quita el último elemento y te lo devuelve<br>
**a.shift:** Quita el primero y te lo devuelve<br>
**a.includes:** Te dice si algo está incluido dentro de un array<br>

**delete a[1]**: borra la posicion 1 pero no varia el length

**a.splice** coge la posición y te devuelve el elemento<br><br><br>
![Arrays](img/a.splice.PNG)
<br><br><br>

## **ITERANDO ARRAYS**

### **FOR OF**

Vale para iterar arrays a strings pero nos quedamos sin los índices.
<br><br>

![for_of](img/for_of.PNG)
<br>

![for_of_ex](img/for_of_ex.PNG)
<br>

![for_of_ex](img/for_of_ex2.PNG)
<br><br>

### **MÉTODOS DE ITERACIÓN DE UN ARRAY**

Todos estos aceptan una función y la invocan por lo menos una vez, normalmente esta función es invocada con cada elemento del array.

### **FOR EACH**

**arr.forEach** nos saca todo lo que hay en este array tantas veces como elementos haya, recorre pero no devuelve nada.
<br><br>

## **MAP**

Le pasa cada elemento del array pero devuelve otro array
ESTE RECORRE Y DEVUELVE UNA NUEVA ARRAY PERO SIN MODIFICAR LA PRIMERA.<br><br>
![Arrays_map](img/map.PNG)
<br><br>

![Arraysmap](img/mapN.PNG)
<br><br>

![mappokemos](img/MAP_POKEMONS.PNG)
<br>
<br>

## **FILTER**

Nos permite filtrar, retorna true o false.

`const a = [5,4,3,2]; a.filter((value) => value < 3); 2`

FILTER DEVUELVE UN ARRAY
<br><br>

![Arrays_filter](img/filter.PNG)

## **FIND**

TE BUSCA UN ELEMENTO Y TE LO DEVULVE, EL PRIMERO QUE CUMPLA LA CONDICIÓN
<br><br>

## **EJEMPLO INGREDIENTES**

    `const ingredientes = ["🌽", "🐮", "🐔"];
    const cocinar = (ingrediente) => {
    switch (ingrediente) {
    case "🌽":
    return "🍿";
    case "🐮":
    return "🍔";
    case "🐔":
    return "🍗";}};
    const esVegetariano = (ingrediente) => {
    switch (ingredientes) {
    case "🌽":
    return true;
    case "🐮":
    return false;
    case "🐔":
    return false;}};
    const esPollo = (ingrediente) => ingrediente === "🐔";
    ingredientes.map(cocinar); // [ "🍿", "🍔", "🍗" ]
    ingredientes.filter(esVegetariano); // ["🌽"]
    ingredientes.find(esPollo); // "🐔"`

## **REDUCE**

Ver enlace https://www.freecodecamp.org/news/reduce-f47a7da511a9/

Metodo funcional del array, recorre el array y sus elementos y genera un único valor

El 0 final es el acumulador incial, y el next es el 1, los suma, despues el acc es 1 y next 2 y los suma, y así va sumando todo.<br><br>

![Arrays_reduce](img/reduce1.PNG)
<br>

![Arrays_reduce](img/reduce_pokemons.PNG)


