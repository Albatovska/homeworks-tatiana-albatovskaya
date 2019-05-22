//Замыкания. Задачи.
// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

const minus = function differenceOfNumbers(firstArg = 0) {
    return function difference(secondArg = 0) {
        firstArg = firstArg;
        secondArg = secondArg;
        rez = firstArg - secondArg;
        return rez;

    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый 
//результат между вызовами:
//     function multiplyMaker...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(firstArg = 1) {
    firstArg = firstArg;
    return function(secondArg) {
        let rez = firstArg * secondArg;
        firstArg = rez;
        return rez;
    }

}
const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
//     a.установить строку
// i.если передано пустое значение, то установить пустую строку
// ii.если передано число, число привести к строке
// b.получить строку
// c.получить длину строки
// d.получить строку - перевертыш
// Пример:
//     модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const stringModule = (function() {
    let string = '';

    function setString(text) {
        string = text;
        if (text === '') { string = '' };
        if (Number(text) === text) {
            string = String(text);
        }
    }

    function getString() {
        return string;
    }

    function stringLength() {
        return string.length;
    }

    function getReturnString() {
        let res = '';
        for (let i = string.length - 1; i >= 0; i--) {
            res += string[i];
        }
        return (string = res);
    }

    return {
        setString,
        getString,
        stringLength,
        getReturnString
    }

})();

stringModule.setString('gkcsyl');

console.log(stringModule.getString());
console.log(stringModule.stringLength());
console.log(stringModule.getReturnString());

// 4. Создайте модуль“ калькулятор”, который умеет складывать, умножать, вычитать,
// делить и возводить в степень.Конечное значение округлить до двух знаков после 
//точки(значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
//     модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calModule = (function() {
    let result = 0;

    function setValue(val) {
        result = val;
        return this;

    }

    function sum(valSum) {
        if (typeof valSum !== "number") return console.log("Передано не число");
        result += valSum;
        return this;

    }

    function minus(valMinus) {
        if (typeof valMinus !== "number") return console.log("Передано не число");
        result -= valMinus;
        return this;
    }

    function multiplication(valMulti) {
        if (typeof valMulti !== "number") return console.log("Передано не число");
        result *= valMulti;
        return this;
    }

    function divisionOfNumber(valDiv) {
        if (typeof valDiv !== "number") return console.log("Передано не число");
        result /= valDiv;
        return this;
    }

    function exponent(valExponent) {
        if (typeof valExponent !== "number") return console.log("Передано не число");
        result = Math.pow(result, valExponent);
        return this;
    }

    function getValue() {
        return +result.toFixed(2);
    }

    return {
        setValue,
        sum,
        minus,
        multiplication,
        divisionOfNumber,
        exponent,
        getValue
    };

})();
console.log(calModule.setValue(10).sum(5).getValue());
console.log(calModule.setValue(10).exponent(2).getValue());
console.log(calModule
    .setValue(10)
    .sum(5)
    .minus(5)
    .multiplication(2)
    .divisionOfNumber(5)
    .exponent(2)
    .getValue()

)


//Конструкторы. Задачи.

// Создать конструктор для производства автомобилей.Конструктор должен принимать 
//марку автомобиля
// и возраст машины.Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины(год текущий минус возраст машины,
//     использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!

function Car(title, year) {
    this.getTitle = function() {
        newTitle = title.substring(0, 1).toUpperCase() + title.substring(1, title.length);
        return newTitle;
    }
    this.getAge = function() {
        const date = new Date();
        currentDate = date.getFullYear();
        return currentDate - year;
    }

}
const lexus = new Car('lexus', 2);
console.log(lexus.getTitle());
console.log(lexus.getAge());


//     Написать конструктор, который умеет элементарно шифровать строки(например,
//         сделать из строки строку - перевертыш, или заменить все символы их цифровым представлением, или любой другой метод).Конструктор при инициализации получает
// строку и имеет следующие методы:
//     a.показать оригинальную строку
// b.показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов

function Cipher(string) {
    this.getString = function() {
        return string;
    };
    this.chengeString = function() {
        return string
            .split('')
            .reverse()
            .join('')
            .replace(/\s/g, '')


    }
};
/* function Cipher(string) {
    this.string = string;
    this.getString = function() {
        return this.string;
    };
    this.chengeString = function() {
        return this.string
            .split('')
            .reverse()
            .join('')
            .replace(/\s/g, '')
    };
} */
let cipherString = new Cipher('I am learning JavaScript');
console.log(cipherString.getString());
console.log(cipherString.chengeString());