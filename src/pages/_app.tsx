import Header from '@components/Header';
import type { AppProps } from 'next/app';
import '../style/globalStyle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
