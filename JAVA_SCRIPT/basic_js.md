# TEMPLATES STRINGS

const name = "Moni";
const greeting = `Hello ${name}.`;

const message ="Saludos desde casa"
const name ="Moni";
console.log(`Hola: ${name}!

${message}
`);

\0 es un null
\t tabulación
\back slash, es para hacer que se muestre lo que viene a continuación

DENTRO DE UN TEXTO ENCONTRAR PATRONES

> ### **EXPRESION REGULAR REGEXP**
>
> RegExp, son literales, definen patrones
> PARA CREAR REGEX
> www.regex101.com

<br>

> ### **BOOLEANO**
>
> OPERADORES asi generamos booleanos
> Estructuras de control, nos sirve para que el código vaya por un lado o por otro

a !== null , para saber si algo es null o undefined
<br>

> #### **3 OPERADORES BOOLEANOS**
>
> - && AND, EVALUA UN VALOR VERDADERO true&&true solo si los dos son verdaderos, sino sería falso
> - || OR, EVALUA UN VALOR VERDADERO SI UNO DE LOS DOS ES VERDADERO Y SI LOS DOS SON FALSOS EVALUA >FALSO
> - ! NOT, NIEGA

true; verdad
false; falsedad

son el resultado de una comparación

myVar === 5;

if (myVar === 5) {
myVar2++
} else {
myVar--
}

Cualquier valor puede ser convertido en booleano

FALSE
undefined;
null;
0 - 0;
NaN;

if ()

! NEGACIÓN
const x = 1;
!(x === 0);

(x === 0 && y === 0) || !(z === 0)

API LO QUE TE OFRECE UNA FUNCIÓN

NULL, AUSENCIA DE VALOR | CASI SIEMPRE ES MEJOR USAR NULL, PARA INDICAR AUSENCIA DE VALOR, SIEMPRE COMPARAMOS CON == NO CON ===, PERO PARA EL RESTO SI USAMOS ===
typeof null

UNDEFINED, AUSENCIA DE VALOR, MÁS PROFUNDO, CUANDO NO INICIALIZAMOS UNA VARIABLE
ES EL VALOR DE RETORNO DE LAS FUNCIONES QUE NO RETORNAN NADA
ES UNA CONSTANTE GLOBAL

NULL Y UNDEFINED NO HAY MÉTODOS

LOS SÍMBOLOS, son únicos, si no conoces el símbolo no puedes acceder al objeto
Mecanismo de extensión de lenguaje
son proppiedades que no son strings, propiedades de un objeto, que les aporta privacidad
Los objetos fundamentales, son una colección no ordenadas de propiedades const o = { foo : 1};
o.foo

const strname ="string name";
const symbolname

OBJETO GLOBAL
Sus propiedades sirven como identificad

window.console.log , como es global siempre está ahí y no hace falta que lo pongamos
todo que está dentro del objeto global es una palabra reservada
Cada navegador puede meter unas funciones en window
window se ha unificado como globalThis, nosotros vamos a usar globalThis

JAVA SCRIPT ISOMÓRFICO, que es conpatible con NODE y con los navegadores

HAY UNA DIFERENCIA ENTRE PRIMITIVOS Y OBJETOS
Los primitivos son inmutables, no se puede cambiar
STRINGS SON ARRAYS DE CARACTERES
Un metodo hace que de un string me devuelvas otro string
dos strings solo son iguales si tienen exactamente los mismos caracteres

Los objetos son tipos referenciales,
Los valores objeto son referencias, y solo son iguales si referencian el mismo objeto subyacente

LA DECLARACIÓN TIENE QUE ESTAR ANTES DEL USO
let variable
const constante
const te obliga a inicializar, y no puede mutar

scope la región donde estan definidos let y const {}
nuestro scope global es el archivo, pero normalmento limitaremos su uso entre {}

let y const, no pueden hacer referencia al mismo objeto, osea no puede haber un let x = 1, const x = 1

Hoisting
Capacidad de acceder a una variable antes de ser declarada, esto pasaba antes de ecma script 6
https://www.udemy.com/course/the-web-developer-bootcamp/

# EXPRESIONES

