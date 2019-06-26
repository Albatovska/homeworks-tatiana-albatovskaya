import {
    WinnersService
} from "./../services";

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();
        this.render = this.render.bind(this);
        this.beforeRender = this.beforeRender.bind(this);
    }

    async beforeRender() {
        const { winners } = await this._winnersService.getWinners();

        this._winnersList = winners.map(this._newTemplate);
    }

    render() {
        return `
      <div>${this._winnersList.join("")}</div>
    `;
    }

    _newTemplate(item) {
        return `
    <div class="card" style="width: 50%; margin: 20px auto; border: none;">
      <img src="${item.member_id.user_id.avatar}" class="card-img-top" alt="..." style="border-radius: 50%; border: 3px solid black;">
      <div class="card-body">
        <p class="card-text" style="text-align: center; font-weight: bold;">${item.member_id.user_id.full_name}</p>
      </div>
    </div>
    `;
    }
}