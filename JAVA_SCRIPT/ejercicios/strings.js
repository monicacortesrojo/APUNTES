//const isString2 = (param) => typeof param === "string";

//function isBlank(param) {return param.length >= 1;}

// const isBlank = (param) => param.length === 0;
// const isBlank = (param) => param.length === "";

// function isBlank(param){
//     if (param.length === 0)
// }

// function toWords(quote) {
//     return quote.split(" ");
// }

// console.log(toWords("El conejo blanco entró en la madriguera"));

// function truncate(str, number) {
//     return str.slice (0,number);
// }

function truncate(str, number) {
    return str.slice(0, number);
}

console.log(truncate("Código limpio", 4));