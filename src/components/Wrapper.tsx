import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Wrapper: React.FC = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-full min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
};

export default Wrapper;
