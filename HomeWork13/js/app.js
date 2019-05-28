// 1. Создать функцию, которая возвращает промис.Функция принимает
// два аргумента - время, через которое промис должен выполниться,
// и значение, с которым промис будет выполнен.

// function promiseCreator(...) {... }
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!

function promiseCreator(time, vol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vol);
        }, time);
    });
};
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

// 2. Создать класс, который производит экземпляр со следующими свойствами:
//     -promise - промис, который создается во время запуска конструктора; -
// reject - метод, при выполнении которого promise реджектится; -
// resolve - метод, при выполнении которого promise резолвится.

// class Prom {... }
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// setTimeout(() => inst.resolve('test'), 5000)→ test

class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    };
};

const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve('test'), 5000);