import SellUsYourGuitarForm from '@components/SellUsYourGuitarForm';
import React from 'react';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <main className='w-full h-full max-w-5xl p-8 mx-auto'>
            <div className='grid pt-20 place-items-center'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16634.316510972432!2d-122.21943501348252!3d47.48007242311355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904323fdc3ed19%3A0xa46b130975053566!2sDiablo%20Guitars!5e0!3m2!1sen!2sus!4v1640289847256!5m2!1sen!2sus'
                    className='w-full border-none aspect-video'
                    loading='lazy'></iframe>
            </div>

            <section className='relative my-4'>
                <h2 className='mt-12 mb-4 text-2xl font-semibold uppercase text-skin-primary'>
                    Contact Us
                </h2>

                <SellUsYourGuitarForm className='' />
            </section>
        </main>
    );
};

export default Contact;
