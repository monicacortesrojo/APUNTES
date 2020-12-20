# Ejercicios

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios

# Descripción

- Dado el siguiente bloque, completa la función para que retorne si el parámetro es o no es un string:
  ```js
  function isString(param) {
    return false;
  }
  console.log(isString("Foo"));
  console.log(isString(["Foo", "Bar"]));
  ```
- Dado el siguiente bloque, completa la función para que retorne si el parámetro es un string vacío o no:
  ```js
  function isBlank(param) {
    return false;
  }
  console.log(isBlank("Foo"));
  console.log(isBlank(" "));
  console.log(isBlank(""));
  ```
- Dado el siguiente bloque, completa la función para que retorne un string partido en un array de palabras:
  ```js
  function toWords(quote) {
    return quote;
  }
  console.log(toWords("El conejo blanco entró en la madriguera"));
  ```
- Dado el siguiente bloque, completa la función para que retorne un número de caracteres concreto de un string:
  ```js
  function truncate(str, number) {
    return false;
  }
  console.log(truncate("Código limpio", 4));
  console.log(truncate("Código sucio", 1));
  console.log(truncate("Somos programadores ", 0));
  console.log(truncate(" Somos programadores", 6));
  ```
- Dado el siguiente bloque, completa la función para que retorne, la forma abreviada de un nombre:
  ```js
  function abbrevName(name) {
    return name;
  }
  console.log(abbrevName("Iván Zamarro")); // -> Ivan Z.
  console.log(abbrevName("Juan Sánchez ")); // -> Juan S.
  console.log(abbrevName(" Pedro Morillo ")); // -> Pedro M.
  ```
- Dado el siguiente bloque, completa la función para que retorne, el email de un usuario protegido:
  ```js
  function protectEmailStr(email) {
    return email;
  }
  console.log(protectEmailStr("ivanzamarro@gmail.com")); // ivan...@gmail.com
  console.log(protectEmailStr("p.mar_69@gmail.com"));
  console.log(protectEmailStr("fake_account@gmail.com "));
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string parametrizado:
  ```js
  function parameterize(str, param) {
    return false;
  }
  console.log(parameterize("Iván Zamarro de España", "-")); // iván-zamarro-de-españa
  console.log(parameterize(" Juan Carlos de Bobón ", "*")); // juan*carlos*de*bobón
  ```
- Dado el siguiente bloque, completa la función para que retorne, la primera letra en mayusculas de un string:
  ```js
  function capitalizeFirst(str) {
    return false;
  }
  console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro
  ```
- Dado el siguiente bloque, completa la función para que retorne, la primera letra en mayusculas de cada palabra:
  ```js
  function capitalizeWords(str) {
    return str.replace(null, (word) => {
      return "";
    });
  }
  console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string en el que inyectamos otro en determinada posición:
  ```js
  function injectstr(str, strToInject, position) {
    return false;
  }
  console.log(injectstr("JavaScript", "mola ", 0)); // mola JavaScript
  console.log(injectstr("We are doing some exercises", "JavaScript", 18)); // We are doing some JavaScript exercises.
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string en el que borramos la primera ocurrencia que nos pasen:
  ```js
  function removeFirst(str, strToRemove) {
    return false;
  }
  console.log(removeFirst("JavaScript mola, pero es dificil", " mola, pero")); // JavaScript es dificil
  ```

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
