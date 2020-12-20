function returnMyObjct(object) {
    let myObj = {
        name: "Object1",
        id: 1,
    }

    for (let property of myObj) {
        return Object.keys(myObj);
    }


};


biblioteca
leido
ID

/* 2. Escribe una función de JS que acepta un objeto biblioteca y añade libros, cada libro debe tener un estado booleano para saber si ha sido leido o no, y cada libro se identifica de manera unica por su ID, un libro debe tener titulo y author con nombre y apellidos.
   1. Escribe una función que permita modificar el estado de leido/no_leido de cada libro
   2. Escribe una función que permita obtener la lista de libros leidos
   3. Escribe una función que permita obtener la lista de libros NO leidos
   4. Escribe una función que permita buscar un libro por author*/


const biblioteca = {
    libro1: {
        status: true,
        id: 1,
        titulo: "title1"
        autor: { nombre: "Nombre1", apellido: "Apellido1" }

    },

    libro2: {
        status: false,
        id: 2,
        titulo: "title2"
        autor: { nombre: "Nombre2", apellido: "Apellido2" }

    },

    libro3: {
        status: true,
        id: 3,
        titulo: "title3"
        autor: { nombre: "Nombre3", apellido: "Apellido3" }

    },
}

/* function bibliotecaCheck (object) {
    for ("libro" in biblioteca)
    if (biblioteca["libro"].status === true){
        return 
    }
}*/

function getProps(obj) {
    const props = [];
    for (let prop in obj) {
        props.push(prop);
    }
    return props;
}

function addBook(library, book) {
    library[book.id] = book;
}

function modifyBookStatus(library, id, newStatus) {
    library[id].readed = newStatus;
}

function getBookByReadedStatus(library, status) {
    const list = [];
    const listOfBooks = Object.values(library);
    for (let book of listOfBooks) {
        if (book.readed === status) {
            list.push(book);
        }
    }
    return list;
}

function getReadedList(library) {
    return getBookByReadedStatus(library, true);
}

function getNotReadedList(library) {
    return getBookByReadedStatus(library, false);
}

function findBookByAuthor(library, authorName) {
    const listOfBooks = Object.values(library);
    for (let book of listOfBooks) {
        if (book.author.name === authorName) {
            return book;
        }
    }
}