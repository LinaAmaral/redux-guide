import CartActionTypes from "./action-types"

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) =>{
    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            return {...state, products:[...initialState.products, action.payload]};
        default:
            return state;
    }
}

export default cartReducer