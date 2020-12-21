/*function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

    .then(function() {
    console.log("Success 1");
})

.then(function() {
    console.log("Success 2");
})

.then(function() {
    console.log("Success 3");
})

.catch(function() {
    console.log("Error 1");
})

.then(function() {
    console.log("Success 4");
});




const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Vamos a morir todos!");
    }, 2000);
});

function success(data) {
    console.log("todo bien", data);
}

function error(data) {
    console.log("todo mal", data);
}

promise.then(
    function success(data) {
        console.log("todo")
    });
promise.then(success, error);
promise.then(success, error);//vindeando varios callbacks


function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ejecutando mi tarea");
        }, 2000);
    });
}

task().then((data) => console.log(data));


const data;

function task2(data) {
    if (data === NaN) {
        return new Promise1((reject) => {
            setTimeout(() => {
                reject("error");
            })
        }, 0);
    } else if (data % 2 != 0)
        return new Promise2((resolve) => {
            setTimeout(() => {
                resolve("impar");
            })
        }, 1000);
} else if (data % 2 === 0) {
    return new Promise3((reject) => {
        setTimeout(() => {
            reject("par");
        }, 2000);
    });
};

*/

task2("foo").then((data) => console.log(data));
task2(1).then((data) => console.log(data));
task2(2).then((data) => console.log(data));

function task(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}
let promise = task(true);
promise
    .then(function(data) {
        console.log(data);
        return task(true);
    })
    .then(function(data) {
        if (data !== "victory") {
            throw "Defeat";
        }
        return task(true);
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
        return task(false);
    })
    .then(function(data) {
        console.log(data);
        return task(true);
    })
    .catch(function(error) {
        console.log(error);
        return "Error caught";
    })
    .then(function(data) {
        console.log(data);
        return new Error("test");
    })
    .then(function(data) {
        console.log("Success:", data.message);
    })
    .catch(function(data) {
        console.log("Error:", data.message);
    });