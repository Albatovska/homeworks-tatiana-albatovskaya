import {
    newsContainer
} from './uiElements.config';

export class NotificationUI {
    constructor() {
        this.container = newsContainer
    }

    showNotification() {
        this.container.innerHTML = NotificationUI.getTemplate()
    }

    hideNotification() {
        this.container.innerHTML = ''
    }

    static getTemplate() {
        return `
        <div class="row">
            <div class="col s12 m5">
            <div class="card-panel teal">
                <span class="white-text">Ничего не найдено</span>
            </div>
            </div>
        </div>
        `
    }

}