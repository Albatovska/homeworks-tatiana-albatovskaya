// ---------------- Свойства. Код Задачи. -----------------------

// 1. Найти параграф и получить его текстовое содержимое (только текст!)
// /* 
const pquerySelector = document.querySelector('p');

const pText = pquerySelector.textContent;

console.log(pText);


// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла,
// об имени узла и о количестве дочерних узлов (если детей нет - 0).


function getElemInfo(el){

    if (!el) return console.log('Введите узел DOM');
    
    const getElem = document.querySelector(el);
  
    const nodeName = getElem.nodeName.toLowerCase();
  

  const numNodeType = getElem.nodeType;

  if( numNodeType === 1 ) nodeType = 'element node';
  if( numNodeType === 3 ) nodeType = 'text node';
  if ( numNodeType === 8 ) nodeType = 'comment node';

    let childrenElem = getElem.children;

    const lengthChildren = childrenElem.length;
 
  if (lengthChildren === 0) childrenElem=0;

  return  { 
      nodeName,
      nodeType,
      childrenElem
  }
}

const elemInfo = getElemInfo('p');

console.log(elemInfo);



// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) --->
// ["Link1", "Link2", "Link3"]

    const linksFromLi = document.querySelectorAll('ul li a');
    let getTextFromUl = []; 

    Array.from(linksFromLi).forEach(el => getTextFromUl.push(el.innerHTML));
     
   console.log(getTextFromUl);

    
// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const p = document.querySelector('div article p');
Array.from(p.childNodes).forEach(el => {
  if (el.nodeType == 3){
    el.data = 'text'; 
  }
  });

console.log(p);

// -------------- Свойства. Задачи. ------------------

// 1. Найти в коде список ul и добавить класс “list”

const ulList = document.querySelector('ul');

ulList.classList.add("list");

console.log( ulList);

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

let nextEl = ulList;

while (nextEl.nextElementSibling){

  nextEl = nextEl.nextElementSibling;

  if (nextEl.nodeName.toLowerCase() == 'a'){

    nextEl.setAttribute('id', 'link')

    console.log(nextEl); break
  }
}


// 3. На li через один (начиная с самого первого) установить класс “item”

const liList = document.querySelectorAll('li');

for (let i = 0; i < liList.length; i += 2) {
  liList[i].classList.add("item");;
  }


// 4. На все ссылки в примере установить класс “custom-link”

const links = document.links;

for (i=0; i< links.length; i++){

  links[i].classList.add('custom-link');
}

console.log(links);

// Код для задач брать со слайда 5. 
// 2. В каждую ссылку, которая находятся внутри списка ul  
//добавить по тегу strong (в каждую ссылку один - strong). 
  
    const linksFromUl = document.querySelectorAll('ul li a');
    
    const strong = document.createElement('strong');

  for (i=0; i< linksFromUl.length; i++) {
  
      linksFromUl[i].appendChild(strong);
  }


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt
// (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const imgCreate = document.createElement('img');
const body = document.body;
imgCreate.src = 'https://placekitten.com/200/300';

imgCreate.alt = 'cat';

document.body.insertBefore(imgCreate, document.body.firstChild);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” 
//и на элемент установить класс green

const getMark = document.querySelector('mark');

getMark.insertAdjacentText('beforeEnd', 'green');

getMark.classList.add('green');


// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let linksArr = Array.prototype.slice.call(linksFromLi);


linksArr.reverse(function(a, b){
    return a.textContent.localeCompare(b.textContent);
    });

for ( let i = 0; i < linksArr.length; i++ ){

  let parentUl = linksArr[i].parentNode.parentNode;
  let parentLi = linksArr[i].parentNode;
  console.log('parent '+parent.nodeName);

let detatchedA = parentLi.removeChild(linksArr[i]);
let detatchedLi = parentUl.removeChild(parentLi);
 
  parentUl.appendChild(detatchedLi).appendChild(detatchedA);

}

// Код для задач брать со слайда 5
