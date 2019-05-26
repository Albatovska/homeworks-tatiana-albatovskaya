// класс для реализации функционала по добавланию нотификаций на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашей нотификашки
// имея примеры LoaderUI и NewsUI
// нужно реализовать set.... и remove.... для управления этим эл-том
class NotificationUI {
    constructor(selector) {
        this.container = document.querySelector(selector)
    };

    setNotification() {
        this.container.innerHTML = NotificationUI.getTemplate();
    };

    static getTemplate() {
        return `
       <div class='row'>
            <div class="col s12 m5">
               <div class="card-panel teal">
                 <span class="white-text">We are sorry! There are NO NEWS!
                 </span>
              </div>
            </div>
        </div>
`
    };
};