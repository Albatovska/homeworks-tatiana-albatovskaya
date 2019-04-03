/* 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */

function multiply() {
    let multiplyRez = 1;
    
    if (arguments.length == 0) {
        return 0;
    } else {
            for (let i = 0; i < arguments.length; i++) {
            multiplyRez = multiplyRez * arguments[i];
            
        }
    }
    return multiplyRez
};

let result = multiply(5, 2, 3);

console.log(result);

/* 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
reverseString(‘test’) // “tset”. */

function reverseString(str) {
    let string = str.split('');
   
        string.reverse();
        return string.join('')
     
}
let newString = reverseString('test');

console.log(newString);
/*
3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
    где каждый символ разделен пробелом и заменен на юникод-значение символа:
    getCodeStringFromText(‘hello’) // “104 101 108 108 111”
подсказка: для получения кода используйте специальный метод
*/
function addSpaces (str){
    //let string = str.split("");
     let strCod = "";
     for (let i = 0; i < str.length; i++){
         strCod += str.charCodeAt(i) + " ";
     }
     return strCod;
}
let newText = addSpaces('getCodeStringFromText(‘hello’)');

console.log(newText);
/*
4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
числа.
*/
function guesNumber(n){
    let min = 1;
    let  max = 10;
    let number = Math.floor (Math.random() * (max - min) + 1);

    if (number === n ){
        return console.log('Вы выиграли!');
    } else {
        console.log('Вы не угадали ваше число ' + n +' а выпало число ' + number)
    }
}

guesNumber(9);


/*
5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
*/
function getArray (n){
    let res = [];
   for (let i = 1; i <= n; i++) {
       res.push(i);
    }
    return res;
}
let newArr = getArray(5);
console.log(newArr)
/*
6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]
*/
function concatArr (arr) {
    
      return arr.concat(arr)
}

let newArray = concatArr([3, 8, 5, 9]);

console.log(newArray);

/*
7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
массива первый элемент, а возвращает массив из оставшихся значений:
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
*/
function changeCollection (){
   let result = [];
   for (var i=0; i < arguments.length; i++){
       result.push(removeFirst(arguments[i]))
   } 
   function removeFirst(arr){
       for (let i=0; i <= arr.length; i++){
           arr.shift();
           return arr
       }
   }
   return result;
}
let collection= changeCollection([1,2,3], ['a', 'b', 'c']);
console.log(collection);
/*
8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
*/
var arr = [
    {name:'Oleg', gender:'male', age:30},
    {name:'Igor', gender:'male', age:10},
    {name:'Anya', gender:'female', age:40},
    {name:'Vika', gender:'female', age:20},
]

function getUsersByParam(persons, field, value){

    return persons.filter(person => person[field] == value)
}

console.log(getUsersByParam(arr, 'gender' ,'female'))

console.log(getUsersByParam(arr, 'age' , 20))