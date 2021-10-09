import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { sendInquiry } from '../util/api';

const SellUsYourGuitars = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            <div className=''></div>
            <div id='inquiry-email' className='px-4'>
                <form
                    className='grid w-full grid-cols-1 mx-auto sm:max-w-2xl lg:max-w-4xl lg:grid-cols-2'
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendInquiry(
                            e.target.email.value,
                            e.target.name.value,
                            e.target.phone.value,
                            e.target.message.value
                        );
                    }}>
                    <h1 className='mb-8 text-2xl text-center lg:col-span-2'>
                        Sell Us Your Guitars
                    </h1>
                    <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                        <label className='mt-1 text-lg text-grey-300'>
                            Name*
                        </label>
                        <input
                            className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                        <label className='mt-1 text-lg text-grey-300'>
                            Email*
                        </label>
                        <input
                            className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                        <label className='mt-1 text-lg text-grey-300'>
                            Phone
                        </label>
                        <input
                            className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                            type='text'
                            name='phone'
                            placeholder='Phone'
                            required={false}
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2 lg:col-span-2'>
                        <label className='mt-1 text-lg text-grey-300'>
                            Message*
                        </label>
                        <textarea
                            required
                            className='w-full px-2 py-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 lg:max-w-full'
                            type='text'
                            name='message'
                            placeholder='Message'
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl'>
                        <button className='px-4 py-2 my-4 text-lg rounded-lg button bg-grey-800 text-grey-300'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SellUsYourGuitars;
