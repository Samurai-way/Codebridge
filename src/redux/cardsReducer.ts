import {CardObject} from "../api/types";
import {AppDispatch} from "./store";
import {cardsApi} from "../api/cardsApi";


//===TYPES======================================================================


export type CardsActionsType = ReturnType<typeof getCards>

type InitialStateType = typeof initialState

//===REDUCER====================================================================

const initialState = {
    cards: [] as CardObject,
}

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionsType) => {
    switch (action.type) {
        case 'GET/CARDS':
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state
    }
}

//===ACTIONS====================================================================

export const getCards = (cards: CardObject) => {
    return {
        type: 'GET/CARDS',
        cards
    }
}

export const getCardsTC = () => async (dispatch: AppDispatch) => {
    try {
        const res = await cardsApi.getCards()
        dispatch(getCards(res.data))
    } catch (e) {
        console.log(e)
    }
}
