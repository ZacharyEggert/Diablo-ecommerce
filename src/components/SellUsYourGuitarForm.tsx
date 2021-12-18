import {
    EMAILJS_FORM_TEMPLATE_ID,
    EMAILJS_SERVICE_ID,
    EMAILJS_USER_ID,
} from '@lib/constants';
import emailjs from 'emailjs-com';
import React from 'react';

const SellUsYourGuitarForm: React.FC<React.ComponentProps<'form'>> = (
    props
) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            emailjs
                .sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_FORM_TEMPLATE_ID,
                    formRef.current as HTMLFormElement
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert('Email sent!');
                        formRef.current?.reset();
                    },
                    (error) => {
                        console.error(error.text);
                        alert(
                            'Email failed! Please try again. If this persists, contact us.'
                        );
                        console.log({
                            EMAILJS_SERVICE_ID,
                            EMAILJS_FORM_TEMPLATE_ID,
                            EMAILJS_USER_ID,
                        });
                    }
                );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            {...props}
            className={`${props.className}  max-w-5xl mx-auto`}
            ref={formRef}
            onSubmit={sendEmail}>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-neutral-800 w-full text-skin-text peer placeholder-transparent border-neutral-700 border-solid border-[1px] ring-1 ring-neutral-700 px-3 py-2 focus:border-red-800 focus:ring-red-800 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Name'
                    id='name'
                    autoComplete='name'
                    name='user_name'
                />
                <label
                    htmlFor='name'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Name*
                </label>
            </div>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-neutral-800 w-full text-skin-text peer placeholder-transparent border-neutral-700 border-solid border-[1px] ring-1 ring-neutral-700 px-3 py-2 focus:border-red-800 focus:ring-red-800 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='email'
                    id='email'
                    autoComplete='email'
                    name='user_email'
                />
                <label
                    htmlFor='email'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Email*
                </label>
            </div>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-neutral-800 w-full text-skin-text peer placeholder-transparent border-neutral-700 border-solid border-[1px] ring-1 ring-neutral-700 px-3 py-2 focus:border-red-800 focus:ring-red-800 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Subject'
                    id='subject'
                    name='subject'
                />
                <label
                    htmlFor='subject'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Subject*
                </label>
            </div>
            <div className='relative my-2 group pt-8'>
                <textarea
                    className='bg-neutral-800 w-full text-skin-text peer placeholder-transparent border-neutral-700 border-solid border-[1px] ring-1 ring-neutral-700 px-3 py-2 focus:border-red-800 focus:ring-red-800 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Message'
                    id='message'
                    name='message'
                />
                <label
                    htmlFor='message'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Message*
                </label>
            </div>
            <div className='flex flex-row justify-end'>
                <button
                    type='submit'
                    value='Send'
                    className='my-4 px-3 py-2 text-xl text-skin-text rounded-lg border-[1px] ring-1 ring-neutral-700 border-neutral-700 outline-none focus:border-red-800 focus:ring-red-800'>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SellUsYourGuitarForm;
