import Header from '@components/Header';
import { EMAILJS_USER_ID, GRAPHQL_URL } from '@lib/constants';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider, createClient } from 'urql';
import emailjs from 'emailjs-com';

import '../style/globalStyle.css';
import { CartProvider, CartState, initialState } from '@lib/state/cartState';
import ShoppingCart from '@components/ShoppingCart';

const client = createClient({
    url: GRAPHQL_URL,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [initState, setInitState] = useState<CartState>(initialState);

    useEffect(() => {
        try {
            emailjs.init(EMAILJS_USER_ID);
            console.log('emailjs init');
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        const cartState = localStorage.getItem('cartState');
        try {
            if (cartState) {
                setInitState(JSON.parse(cartState));
            }
        } catch (error) {
            console.error(error);
        }
    }, [typeof window]);

    return (
        <CartProvider initState={initState}>
            <Provider value={client}>
                <div className='flex flex-col justify-between min-h-screen text-skin-text bg-skin-background'>
                    <Header />
                    <div className='flex-grow'>
                        <Component {...pageProps} />
                    </div>
                    <ShoppingCart />
                </div>
            </Provider>
        </CartProvider>
    );
};

export default MyApp;
