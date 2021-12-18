import React from 'react';

const SellUsYourGuitarForm: React.FC<React.ComponentProps<'form'>> = (
    props
) => {
    const formRef = React.useRef<HTMLFormElement>(null);

    return (
        <form
            {...props}
            className={`${props.className}  max-w-5xl mx-auto`}
            ref={formRef}>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-inherit w-full text-skin-text peer placeholder-transparent border-red-900 border-solid border-[1px] ring-1 ring-red-900 px-3 py-2 focus:border-red-700 focus:ring-red-700 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Name'
                    id='user_name'
                />
                <label
                    htmlFor='user_name'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Name*
                </label>
            </div>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-inherit w-full text-skin-text peer placeholder-transparent border-red-900 border-solid border-[1px] ring-1 ring-red-900 px-3 py-2 focus:border-red-700 focus:ring-red-700 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='email'
                    id='user_email'
                />
                <label
                    htmlFor='user_email'
                    className='absolute text-base top-1.5 peer-placeholder-shown:text-lg left-3 peer-placeholder-shown:top-10 text-red-600 peer-placeholder-shown:text-skin-text transition-all pointer-events-none peer-placeholder-shown:peer-focus:text-red-600 
                peer-placeholder-shown:peer-focus:text-base
                peer-placeholder-shown:peer-focus:top-1.5
                '>
                    Email*
                </label>
            </div>
            <div className='relative my-2 group pt-8'>
                <input
                    className='bg-inherit w-full text-skin-text peer placeholder-transparent border-red-900 border-solid border-[1px] ring-1 ring-red-900 px-3 py-2 focus:border-red-700 focus:ring-red-700 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Subject'
                    id='subject'
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
                    className='bg-inherit w-full text-skin-text peer placeholder-transparent border-red-900 border-solid border-[1px] ring-1 ring-red-900 px-3 py-2 focus:border-red-700 focus:ring-red-700 focus:ring-1 rounded-lg outline-none text-lg'
                    placeholder='Message'
                    id='message'
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
        </form>
    );
};

export default SellUsYourGuitarForm;
