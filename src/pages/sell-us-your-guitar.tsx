import SellUsYourGuitarForm from '@components/SellUsYourGuitarForm';
import React from 'react';

interface SellUsYourGuitarProps {}

const SellUsYourGuitar: React.FC<SellUsYourGuitarProps> = () => {
    return (
        <main className='w-full h-full p-8 pt-16'>
            <h2 className='my-4 text-2xl font-semibold uppercase text-skin-primary'>
                Sell us your guitars
            </h2>

            <section className='my-4'>
                <h3 className='mb-4 text-xl font-light'>Sell It</h3>
                <p>
                    Email us the make, model, year, color, condition,
                    modifications and or repairs if any and serial # with photos
                    and, we will respond with a cash offer!
                </p>
            </section>
            <section className='my-4'>
                <h3 className='mb-4'>Consign It</h3>
                <p>
                    We will take your guitar, professionally set it up, and take
                    high quality detailed photos of your instrument; as well as
                    make a detailed description of your guitar and list it on
                    all our selling platforms. Guitars must be $1,000 or above
                    to be applicable.
                </p>
            </section>

            <section className='my-4'>
                <h3 className='sr-only'>Contact Form</h3>
                <p className='italic'>
                    Sellers are responsibe for delivering their items to Diablo
                    Guitars.
                </p>
                <SellUsYourGuitarForm />
            </section>
        </main>
    );
};

export default SellUsYourGuitar;
