import type { AppProps } from 'next/app';
import '../style/globalStyle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
