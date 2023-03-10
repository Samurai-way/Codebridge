import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {cardsReducer} from "./cardsReducer";

const rootReducer = combineReducers({
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootReducerType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootReducerType, unknown, any>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootReducerType> = useSelector


// @ts-ignore
window.store = store //for console view