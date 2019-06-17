import {
    Http
} from "./../core/http.service";
import {
    ENV
} from "./../config/env";

export class WinnersService {
    getWinners() {
        const http = new Http();

        return new Promise(async(resolve, reject) => {
            try {
                const result = await http.get(
                    `${ENV.apiUrl}/public/winners?part=1&limit=15`
                );
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }
}