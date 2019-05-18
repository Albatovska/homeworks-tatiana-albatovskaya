//   Деструктурирующее присваивание. Задачи.

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает 
// любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
//     func(‘a’, ‘b’, ‘c’, ‘d’)→ {
//         first: ‘a’,
//         other: [‘b’, ‘c’, ‘d’]
//     }

const firstArg = function(first, ...rest) {
    return {
        first,
        rest
    };

}
firstArg('f', 'g', '2', '7', ' r');


// 2. Организовать функцию getInfo, которая принимает объект вида 
// { name: ..., info: { employees: [...], partners: […] } }
// и выводит в консоль имя(если имени нет, показывать‘ Unknown’)
// и первые две компании из массива partners:

//     const organisation = {
//         name: 'Google',
//         info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
//     };
// getInfo(organisation);→
// Name: Google
// Partners: Microsoft Facebook


const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

function getInfo({
    name = 'Unknown',
    info: {
        partners: [child1, child2]
    }
}) {
    return `Name: ${name}
Partners: ${child1}, ${child2}`
}
getInfo(organisation);
console.log(getInfo(organisation));


///Функции стрелки. Задачи.
// Переделать функцию с использованием функции - стрелки
//(в методе reduce тоже использовать arrow function):

//     function sum() {
//         const params = Array.prototype.slice.call(arguments);

//         if (!params.length) return 0;

//         return params.reduce(function(prev, next) { return prev + next; });
//     }

// sum(1, 2, 3, 4); // 10
// // sum(); // 0

// const sum = (...arg) => {

//     if (!arg.length) return 0;
//     return arg.reduce((prev, next) => prev + next);
// };

const sum = (...arg) => arg.length ? arg.reduce((prev, next) => prev + next) : 0;

console.log(sum(1, 2, 3, 4));
console.log(sum());


//This. Задачи.

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
//     const rectangle = { width: ..., height: ..., getSquare: ... };

const rectangle = {
    width: 8,
    height: 4,
    getSquare: function() {
        return this.width * this.height;
    }
};
console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
//     const price = {
//         price: 10,
//         discount: '15%',
//         ...
//     };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        return this.price - this.price * parseInt(this.discount) / 100;
    }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount())


// 3. Создать объект, у которого будет поле высота и метод“ увеличить
// высоту на один”.Метод должен возвращать новую высоту:
//     object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

// const element = {
//     height: 10,
//     increaseElement: function() {
//         this.height++;

//     }

// }
// console.log()
// console.log(element.height);
const element = {
    height: 10,
    increaseElem: function() {
        this.height++;
    }
};
console.log(element.height);
element.increaseElem();
console.log(element.height);

// 4. Создать объект“ вычислитель”, у которого есть числовое свойство“ значение”
// и методы“ удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
//     const numerator = {
//         value: 1,
//         double: function() {... },
//         plusOne: function() {... },
//         minusOne: function() {... },
//     }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function() {
        this.value *= 2;
        return this;
    },
    plusOne: function() {
        this.value++;
        return this;
    },
    minusOne: function() {
        this.value--;
        return this;
    },
};
numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value);

// 1. Создать объект с розничной ценой и количеством продуктов.Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров(цена * количество продуктов).
const product = {
    price: 15,
    quantity: 3,
    totalCost: function() { return this.price * this.quantity }
}
let getTotalCost = product.totalCost();
console.log(getTotalCost);

// 2. Создать объект из предыдущей задачи.Создать второй объект,
//     который описывает количество деталей и цену за одну деталь.Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы.Для этого“ позаимствуйте” метод 
//из предыдущего объекта.

const detail = {
    price: 25,
    quantity: 5
};

let getTotalCostDetail = product.totalCost.call(detail);

console.log(getTotalCostDetail);


// 3. Даны объект и функция:
//     let sizes = { width: 5, height: 10 },
//         getSquare = function() { return this.width * this.height };
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes.

let sizes = { width: 5, height: 10 },

    getSquare = function() { return this.width * this.height };

const squareForSize = getSquare.call(sizes);

console.log(squareForSize);

// 4.
// let element = {
//     height: 25,
//     getHeight: function() { return this.height; }
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let elem = {
    height: 25,
    getHeight: function() { return this.height }
};

let getElementHeight = el => elem.getHeight.call(el);

console.log(getElementHeight(elem));