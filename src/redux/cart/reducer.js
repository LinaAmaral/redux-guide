import CartActionTypes from "./action-types"

const initialState = {
    products: [],
    productPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CartActionTypes.ADD_PRODUCT:
        //     //verifica se o produto já existe no carrinho
        //     const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
        //     //se já existe eu acrescento 1
        //     if (productIsAlreadyInCart) {
        //         return {
        //             ...state,
        //             products: state.products.map((product) =>
        //                 product.id === action.payload.id
        //                     ? { ...product, quantity: product.quantity + 1 }
        //                     : product
        //             )
        //         }
        //     }
        //     //senão eu acrescento o produto no carrinho com uma unidade
        //     return {
        //         ...state,
        //         products: [...state.products, { ...action.payload, quantity: 1 }]
        //     }
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case CartActionTypes.INCREASE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            }
        case CartActionTypes.DECREASE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ).filter(product => product.quantity >= 1)
            }

        default:
            return state;
    }
}

export default cartReducer