// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

function isParent(parent, child) {
    return child.parentElement === parent;
}


let isParentTrue = isParent(document.body.children[0].children[0].children[0], document.querySelector('mark'));

let isParentFalse = isParent(document.querySelector('ul'), document.querySelector('mark'))

console.log(isParentTrue);
// // true так как первый див является родительским элементом для mark

console.log(isParentFalse);
// // false так ul НЕ является родительским элементом для mark

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

const links = document.links;

let link = Array.from(links).filter(link => !link.closest('ul'));

console.log(link);



// 3. Найти элемент, который находится перед и после списка ul

const ulsByQuerySelector = document.querySelector('ul');

 console.log(ulsByQuerySelector.previousElementSibling);
 console.log(ulsByQuerySelector.nextElementSibling);

// 4. Посчитать количество элементов li в списке


const lisByTagName = document.getElementsByTagName('li');
let lisLength = lisByTagName.length;

console.log(lisLength);
 
// 5. В коде с занятия написать функцию по редактированию задачи. 
// 6. Подумать и улучшить функцию generateId();
