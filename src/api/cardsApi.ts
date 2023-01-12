import {instance} from "./instance";

export const cardsApi = {
    getCards() {
        return instance
            .get('')
    }
}