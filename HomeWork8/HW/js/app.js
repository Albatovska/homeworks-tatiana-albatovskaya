// 1. По нажатию на кнопку "btn-msg"
// должен появиться алерт с тем текстом который находится в атрибуте data - text у кнопки.
const btn = document.querySelector('#btn-msg');
const btnText = btn.dataset.text;
btn.addEventListener('click', function() { alert(btnText) });


// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной;
// когда указатель мыши покидает кнопку, она становится прежнего цвета.
//Цвет менять можно через добавление класса.

btn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'red';
};

btn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
};

// 3. При нажатии на любой узел документа показать в элементе с id = tag имя тега нажатого элемента.
const tag = document.querySelector('#tag');

document.addEventListener('click', (event) => {
    const el = event.target;

    tag.textContent = `Tag: ${el.tagName}`;


})

// 4. При нажатии на кнопку btn - generate добавлять в список ul элемент списка Li 
//с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д


const ul = document.querySelector('ul');
const btnCreateLi = document.querySelector('#btn-generate');

document.addEventListener('click', (event) => {

    const li = document.querySelectorAll('li');
    const liCreate = document.createElement('li');
    const liLength = li.length + 1;

    liCreate.innerText = (`Item  ${liLength}`);

    ul.appendChild(liCreate);

})