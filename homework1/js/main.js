let string ='some test string';

//получить первую и последнюю буквы строки

console.log(string[0]);

console.log(string[string.length-1]);

// сделать первую и последнюю буквуы в верхнем регистре


console.log(string[0].toUpperCase() + string.slice(1));

console.log(string.slice(0, -1) +  string[string.length-1].toUpperCase());

// найти положение слова 'string'

console.log(string.indexOf('string'));
//найти положение второго пробела

console.log(string.indexOf(' ', string.indexOf(' ') + 1));

//получить строку с 5-го символа длинной 4 буквы

console.log(string.substr(5, 4));

//получить строку с 5-го по 9-й символ

console.log(string.substring(5,10));
console.log(string.slice(5,9));
//получить новую строку из исходной путем удаления последних 6-и символов

let stringNew = string.slice(0, string.length-6);
console.log(stringNew);

//из двух переменных а=20 и b= 16 получить переменную string, в которой будет соержаться текст '2016'

let a = 20;
let b = 16;

let stringSum = String(a) + String(b);
console.log(stringSum);

//Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(parseFloat(Math.PI.toFixed(2)));

//Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13,51

console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// Работа с Math.random:

console.log(+Math.random().toFixed(2));

console.log(Math.floor(Math.random() * (10 - 0)) + 0);

// Проветить результат вычисления 0,6 + 0,7 - как привести к нормальному виду(1,3)?

console.log( +Math.round((0.6 + 0.7) * 100) / 100 );
console.log(+(0.6 + 0.7).toFixed(1));

// получить число из строки '100$'

console.log(parseInt('100$'));