¿Que es una expresion? Es una frase evaluada (evaluar es lo que pintta, el valor que tiene algo, ejecucion del código, resolución)para producir un valor, una constante es una expresión por ejemplo
Expresiones primarias, son literales o constantes o palabras del lenguaje, o palabras reservadas
1.43
"hello"
/pattern/g
this - no es constante, retorna el objeto del que el método ha sido invocado
referencia a las var/const const i = 0;

ARRAY, una lista de expresiones separadas por comas entre corchetes
Usaremos una array cada vez que quereamos garantizar el orden de algo

const emptyArr = []
const arr = (1 + 2)
const matrix=
[
[1,2,3],
[4,5,6],
[7,8,9]
]

Una array dentro de otra array

En una array podemos meter valores undefined
const sparseArr =[1,,,,5]

INICIALIZADORES DE ARRAY
const arr = [1,2,3, -1.2];
const p = {x:2.3, y: arr[3]};

q.x acceso

----------------------------HACER UN RECTANGULO----------------------------------------
LOS OBJETOS LOS USAREMOS PARA MODELAR EL MUNDO REAL
const rectangle ={
upperLeft: { x:2, y:2},
lowerRight: { x: 4, y:4 },
}

**\*\*\*\***\*\*\*\***\*\*\*\***\***\*\*\*\***\*\*\*\***\*\*\*\***DEFINICIÓN DE FUNCIONES

function square = function (x) {
return x \* x;
}

x = 4;

cont sum = fuction (x, y){
return x + y;
}

ARROW FUCTION
const sum = (x, y) => x + y;

**\*\***\*\*\*\***\*\***\***\*\***\*\*\*\***\*\***EXPRESIONES DE ACCESOS A LAS PROPIEDADES DE OBJETOS
const o = { x: 1, y: {z: 3 } };
const a = [o, 4, [5, 6]];

o.x;
o.y.z;
o["x"];
a[1];
a[2][1];
a[0].x;
a[0.y];

                ***************************acceso condicional (accedes si existe)************************************

expresion ?.identificador
expresion ?.[expresion]

let a = {b: null};
a.b?.c.d;

const a = {y: {z:null}, x: 1, }

si a es null o undefined y b no existe no accedas a c o d, pero si existe si accede, porque nos da typeError, pero si accedemos con ? evitamos el typeError
si no existe te lo evalua como undefined

\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***CONVERSIÓN DE TIPOS IMPLICITAS
java script es muy flexible
Si java script espera un string todo lo que vaya dentro te lo convertira

"7" \* "3"
21, convierte los strings en números
true == 1
true
false == 0
true
"" == 0
false

NOSOTROS SIEMPRE VAMOS A USAR ===
NUNCA USAMOS ==
Solo para x == null

CONVERSIÓN EXPLICITA

Number ("3")

const n = Number("3")
const n = 2
n.toString ()
"2"

n.toFixed (5): reducir los decimales a 5, es para convertir un string númerico
parseInt, te convierte a strings a números y redondea
parseInt ("3.2")

DE LOS OBJETOS
BOOLEANO, TODO OBJETO CONVIERTE A TRUE
STRING, PRIMERO CONVIERTE A PRIMITIVO, LLAMA a toString

console.log log es el metodo del objeto console

IMBOCAR

calculadora.sum (1, 2)
sum (1, 2)

LAS EXPRESIONES DE CREACIÓN DE OBJETOS NO FUNDAMENTALES
const o= {} ESTE ES FUNDAMENTAL

Para inicializar las propiedades del objeto invocamos Date, x ejemplo

const d = new Date

\*/

//EJER 1

function randomInt() {
return Math.round(Math.random() _ 100);
return min + Math.floor(Math.random() _ (max - min + 1));
}

console.log((randomInt()));

//EJER 2

function toDecimals(number, decimals) {
return number.toFixed(decimals);
}

//EJER 3

fuction isNumber(arg) {
return typeof Number.parseInt(arg, 10) === "number";
}

fuction isNumber(n) {
return typeof Number.parseInt(n, 10) === "number";
}

fuction isNumber(n) {
return !isNaN(parseFloat) === "number";
}

//EJER 4

function pythagorean(a, b) {
return Math.hypot(a, b);
}

console.log(pythagorean(3, 4));

//EJER 5

function round5(num) {
return Math.cell(num / 5) \* 5;
}

//EJER 6

fuction round(num, roundNum) {
return parseFloat(num.toFixed(roundNum));
}

//EJER 7

