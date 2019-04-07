// --------------- Функции высшего порядка. Задачи.--------------
/*
1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
callback)
Первая функция возвращает строку “New value: ” и результат обработки:
firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/
var a = ['my', 'name', 'is', 'Trinity'];
var b = [10, 20 , 30];
var c = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
var d = ['abc', '123']

function firstFunc (arr, callback){
       return 'New value: ' + callback(arr);
}

function pastingStr (arr){
   return arr.map(el => el.replace(el[0], el[0].toUpperCase())).join('');
   
} ;


function productOfNumbers(arr) {
    return arr.map(item => item * 10)
}

 function users (arr){
     let res = '' ;
     for (i=0; i< arr.length; i++) {
         
  if(i== arr.length-1){
       res += arr[i]['name'] + ' is ' + arr[i]['age']
  }else{
       res += arr[i]['name'] + ' is ' + arr[i]['age'] + ', '
  }
  
}
 return res
};

function flipLine (arr){
    return arr.map(item => item.split("").reverse().join(""))
}

console.log(firstFunc (a, pastingStr));
console.log(firstFunc (b, productOfNumbers));
console.log(firstFunc(c, users));
console.log(firstFunc(d, flipLine));



/* 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
callback
функция должна возвращать true или false в зависимости от результата вызова callback (проверить
число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
массив.
*/
 let array = [3, 5, 7, 9, 11];

function every (arr, callback) {
    let res = true;
    if(!Array.isArray(arr)){
            return
    }else{
       for( i=0; i< arr.length; i++){
           if(!callback(arr[i], i, arr)){
               res = false;
           }
          }
    }
    return res
}
function biggerThenFive(elem){
    
  return elem > 5;
}

console.log(every(array, biggerThenFive));
 
//----------Перебирающие методы. Задачи.--------
/*
1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/
let input = [1,2,3,5,8,9,10];

console.log(input.map(function(element){
    return {digit: element, odd: (element%2 == 0)}
}));
/*
2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
*/
let input2 = [12, 4, 50, 1, 0, 18, 40];

console.log(input2.reduce(function(res, current){
    if(!res){
     return res
    }else{
        return current !== 0
    }
   
},true))
/*
3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
больше 3х букв. Если да - вернуть true
*/

let input3 = ['yes', 'hello', 'no', 'easycode', 'what'];

console.log(input3.reduce(function(res, current){
   
    if(!res){
        return current.length > 3
    } else
 {
      return res}
}, false))

/*
4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки
*/
let input4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

let indexInput4 = input4.sort(function(prev, next){
    if (prev['index'] > next['index']) return 1;
    if (prev['index'] < next['index']) return -1;
})

let newString = input4.sort(function(prev, next){
    if (prev['index'] > next['index']) return 1;
    if (prev['index'] < next['index']) return -1;
}).reduce(function(reduce, current){
    return reduce + current['char'];
   
})          /* Ни как не могу понять почему  {char:"H",index:0} вставляется как объект б хотя при выводе индексов 
массива элемент с индексом 0 первый в списке. */

console.log(newString);


//  ------------Метод Sort. Задачи.--------
/*
1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']
]
*/
let arr2 = [[14, 45], [1], ['a', 'c', 'd'] ];

arr2.sort(function(prev, next){
    return prev.length -next.length;
})

console.log('sortsArr2: ', arr2);

/*
2. Есть массив объектов:
[
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
]
Отсортировать их по возрастающему количеству ядер (cores).
*/
let prod = [
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
];

let res = [];

prod.forEach(function(currentEl){
    res.push(' cpu: ' + currentEl.cpu + ', ' + 'cores: ' + currentEl.info['cores']);
 });

let sorting = res.sort();

console.log('sorting: ' + sorting);

/*
3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
дорогим:
let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/
let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

  let filteredProductPrice = (products, price1, price2) => products.filter(product => {
     
     if (price1 > price2) {

      return  product.price < price1 && product.price > price2

    } else {

      return product.price >= price1 && product.price < price2

    }
    
  }).sort((prev, nex) => prev.price - nex.price)

 
console.log(filteredProductPrice(products, 15, 30))

