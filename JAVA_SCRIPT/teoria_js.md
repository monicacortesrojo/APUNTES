# APUNTES JAVA SCRIPT

## **- Historia de Java Script**

Es el lenguaje más desplegado de la historia y el más usado por desarrolladores. También es un lenguaje de alto nivel.
Se lleva muy bien con la programación orientada a objetos (NOSOTROS) o programación funcional.
Las variables de JS no exigen tipado fuerte, los tipos son un límite, hacen que las cosas sean más seguras.
Su sintaxis está basada en JAVA, pero no tienen nada que ver. JS deriva sus funciones de un lenguaje llamado squen, herencia basada en prototipos.

## **- Inicios**

Se usaba para hacer scripts, que eran mensajes muy pequeños.
Para ser útil todo lenguaje tiene que tener una librería.

Tiene un CORE muy pequeño, pero este no sirve para entradas y salidas, esto es responsabilidad del entorno (El navegador web)
Entradas: inputs del ratón o acciones, outputs envia peticiones al HTML
En 2010 nace NODE el entorno de JS se extiende para poder tener más acciones
ECMA SCRIPT, creado por lo que ahora es ORACLE.

La **ECMA** es el estandar, en los 90 y 00 JS no estaba unificado, en los diferentes navegadores había diferentes funcionalidades. Por eso nacio Jquery.
ECMA SCRIPT 5 en 2010 se unificó el lenguaje, nosotros vamos a estudiar ES6 (2015) como base pero con las funcionales más actuales.
JS se considera un lenguaje roto que no se pueden arreglar porque mucho software estaba mal escrito desde antes que se unificara

### **MODO ESTRICTO**

El MODO ESTRICTO todo el software que escribas con esto no va a tener fallos, le damos un string que es STRIC MODE y ya no nos deja usar funcionalidades defectuosas
CHROME CANARY, es la versión para desarrolladores.
CTRL L: Para borrar de golpe en la consola

### **Asi se hace un console log**

console.log ("Hola! Soy Moni");

## **Tipos de datos**

- variable_num = 5;
- variable_string = "Hola soy un string";
- variable_string2 = 'Hola soy otro string';
- variable_boolean = false;
- true; //valor booleano
- variable_null = null; //ausencia de valor, valor nulo
- variable_undefined = undefined; //valor no definido, también nulo

## OBJETOS

- Son un conjunto de datos.
- Van entre llaves{}
- Un objeto puede contener array

## ARRAY

- Van entre []
- Meter entre corchetes algo es una EXPRESIÓN, los operadores son expresión (como operaciones matemáticas)
  //STRINGS entre ""
  //OPERADORES de igualdad o relacionales, los lógicos
  // ! = NO
  /\*_
  LOS ESTAMENTOS, sentencia completas ej: const name ="Monica Cortes"; MODIFICAN EL ESTADO DEL PROGRAMA QUE ESTÁ CONFORMADO POR EXPRESIONES
  _/

//Cuando hacemos una función dentro de un elemento se define un método

// fat arrow = x => un shortcout

# ¿Cómo se declaran las variables?

JS soporta tipos de variables, La variable es evaluada por su valor

let el_nombre_de_la_variable = "algo"; //variables modificables en el tiempo, puede cambiar sin problema, me deja modificar pero no crearla otra vez, sin embargo VAR si que me deja volver a crearla
const //variables que siempre va a ser igual, una variable constante
var //NO USAR NUNCA, usar let o const

//TODO SON OBJETOS
//AZÚCAR SINTÁCTICO, nos hace la vida más fácil, ex: class

# VALORES, TIPOS Y VARIABLES

> ### REGLAS LÉXICAS
>
> #### ESTRUCTURA LÉXICA
>
> Conjunto de reglas elementales que especifica los valores de un programa
> JS distingue mayúsculas de minúsculas, siempre debemos escribir con coherencia CASE SENSITIVE
> No distingue los espacios entre los tokens, y los saltos de línea, podemos IDENTAR (dar tabulación)
> 1;
> 2.2;
> "Hola";
> 'Adios';

> ## IDENTIFICADORES
>
> const x = 1;<br>
> const \_x = 1; (denota privacidad, es mi código) <br>
> const $x = 1;

        const(NO ES UNA CONSTANTE) camelCase = "camel case"; USAREMOS ESTE
        const MAX_SPEED (SI ES UNA CONSTANTE) = 1 EN MAYÚSCULAS

        PALABRAS RESERVADAS DEL LENGUAJE

            if - depende del contexto
            set - depende del contexto
            let - uso restringido
            const - uso restringido
            TODAS LAS PALABRAS RESERVADAS
            as const export get null target void async continue extends if of this while await debugger false import return throw with break default finally
            *NO USAREMOS ESTAS PALABRAS EN IDENTIFICADORES*

            PERMITE TILDES EN LAS VARIABLES Y SIGNOS, PERO NO LO VAMOS A PONER, EL IDIOMA ES EL INGLÉS

            JAVA SCRIPT USA ; PARA SEPARAR LOS ESTAMENTOS PERO ES OMITIBLE

