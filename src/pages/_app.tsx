import Header from '@components/Header';
import type { AppProps } from 'next/app';
import '../style/globalStyle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='min-h-screen text-skin-text bg-skin-background flex flex-col justify-between'>
            <Header />
            <div className='flex-grow'>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

export default MyApp;
