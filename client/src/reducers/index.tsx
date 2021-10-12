import { combineReducers, Reducer } from 'redux';

const cartReducer:Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item: { id: any; }) => item.id !== action.payload);
        default:
            return state;
    }
};

const cartTotalReducer:Reducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state + action.payload.price;
        case 'REMOVE_FROM_CART':
            return state - action.payload.price;
        default:
            return state;
    }
};

const productsReducer:Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};

const cartItemCountReducer:Reducer = (state = 0, action) => {
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
