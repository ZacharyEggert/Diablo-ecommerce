import React from 'react';
import { sendInquiry } from '../api/inquiry';

const EmailForm:React.FC = () => {
    return (
        <div id='inquiry-email' className='px-4'>
            <form
                className='grid w-full grid-cols-1 mx-auto sm:max-w-2xl lg:max-w-4xl lg:grid-cols-2'
                onSubmit={(e) => {
                    e.preventDefault();

                    const target = e.target as HTMLFormElement;

                    const name = target.namefield as HTMLInputElement;
                    const email = target.email as HTMLInputElement;
                    const phone = target.phone as HTMLInputElement;
                    const message = target.message as HTMLTextAreaElement;


                    sendInquiry({
                        email: email.value,
                        name: name.value,
                        phone: phone.value,
                        message: message.value,
                    });
                }}>
                <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                    <label className='mt-1 text-lg text-grey-300'>Name*</label>
                    <input
                        className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                        type='text'
                        name='namefield'
                        placeholder=''
                        required
                    />
                </div>
                <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                    <label className='mt-1 text-lg text-grey-300'>Email*</label>
                    <input
                        className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                        type='email'
                        name='email'
                        placeholder=''
                        required
                    />
                </div>
                <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2'>
                    <label className='mt-1 text-lg text-grey-300'>Phone</label>
                    <input
                        className='w-full px-2 my-2 text-lg rounded-md text-grey-200 bg-grey-800 sm:max-w-full'
                        type='text'
                        name='phone'
                        placeholder=''
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
                        typeof='text'
                        name='message'
                        placeholder=''
                    />
                </div>
                <div className='flex flex-col items-start justify-center w-full sm:max-w-2xl lg:max-w-4xl lg:px-2 lg:col-span-2'>
                    <button className='px-4 py-2 my-4 text-lg rounded-lg button bg-grey-800 text-grey-300'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
