import CartActionTypes from './action-types'

export const addProductToCart = (payload) =>({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductCart = (payload) =>({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const increaseProductCart = (payload) =>({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload
})

export const decreaseProductCart = (payload) =>({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload
})