import {CardObject} from "../api/types";
import {AppDispatch} from "./store";
import {cardsApi} from "../api/cardsApi";


//===TYPES======================================================================


export type setCards = ReturnType<typeof getCardsAC>
export type getCard = ReturnType<typeof getCardAC>


export type CardsActionsType = setCards | getCard
type InitialStateType = typeof initialState

//===REDUCER====================================================================


const initialState = {
    cards: [] as CardObject,
    card: [] as CardObject
}

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET/CARDS':
            return {
                ...state,
                cards: action.cards
            }
        case 'GET/CARD':
            return {
                ...state,
                card: action.card
            }
        default:
            return state
    }
}

//===ACTIONS====================================================================

export const getCardsAC = (cards: CardObject) => {
    return {
        type: 'GET/CARDS',
        cards
    } as const
}

export const getCardAC = (card: CardObject) => {
    return {
        type: 'GET/CARD',
        card
    } as const
}

export const getCardsTC = () => async (dispatch: AppDispatch) => {
    try {
        const res = await cardsApi.getCards()
        dispatch(getCardsAC(res.data))
    } catch (e) {
        console.log(e)
    }
}

export const getCardTC = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const res = await cardsApi.getCard(id)
        dispatch(getCardAC(res.data))
    } catch (e) {
        console.log(e)
    }
}
