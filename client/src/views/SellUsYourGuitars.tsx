import React from 'react';
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const SellUsYourGuitars = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            <div className='w-full px-4 py-10 mx-auto sm:px-0 lg:px-2 sale-prose sm:max-w-2xl lg:max-w-4xl text-grey-100'>
                <h2 className='py-4 text-2xl font-semibold text-left'>Sell It</h2>
                <p className='text-left'>
                    Email us the make, model, year, color, condition,
                    modifications and or repairs if any and serial # with photos
                    and, we will respond with a cash offer!
                </p>
                <h2 className='py-4 text-2xl font-semibold text-left'>Consign It</h2>
                <p className='text-left'>
                    We will take your guitar, professionally set it up, and take
                    high quality detailed photos of your instrument; as well as
                    make a detailed description of your guitar and list it on
                    all our selling platforms. Guitars must be $1,000 or above
                    to be applicable.
                </p>
                <h2 className='py-4 text-2xl font-semibold text-left'>Layaway</h2>
                <p className='text-left'>
                    We offer a 60-day layaway program for all items in our
                    store. A minimum 10% non-refundable deposit is required. In
                    the event of a layaway cancellation any deposited funds will
                    become store credit, which can be used on any item in stock.
                </p>
            </div>
            <EmailForm />
            <Footer />
        </div>
    );
};

export default SellUsYourGuitars;
