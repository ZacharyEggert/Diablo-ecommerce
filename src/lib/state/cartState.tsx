import {
    createContext,
    Dispatch,
    Reducer,
    useContext,
    useReducer,
} from 'react';

// array of items in cart as slugs
const cartContext = createContext<[CartState, Dispatch<CartReducerAction>]>([
    { slugs: [], isOpen: false },
    () => {},
]);
const ProtoCartProvider = cartContext.Provider;

interface CartState {
    slugs: (string | undefined)[];
    isOpen: boolean;
}
interface CartReducerAction {
    type: 'add' | 'remove' | 'toggle' | 'clear' | 'openCart' | 'closeCart';
    payload?: string;
}

// empty cart
export const initialState: CartState = { slugs: [], isOpen: false };

const reducer: Reducer<CartState, CartReducerAction> = (
    state: CartState,
    action: CartReducerAction
) => {
    switch (action.type) {
        case 'add':
            if (state.slugs.includes(action.payload)) return state;
            return { ...state, slugs: [...state.slugs, action.payload] };
        case 'remove':
            return {
                ...state,
                slugs: state.slugs.filter((item) => item !== action.payload),
            };
        case 'toggle':
            return { ...state, isOpen: !state.isOpen };
        case 'clear':
            return { ...state, slugs: [] };
        case 'openCart':
            return { ...state, isOpen: true };
        case 'closeCart':
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

const CartProvider = (props: { children: any }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <ProtoCartProvider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { CartProvider, useCartContext };
