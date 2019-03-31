/*
1. Записать в виде switch case следующее условие:
if (a === ‘block’) {
console.log(‘block’)
} else if (a === ‘none’) {
console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно
значение.
*/
let a = 'block';

switch (a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
}

/*
2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
оператора.
 */
//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let subject = 'hidden';

subject === 'hidden' ? (subject = 'visible') : (subject = 'hidden');

console.log(subject);

/*
2. Используя if, записать условие:
a. если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
(использовать краткую запись).
*/
let b = 5;

b = b === 0 ? 1 : b < 0 ? 'less then zero' : b * 10;

console.log(b);

/*
3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
 */
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

car.age > 5 ? (
    console.log('Need Repair'), 
    car.needRepair = true
) : 
    car.needRepair = false;

console.log(car.needRepair);


/*
1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.
*/
let line = "i am in the easycode";
let newLine = '';

for (let i = 0; i < line.length; i++) {

    newLine += (line[i - 1] === ' ') ? line[i].toUpperCase() : line[i];

}

console.log( newLine);

/*
2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
становится первой, предпоследняя - второй итд).
*/
let line2 = 'tseb eht ma i';
let res = '';

for (let i = line2.length - 1; i >= 0; i--) {
    res += line2[i]
}
 
console.log(res);


/*
3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
Использовать for.
*/
// Я поняла задание так что его нужно выполнить без использования функций, так как задание было данно до материала по функцим
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 1;

    for (var i = 0; i < num.length; i++) {
        result *= num[i];
    }

console.log(result);    
/*
4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
*/
let line3 = 'JavaScript is a pretty good language';
let line3Result = '';

for (let i = 0; i < line3.length; i++) {

    line3Result += (line3[i - 1] === ' ') ? line3[i].toUpperCase() : line3[i];
    line3Result = line3Result.replace(/\s/g, '')
}

console.log( line3Result );

/*
5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2,
3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i of arr) {
    if (i % 2 == 0) {
    console.log( i );
  }
}

/*
6. Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
Использовать for in.
 */
let list = {
name: 'denis',
work: 'easycode',
age: 29
};

for (var key in list) {
    if( typeof(list[key]) == 'string' )
    list[key] = list[key].toUpperCase();
    console.log(list[key])
}