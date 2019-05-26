// класс для реализации функционала по добавланию новостей на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашего списка новостей
// класс сейчас заточен на работу в '.news-wrap .row' елементе
// но можно реализовать как в ./loaderUI.js 
class NewsUI {
    constructor() {
        this.container = document.querySelector('.news-wrap .row');
    };

    addNewsToView(list) {
        for (let item of list) {
            this.container.appendChild(NewsUI.getTemplate(item));
        }
    };

    static getTemplate(article) {

        const fragment = document.createDocumentFragment();

        /*   return `                             
                             <div class="col s12 m6">
                               <div class="card">
                                 <div class="card-image">
                                   <img src="${article.urlToImage}">
                                   <span class="card-title">${article.title}</span>
                                 </div>
                                 <div class="card-content">
                                   <p>${article.description}</p>
                                 </div>
                               </div>
                             </div>
                           */

        const divClassCol = document.createElement('div');
        divClassCol.className = 'col s12 m6';
        fragment.appendChild(divClassCol);

        const span = document.createElement('span');
        span.className = 'card-title';
        span.textContent = `${article.title}`;

        const img = document.createElement('img');
        img.src = `${article.urlToImage}`;

        const divClassCardImage = document.createElement('div');
        divClassCardImage.classList.add('card-image');

        const divClassCard = document.createElement('div');
        divClassCard.className = 'card';

        const divClassCardContent = document.createElement('div');
        divClassCardContent.className = 'card-content';

        const p = document.createElement('p');
        p.textContent = ` ${article.description}`;

        divClassCol.appendChild(divClassCard);
        divClassCard.appendChild(divClassCardImage);
        divClassCardImage.appendChild(img);
        divClassCardImage.appendChild(span);
        divClassCard.appendChild(divClassCardContent);
        divClassCard.appendChild(p);

        return fragment;
    };
};