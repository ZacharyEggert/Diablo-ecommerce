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

export interface CartState {
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
    let newState: CartState;

    switch (action.type) {
        case 'add':
            if (state.slugs.includes(action.payload)) return state;
            newState = { ...state, slugs: [...state.slugs, action.payload] };
            try {
                localStorage.setItem(
                    'cartState',
                    JSON.stringify({ ...newState, isOpen: false })
                );
            } catch (error) {
                console.error(error);
            }
            return newState;
        case 'remove':
            newState = {
                ...state,
                slugs: state.slugs.filter((item) => item !== action.payload),
            };
            try {
                localStorage.setItem(
                    'cartState',
                    JSON.stringify({ ...newState, isOpen: false })
                );
            } catch (error) {
                console.error(error);
            }
            return newState;
        case 'toggle':
            return { ...state, isOpen: !state.isOpen };
        case 'clear':
            newState = { ...state, slugs: [] };
            try {
                localStorage.setItem(
                    'cartState',
                    JSON.stringify({ ...newState, isOpen: false })
                );
            } catch (error) {
                console.error(error);
            }
            return newState;
        case 'openCart':
            return { ...state, isOpen: true };
        case 'closeCart':
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

const CartProvider = ({
    children,
    initState,
    ...props
}: {
    children: any;
    initState: CartState;
}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <ProtoCartProvider value={[state, dispatch]} {...props}>
            {children}
        </ProtoCartProvider>
    );
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { CartProvider, useCartContext };
