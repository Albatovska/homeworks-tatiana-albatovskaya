import {
    newsContainer
} from './uiElements.config';


export class LoaderUI {
    constructor() {
        this.container = newsContainer
    }

    setLoader() {
        this.container.innerHTML = LoaderUI.getTemplate()
    }

    removeLoader() {
        this.container.innerHTML = ''
    }


    static getTemplate() {
        return `
        <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        `
    }
}