import {any} from "prop-types";

export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'

const initialState = {
    items: {} as [],
    totalPrice: 0,
    totalCount: 0
}

export interface StateType {
    items: any,
    totalPrice: number,
    totalCount: number
}

export interface IAction {
    type: string
    payload?: any
}

const cart = (state = initialState, action: IAction): StateType => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allItems = [].concat.apply([] as any [], Object.values(newItems)as any)
            const totalPrice = allItems.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allItems.length,
                totalPrice
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default cart
