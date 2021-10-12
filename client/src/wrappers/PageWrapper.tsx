import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            {children}
            <Footer />
        </div>
    );
};

export default PageWrapper;
