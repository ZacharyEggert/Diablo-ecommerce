import Header from '@components/Header';
import { EMAILJS_USER_ID, GRAPHQL_URL } from '@lib/constants';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider, createClient } from 'urql';
import emailjs from 'emailjs-com';

import '../style/globalStyle.css';

const client = createClient({
    url: GRAPHQL_URL,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        try {
            emailjs.init(EMAILJS_USER_ID);
            console.log('emailjs init');
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <Provider value={client}>
            <div className='flex flex-col justify-between min-h-screen text-skin-text bg-skin-background'>
                <Header />
                <div className='flex-grow'>
                    <Component {...pageProps} />
                </div>
            </div>
        </Provider>
    );
};

export default MyApp;
