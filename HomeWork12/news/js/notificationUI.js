// класс для реализации функционала по добавланию нотификаций на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашей нотификашки
// имея примеры LoaderUI и NewsUI
// нужно реализовать set.... и remove.... для управления этим эл-том
class NotificationUI {
    constructor(selector) {
        this.container = document.querySelector(selector)
        console.log(container)
    };

    setNotification() {
        this.container.innerHTML = NotificationUI.getTemplate();
    };
    /* 
        removeNotification() {
            this.container.innerHTML = ''
        } */

    static getTemplate() {
        return `
<div class="row">
        <div class="col s12 m6">
          <div class="no-find">
                       <span class="card-no-find"> We are sorry! There are NO NEWS!</span>
                      <div class="card-content">
                         </div>
          </div>
        </div>
      </div>
`
    };
};