function round(num, roundNum) {
return (x / 100) \* y;
}

//EJER 8
fuction radians \* (100 / Math.PI)

//EJER 9
function sqrt2Unt(num) {
return parseInt(Math.sqrt(num));
}

/\*
OPERADORES

typeof 1
delete: tenemos un objeto con una propiedad x
delete o.x te borra x dentro de o

los operadores tienen un orden de preferencia
Se categorizan por el número de operandos que esperan, aridad, la multiplicacion por ejemplo tiene 2 1\*4

OPERADOR TERNARIO O CONDICIONAL, ¿es esto cierto? entonces haz esto sino esto otro
opera con 3 expresiones en una sola
x > 1 ? console.log("mayor") : console.log("menor");
Esperan que sus operandos sean de un solo tipo, 3 \* "5", espera un resultado numérico, pero se van comportando diferente dependiendo de que operandos le des

EFECTOS SECUNDARIOS
Operador de incremento x++, estos tienen un efecto sobre el programa
x--
Hay operadores textuales y otros solo de notación, aridad numero de operandos sobre los que actuan
PREFERENCIA BÁSICA DE MATEMÁTICAS
tiene más preferencia la multiplicación que la suma, si queremos que tenga preferencia la suma ponemos `parentesis
!(3 ** 2) No 3 elevado al cuadrado
preferencia de izq a derecha, un operador tiene
OPERADORES ARIGMETICOS
2**3 exponenciación, TIENE UNA PREFERENCIA MÁS ALTA QUE TODOS LOS DEMÁS, FUNCIONA DE DCHA A IZQ , ANTES TENÍAMOS Math.pow(2, 3)8
2\*3
5/2
10%5 modulo OBTIENE EL RESTO DE UNA DIVISIÓN
2+2 LOS QUE
2-2
TODOS ESTOS MENOS LA SUMA CONVIERTEN A NÚMEROS

PUNTO FLOTANTE, TODAS LAS DIVISIONES TIENEN ESTO, QUE ES 2.0 AUNQUE NOS SIMPLIFIQUE A 2
0/0 NaN

LOS OPERADORES NO NUMÉRICOS CONVIERTEN A NAN

LA SUMA
Realiza una conversión del tipo, aunque da prioridad a la concateción de strings

null es false y false numericamente es un 0
entonces
2 + null = 2
undefined es nan
2 + undefined = nan

OPERADORES ARITMÉTICOS UNARIOS
Trabajan con un operador
son asociativos de izq a dcha

PREINCREMENTAR
++1 = 2

POST INCREMENTAR
let n = 1;
let m = n++;

n = 2
m = 1

COMO ESTÁ POST INCREMENTADO M NO RECIBE LA INCREMENTACIÓN COMO EN LA PRE

SOLO CONVIERNTE EN NÚMEROS

let x = "1"
++x
2

let y = 1
--y 0
y-- -1
y -2

EXPRESIONES RELACIONALES
EVALUAN BOOLEANOS

OPERADOR DE IGUALDAD E INEGUALDAD

== ESTE ES MÁS LAXO, permite la conversión de tipos
=== OPERADOR DE IGUALDAD EXTRICTA
!=
!==
UN OBJETO ES IGUAL A SI MISMO PERO NO A OTRO
AMBOS ACEPTAN OPERANDOS DE CUALQUIER TIPO
PORQUE APUNTAN A UNA ID DIFERENTE
3 === 3 TRUE
null === null TRUE
true === true TRUE
fals === false TRUE
Nan === nan FALSE
isNan(NaN) TRUE
0 === -0 TRUE
1 === -1 FALSE
"foo" === "foo" TRUE, PORQUE EL STRING TIENE LA MISMA LONGITUD Y LOS MISMOS CARACTERES
const o1 = o
o1 === 0 TRUE

undefined != null FALSE, solo usamos == para null y undefined

OPERADORES DE COMPARACIÓN PREFERIEN NÚMEROS
NO USAN LA IGUALDAD EXTRICTA
ENCUANTO UN OPERADOR ES NAN RETORNA FALSE

> <
> 1 < 2 true
> 1 > 2 false

NUESTRA MÁQUINA DE GENERADOR DE BOOLEANOS
CON STRING
String.localeCompare
String.tolowerCase: para convertirlos a minusculas y ya comparamos los strings

OPERADOR IN vale para comprobar que hay una propiedad de un objeto, NO NOS SIRVE PARA COMPROBAR UN VALOR

const p = {x: 1, y: 1}
"x" in p TRUE
"z" in p FALSE
"toString" in p
true
"map" in arr TRUE
PORQUE HAY UN FUNCIÓN EN ARRAY QUE ES MAP

instanceof TODOS LOS OBJETOS SON INSTACIA DE OBJECT
const d = new Date() ;
d instanceof Date TRUE
d instanceof Object TRUE

CADENA DE PROTOTIPOS
Es una cadena de donde vienen los objetos, es la clase a la que pertenecen
El prototipo no se subscribe

OPERADORES LÓGICOS
&& SI AMBOS SON VERDADEROS RETORNA TRUE
3 NIVELES

1. OPERADOS BOOLEANOS ( == ===)
   NOS SIRVE PARA UNIR DOS EXPRESIONES RELACIONALES

2. EVALUA LA EXPRESION DE LA IZQ , SI ES FALSE YA NO EVALUA LAS DEMÁS, Y RETORNA LO DE LA IZQ, SI ES CIERTO PASA A EVALUAR LO DE LA DCHA Y DEVUELVE LO DE LA DCHA
   ESTO SE LLAMA CORTOCIRCUITO
   const p = null
   p == null && console.log("stop")
   SI P == null es cierto devuelveme STOP

**\*\***\***\*\***EJEMPLO DE TERNARIO

function simplificaAnd(x) {
if (x) {
if (x <= 50 && x >= 25) {
return "si";
}
}
return "no";
}

console.log(simplificaAnd(10));
console.log(simplificaAnd(33));

const x && >=
function mayorIgualQue(x) {
if (x >= 25) {
return "Es 25 o mayor"
}

    if (x >= 15) {
        return "Es 15 o mayor"
    }

    return "Es menor que 15"

}

ESTRICTAMENTE IGUAL
function estrictamenteIgual(x) {
if (x === 12) {
return "Igual";
}
return "No igual";
}
INVOCAMOS
estrictamenteIgual(5)

HAZ QUE IF TENGA SENTIDO

function esDeTipoString(x) {
if (typeof x === "string") {
return "Es un tipo string";
}
return "No es un tipo string";
}
invocamos
typeof "hola"
esDetipoString(x)
SIEMPRE QUE INVOCAMOS es poner la funcion y entre parentesis los valos separados por comas

COMPLETA LA FUNCIÓN PARA COMPROBAR QUE DADA UNA "age", y un "minAge" el usuario es adulto

function isAnAdult(age, minAge) {
if (age >= minAge) {
return true;
}
return false;
}

const isAnAdult = (age, minAge) => age >= minAge;

isAnAdult(18, 21);
isAnAdult("18", 18)

COMPLETA LA FUNCIÓN PARA COMPROBAR QUE UNA PROPIEDAD "X" EXISTE EN UN OBJETO "O"
function hasPoperty(x, o){
if (x in o)
return false;
}

function hasPoperty(x, o){
if (O[X] != null)
return false;
}

hasProperty(3, []);
hasProperty("x", {});
hasProperty("y", { x: 1 });
hasProperty("y", { x: 1, y: 2 });

COMPLETA LA FUNCIÓN para indicar si el valor dado es un valor vacio

const isNil = (x) => x == null;

isNil(null);
isNil(undefined);
isNil(0);
isNil([]);

OPERADORES LOGICOS

OR true || true
NOS RETORNA UN VALOR CIERTO

true || false true

false || false
RETORNA false
TAMBIÉN CORTOCIRCUITA

const max = maxWidth || preferences.maxWidth || 300;

NOT : OPERADOR UNARIO , NIEGA
!(y > 0)
!isNil
Lo convierte en booleano antes de negarlo
si niego 2 veces !!1 = 1

EXPRESIONES DE ASIGNACIÓN

o.x = 1

El operador espera que el izq sea un variable y la derecha un valor cualquiera

let i,j,k;

i = j = k = 0 EL VALOR VA DE DCHA A IZQ TODOS VALEN 0

+= SUMA Y ASIGNA
let total = 100;
const IVA = 21;
total = total + IVA
total += IVA
121

a += b === a = a+b
ABREVIACIÓN

-= / a = a - b
/%=
\*\*=

function sumAssigment() {
let a = 1;
let b = 2;
let c = 3;

    a = a + 11; / a += 11 = 12
    b = 9 + b; / b += 9 = 11
    c = c + b; / c += b = 5

}

function subAssignment(){
let a = 10;
let b = 9;
let c = 8;

    a = a - 5; / a -= 5 = 5
    b = b - a; / b -= a = -1
    c = c - 8; / c -= 8 = 0

}

function divAssignment(){
let a = 3;
let b = 9;
let c = 16;

    a = a / 12; / a /= 12 = 0,25
    b = b / 4; / b /= 4 = 2,25
    c = c / 8; / c /= 8 = 2

}

function divAssignment(){
let a = 3;
let b = 9;
let c = 16;

    a = a / 12; / a /= 12 = 0,25
    b = b / 4; / b /= 4 = 2,25
    c = c / 8; / c /= 8 = 2

}

function isOdd(x) {
return ( x % 2 !== 0 );
}
const isOdd = (x) => x % 2 !== 0;
retorna true si el nº es impar

OPERADOR ,
for (let i = 0, j = 10; i < j; i++, j)

TERNARIO CONDICIONAL

const x = 0;
x > 0 ? x: -x
Es x mayor que 0, si es asi devuelveme x y sino -x
a la izq de esta operacion se pone un booleano

Es igual que un If else

completa la siguiente funcion de tal manera que si username existe se retorna "hello" y el username
function saludar(username) {
let gretting = "";
return greeting;
}

username !== null ? `hello ${username}` : "hello there"; METEMOS UNA TEMPLATE
SIEMPRE USAMOS NULL NO UNDEFINED

console.log(saludar());
console.log(saludar("Ivan"));

completa la funcion con un condicional ternario para saber si los parametros son iguales
function isEqual(a, b) {
return false
}

let a, b
a === b ? true: false

console.log(isEqual(1, 2));
console.log(isEqual("Foo", "Foo"));

function layout(size) {
return size >= 960 ? "LARGE" : size >= 660 ? "MEDIUM" : "SMALL";
}

encadena dos ternarios para saber si nuestro tamaño LARGE, MEDIUM, SAMLL
LARGE 960MEDIUM 660
SMALL<660

console.log(layout(screen.width));

OPERADOR DE PRIMERO DEFINIDO
let max = 0 || 300 ESTO ESTA MAL

let max = 0 ?? 300
max

?? si no se cumple lo que va delante se ejecuta lo que va detras

FINAL DE OPERADORES Y EXPRESIONES

\*/

EJEMPLO DE UN COMMIT

git commit -m "refactor: cambio en la licencia"

EJERCICIOS DE HACER UN FRAMEWORK CSS

BOTONES
UNA BOTONERIA, CON 5 ESTADOS NORMALES, Y TAMAÑOS EN LOS BOTONES, SM, MD, LG, EXTRA LG

TABLAS
POR DEFECTO, CON BORDES, STRIPPED

MONTAR UN GRID, PUNTO EXTRA, CON FLEX

FORMULARIOS
IN LINE
STACKED
DARLE FORMA A LOS INPUTS, CHECKBOX, RADIOS, SELECT
LABEL

MENU VERTICAL, CON LINEAS SCROLL

PURE CSS
FLEXBOX GRID

HACER DIFERENTES CSS PARA CADA ELEMENTO Y LUEGO SE JUNTAN

PONERNOS DE ACUERDO CON LAS VARIABLES DE COLOR
Para no tener que repetir muchas veces los colores

## ESTAMENTOS

Son sentencias u órdenes que le damos al programa. Estos siempre terminan con un ;
Las expresiones producian un valor, pero en los estamentos las funciones son ejecutadas.
Las asignaciones o invocaciones son ya de por si estamentos, estas cambian el estado del programa. Son expresiones estamentos.
Estos van a ser ejecutados en el orden en el que se han escrito.

### Estamentos de expresión

Las expresiones de efectos secundarios son las más simples.

### Los condicionales

Estos son los más importantes, son como if, estos son los lugares donde el código se ramifica, donde el código hace una cosa u otra.

### Estamento If

##### If else

Un estamento que nos permite ejecutar estamentos de forma condicional, generador de booleanos (los símbolos de comparación)
if (expresion)
estamento

if (username == null) {
username = "Ivan Zamarro"
}

if (expresion) {
estamento1
} else {
estamento2
}

Por defecto un else va con su If más cercano, si no usamos llaves

##### Else if

No es un estamento de js, es azúcar sintáctico, para no repetir tantas veces el if else

if (n === 1) {
//pasan cosas
} else if (n === 2){
// pasan otras cosas
} else if (n === 3){
// pasan otras cosas
}

HACER TEST, TEST DRIVER DEVELOPEMENT

function testSize(num) {
if (num < 5) {
return "Tiny";
} else if () {
return "Error";
}
}

console.assert(testSize(3) === "Tiny");

num < 5

Es muy importante hacer test, primero lo haces para que falle,

VAMOS A HACER UN JUEGO DE ELIGE TU AVENTURA

QUE PAPILLA COME, EN QUE SILLA SE SIENTA, Y EN QUE CAMA DUERME

EL JUEGO SOLO CONTINUA SI SE ELIGE LA OPCIÓN CORRECTA

### El switch

El estamento switch

switch(n) {
case 5:
break;
}

Este se usa cuando dependemos del mismo valor todo el rato, comparamos todo el rato lo mismo.

typeracer.com: para aprender a escribir más rápido.

### Loops

Doblan el código para repertirlo

#### while

while(expression) {
estamento;
}

Se evalua la expresión y si es cierta se ejecuta el estamento, las iteraciones son las vueltas que da el loop, una vez la expresion no se cumple se sale del loop

function whileAdd(arr) {
let count = 5;

    while (count >= 0) {
        arr.push(count);
        count--;
    }

    return arr;

}

function whileAdd(arr) {
inicializacion;

    while (test) {
        actualizacion;
    }

    return arr;

}

### Do while

No se usa, se pierde el control de la iteración

### For

Es un constructor de loops más simple que el While

for(inicializacion; test; actualizacion) {
estamento
}

La actualizacion solo se ejecuta si el test es cierto, la actualizacion siempre tiene que tener efectos secundarios

for(let count=0; count < 10; count++) {
console.log(count);
}

let sum = 0;
for(let count = 0, count <= 5, count++) {
sum += count;
}

EJEMPLO MÁS COMPLICADO

### Recursividad

En vez de usar For
Leer esto, https://portfoliostuff-parenttobias.codeanyapp.com/2020/01/29/recursion-all-the-way-down/

### For of

const data = [1,2,3,4,5,6,7,8,9];
let sum = 0;

for (let element of data) {
sum += element
}

sum;

Lo que hace es sumar los elemenntos del array,
let element hace referencia a los elementos del array
of data de la constante data

Para sacar el iterable de un objeto pordemos mezclar el for of

### For in

NO LO VAMOS A USAR

const o = { x: 1, y: 2 };
for(let p in o){
console.log([p]);
}

#### Ejercicios

# Descripción

- Incluye en el SpecRunner.html el archivo statements.js y statements.spec.js, creados en src/ y spec/ respectivamente

# Ejercicios

- Escribe una función que acepte dos enteros y muestre el más grande
- Escribe una función que acepte tres enteros de diferente signo (+ || -) y devuelve el signo del producto de dichos números.
- Escribe una función que acepte un array con 3 números y devuelve un array con dichos números ordenados (USA EL ESTAMENTO IF!!! NO OTRA COSA VITO!!!)
- Escribe una función que acepta un array y devuelve el numero más alto de dicho array.
- Escribe una función que genere un array con los números 0 al 15 incluidos, pero dichos números deben ser parte de un objeto que indica si el numero es par o impar, en tal que:
  ```js
  // ejemplo del resultado
  [
    { value: 1, type: "odd" },
    { value: 2, type: "even" },
  ];
  ```
- Escribe una función que calcula la media de resultados de los siguientes estudiantes. Luego esa media es usada para determinar el grado de la nota
  | Student | Nota |
  | ------- | ---- |
  | David | 80 |
  | Mario | 77 |
  | Ana | 88 |
  | Erick | 95 |
  | Silvia | 68 |
  Los grados de las notas:
  | Rango | Grado |
  | ----- | ----- |
  | <60 | F |
  | <70 | D |
  | <80 | C |
  | <90 | B |
  | <100 | A |
- Escribe una función que itera los numeros del 1 al 100. Para multiplos de 3 sacas en consola "Fizz" en vez del numero, para multiplos de 5 sacas en consola "Buzz" en vez del numero. Para numeros que son multiplo de 3 y de 5, sacas en consola "FizzBuzz" en vez del numero. Para el resto sacas en consola el numero.

THE SINGLE RESPONSIBILITY PRINCIPE

Las funciones deben ser reducidas, máximo de 20 líneas y mínimo no hay, siempre el menos nº de lineas, y las funciones solo deben hacer una cosa, hay que hacer muchas funciones pequeñas, porque asi es mas facil de testear

# CLASES

Acumular funciones dentro de un objeto

# ARRAYS

Carece de tipos, dentro puede haber cualquier cosa.
Objetos u otros arrays

Un array de arrays, filas y columnas

Tienen un base 0, y es dinámico, no hace falta declarar su tamaño
Su longitud es length

[] literal de array
... split operator
Array()
Array.of
Array.from

const base = 1024;
const table = [base, base + 1, base + 2]

const x = [1, , 3];
const y = [, ,]; un array con 3 posiciones vacias

const a = [1,2,3];
const b = [0, ...a, 4]; [0,1,2,3,4]

const original = [1,2,3];
const copy = [...original];

copy[0] = [0];
original[0];

const digits = [..."0123456789"]; me convierte esta array en una array con strings diferentes

# SET

el set no admite valores duplicados y es iterable (IVESTIGAR MAS)

let a = new Array(); esto crea un array vacio MEJOR USAMOS LITERALES

let d = Array.of() retorna un array vacia

let e = Array.of(10); [10]

Array.from espera recibir un iterable o un objeto parecido a un array,
Array.from(original); [...original]

const roll = Array.from(new Array(4), () => Math.floor(Math.random()\* 6) + 1)

# LENGTH

const a = [1,2,3,4,5]
a.length = 3

a = [1,2,3]

El length es un invariante y no lo debemos tocar

# METODOS DE ARRAYS

a.push añadimos elementos al final del array
a.unshift añadimos elementos al principio del array
a.pop quita el último elemento y te lo devuelve
a.shift quita el primero y te lo devuelve
a.includes te dice si algo está incluido dentro de un array

delete a[1], borra la posicion 1 pero no varia el length

a.splice coge la posición y te devuelve el elemento

# ITERANDO ARRAYS

## FOR OF

vale para iterar arrays a strings pero nos quedamos sin los índices

# MÉTODOS DE ITERACIÓN DE UN ARRAY

Todos estos aceptan una función y la invocan por lo menos una vez, normalmente esta funcion es invocada con cada elemento del array

# FOR EACH

arr.forEach NOS SACA TODO LO QUE HAY EN ESTE ARRAY TANTAS VECES COMO ELEMENTOS HAYA, ELEMENTO, INDEX Y ARRAY
RECORRE PERO NO DEVUELVE NADA

# MAP

Le pasa cada elemento del array pero devuelve otra array
ESTE RECORRE Y DEVUELVE UNA NUEVA ARRAY PERO SIN MODIFICAR LA OTRA

# FILTER

Nos permite filtrar, retorna true o false

const a = [5,4,3,2];
a.filter((value) => value < 3); 2
FILTER DEVUELVE UN ARRAY

# FIND

TE BUSCA UN ELEMENTO Y TE LO DEVULVE, EL PRIMERO QUE CUMPLA LA CONDICIÓN

EJEMPLO INGREDIENTES

const ingredientes = ["🌽", "🐮", "🐔"];
const cocinar = (ingrediente) => {
switch (ingrediente) {
case "🌽":
return "🍿";
case "🐮":
return "🍔";
case "🐔":
return "🍗";
}
};
const esVegetariano = (ingrediente) => {
switch (ingredientes) {
case "🌽":
return true;
case "🐮":
return false;
case "🐔":
return false;
}
};
const esPollo = (ingrediente) => ingrediente === "🐔";
ingredientes.map(cocinar); // [ "🍿", "🍔", "🍗" ]
ingredientes.filter(esVegetariano); // ["🌽"]
ingredientes.find(esPollo); // "🐔"

# REDUCE

Metodo funcional del array, recorre el array y sus elementos y genera un único valor

El 0 final es el acumulador incial, y el next es el 1, los suma, despues el acc es 1 y next 2 y los suma, y así va sumando todo
