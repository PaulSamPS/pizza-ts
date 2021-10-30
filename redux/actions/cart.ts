import {ADD_PIZZA_TO_CART} from "../reducers/cart";

interface addPizza {
    type: string
    payload: {}
}

export const addPizzaToCart = (item: {}): addPizza => ({
    type: ADD_PIZZA_TO_CART,
    payload: item
})