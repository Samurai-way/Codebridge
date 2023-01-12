import {instance} from "./instance";

export const cardsApi = {
    getCards() {
        return instance
            .get('?_limit=6')
    },
    getCard(id: number){
        return instance.get(`${id}`,)
    }
}