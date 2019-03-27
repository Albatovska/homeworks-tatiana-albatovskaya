/*
Чему равно а, почему?
let a = 0 || 'string';        - false || true вернет  'string"
let a = 1 && 'string';        - true && true вернет  'string'
let a = null || 25;           - false || true   вернёт 25
let a = null && 25;           - false && true вернёт null
let a = null || 0 || 35;      - false || false || true  вернёт 35
let a = null && 0 && 35;      - false && false && true  вернёт null

Что отобразится в консоли. Почему? 
12 + 14 + '12'         -2612   "+" делает конкатенацию, если хотя бы один операнд - строка, причем, не обязательно первый.
3 + 2 - '1'            - 4, так как строк пеобразовывается в число
'3' + 2 - 1            - 31  'string' + операция сложений чисел (оператор '+' применяемый  к строкам, объединяет их в одну)
true + 2               - 3, так как true пеобразовывается в 1
+'10' + 1              - 11 , так как оператор "+" также используется для преобразования строки к числу
undefined + 2          - NaN  так как undefined → NaN, Любая операция с NaN возвращает NaN.
null + 5               - 5  так как null → 0,
true + undefined       - NaN, так как 1+NaN , Любая операция с NaN возвращает NaN.
 */
//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let subject;
if(subject === "hidden"){
    subject = 'visible';
}else{
    subject = 'hidden'
}
console.log(subject);
/*
2. Используя if, записать условие:
a. если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
(использовать краткую запись).
 */
let a;
if(a === 0){
    a = 1;
} else if(a < 0){
    a = 'less then zero';
} else{
    a *= 10
}

console.log(a);

/*
3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
 */
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if(car.age > 5){
    console.log('Need Repair');
    car.needRepair = true;
}else{
    car.needRepair = false;
}
console.log(car.needRepair);
/*
4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать
поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
расчет. иначе если поля discount нет то вывести просто поле price в консоль.
 */
let item = { name: 'Intel core i7', price: '100$',  discount: '15%'};
if('discount' in item &&  item.discount !='undefined'){
    item.priceWithDiscount = parseInt(item.price) - parseInt(item.price)*parseInt(item.discount)/100;
    console.log('Цена ' + item.priceWithDiscount + '$');
}else{
    console.log('Цена ' + item['price']);
}
/*
5. Дан следующий код:
let product = {
name: “Яблоко”,
price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

if( parseInt(product.price) >= min && parseInt(product.price) <= max ){
    console.log(product.name);

}else{
    console.log('товаров не найдено');
}

/*
1. Создать объект с полем product, равным ‘iphone’
2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
3. Добавить поле details, которое будет содержать объект с полями model и color
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
 */
let goods = {
    product: 'iphone'
};
goods.price = 1000;
goods.currency = 'dollar';
goods.details = {
    model: '',
    color:''
};
console.log(goods);