El software funciona manipulando valores,

TIPOS
2 categorias
PRIMITIVOS: Incluyen los nº los string y los booleanos ESTOS TIENEN MÉTODOS Y SE PUEDEN COMPORTAR COMO OBJETOS
Number {1}, es llamado literal numérico, podemos precederlos por -1
0xff=255 hexadecimal (El #ffffff, para los números), nº binario 0b101=21, octal 0o37
NÚMEROS REALES: 1e-2, esta notacion representa el nº multiplicado por 10 al cuadrado
OPERACIONES
EL RESTO DE LA DIVISIÓN ES EL MÓDULO 4%2=2, ASÍ PODEMMOS SABER SI UN NÚMERO ES PAR

ESPECIALES: Null y undefined SOLO ESTOS CARECEN DE MÉTODOS
SON INMUTABLES, un número no puede cambiar, o true, o false
El texto de un string nunca puede variar, nunca le puedes decir que la segunda letra de Hola es la R

typeof 1 me dice que es un número o que es ese elemento

TIPOS OBJETOS: cualquier valor que no es primitivo, colección de propiedades puede estar compuesto por primitivos, objetos ...
El objeto común {} colección desordenada de nombres y valores
Array colección ordenada []
Symbol () PODEMOS CREAR NUESTROS PROPIOS TIPOS
Set () conjunto de valores
Map () mapa de valores
RegExp nos permite realizar acciones complejas
Date representa fechas y momentos, la fecha es mes, momento es eso más hora, minuto, seg
Error
TypeError
MÉTODOS
MATH ES PARA TRABAJAR CON ARICMÉTICA / Math.pow(EXPONENCIAR)(2, 53) / Math.round / Math.random (te da un numero entre 0 y 1 pseudorandomizado, en informática no existe lo random)
NaN: NOT A NUMBER, un error, nos está diciendo que no puede calcular ese número Number.isNan(4/"Jose") : TRUE
SON MUTABLES, pueden cambiar

CUANDO UN VALOR NO ES ALCANZABLE SE LIBERA AUTOMÁTICAMENTE DE LA MEMORIA, DEBEMOS HACER QUE NUESTROS VALORES SEAN ALCANZABLES, PARA QUE NO LOS BORRE
DEFINIMOS TIPOS EN SI MISMOS QUE CONTIENEN FUNCIONES
MÉTODO ES UNA FUNCIÓN, TÉCNICAMENTE LOS OBJETOS SON LOS ÚNICOS QUE TIENEN MÉTODOS

window = globalThis TODO LO QUE ESTÁ EN LA WEB

VALORES
Tienen nombres, los identificadores

VARIABLES

CONST
LET

ERRORES EN LA PRECISIÓN DE LA COMA FLOTANTE, EN LOS NÚMEROS HAY ERRORES DE PRECISIÓN

TIME STAMP
timestamp nos calcula los milisegundos que han pasado desde el 1 de enero de 1970

UN STRING, es para representar el texto, secuencias ordenadas de caracteres de unicode (PODEMOS PONER EMOJIS), de 16bits de máximo
Un string vaccío tiene una longitud de 0
Todos los textos en JS son STRING
LOS STRING ES6 son iterables, puedo convertir un STRING a un array
PARA NOMBRARLOS
"" DOBLES puedes usarlas dentro de ''
'' SIMPLES puedes usarlas dentro de ""
`` Esto me permite meter cosas dentro, dividir líneas, podemos meter HTML dentro TEMPLETE STRING, SIEMPRE USAMOS ESTO

SECUENCIAS DE ESCAPE BACK SLASH

"Hola\n" salto de línea
"Puendo\tfoo" tabulación
si lo ponemos solo \ es ignorado

CONCATENAR STRINGS CON + LOS UNIMOS
Cuando trabajamos con el operador de sumas, "Hello" + "World", te los suma

podemos compararlos con === solo son iguales si tienen la misma secuendia de caracteres

> =
> reguex, expresión regular

LOS STRINGS: EL TEXTO
2 formas de difirnlos "" o ''. Elegimos una, normalmente la ""
Es una secuencia inmutable, no los podemos cambiar, sino que tenemos que crear uno nuevo. Se comportan como una lista en que cada item es una letra, son literables, podemos recorrerlas.
