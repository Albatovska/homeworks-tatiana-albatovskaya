import {
    AuthService
} from './../services/auth.service';
import {
    ActiveRoute
} from './../core/active.route.service';
import {
    NewsService
} from './../services/news.service';
export class NewsComponent {
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._authService = new AuthService();
        this._newsService = new NewsService();

        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);

        this._newsToken = this._authService.token;
        this._news = {}
        this._newsUrl = {}
    }

    async beforeRender() {
        this._news = await this._newsService.getNews(this._newsToken)
        this._newsUrl = this._news.news.map(({ pictures }) => pictures.map(({ url }) => url).slice(0, 3))

        console.log(this._newsUrl)
    }
    render() {
            return this._newsUrl.map((newsItem) => `<div>${newsItem.map((url)=>`<img src=${url} />`).join('')}</div>`).join('')
}
}