import { combineReducers } from 'redux';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

const cartTotalReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state + action.payload.price;
        case 'REMOVE_FROM_CART':
            return state - action.payload.price;
        default:
            return state;
    }
};

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};

const cartItemCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state + 1;
        case 'REMOVE_FROM_CART':
            return state - 1;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cart: cartReducer,
    cartTotal: cartTotalReducer,
    cartItemCount: cartItemCountReducer,
    products: productsReducer,
});

export default rootReducer;
