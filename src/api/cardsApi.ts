import {instance} from "./instance";

export const cardsApi = {
    getCards() {
        return instance
            .get('?_limit=6')
    },
    getCard(id: string){
        return instance.get(`${id}`,)
    }
}