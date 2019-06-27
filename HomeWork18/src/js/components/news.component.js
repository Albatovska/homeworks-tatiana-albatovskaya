import { AuthService } from "./../services/auth.service";
import { NewsService } from "./../services/news.service";

export class NewsComponent {
    constructor() {
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

        console.log(this._news)
    }

    render() {
        let template = "";

        this._news.news.forEach(el => {
            template += `
                <div class="card mx-auto mt-3 mb-3" style="width: 30rem;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="${el.owner.avatar}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${el.owner.full_name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card mx-auto" style="width: 50rem;">
                    <img src="${el.pictures[0].url}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>   
            `
        });

        return `${template}`;
    }
}