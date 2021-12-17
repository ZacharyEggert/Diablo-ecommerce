import Header from '@components/Header';
import { GRAPHQL_URL } from '@lib/constants';
import type { AppProps } from 'next/app';
import { Provider, createClient } from 'urql';

import '../style/globalStyle.css';

const client = createClient({
    url: GRAPHQL_URL,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
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
