// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head

let getHead = document.head;

console.log( getHead );

// 2. body

let getBody = document.body;

console.log( getBody );

// 3. все дочерние элементы body и вывести их в
// консоль.

let getChildrenBody = document.body.children;

console.log( getChildrenBody );

// 4. первый div и все его дочерние узлы

// а) вывести все дочерние узлы в консоль

const getFirstDiv = document.querySelector('div');
const childDiv = getFirstDiv.children;

console.log( childDiv );

// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

 for ( i = 1; i < childDiv.length-1; i++){
   console.log( childDiv[i] );
 };

//console.log(getFirstDiv.firstElementChild.nextElementSibling); 
//console.log(getFirstDiv.lastElementChild.previousElementSibling);



