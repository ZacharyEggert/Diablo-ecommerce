import React from 'react';
import { login } from '../api/user';
import PageWrapper from '../wrappers/PageWrapper';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
    const submitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit login form');
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        // console.log(email, password);
        login(email, password).then((res) => {
            if (res.data?.error) console.log(res.data);
        });
    };

    return (
        <PageWrapper>
            <div className='flex flex-col items-center justify-center py-12'>
                <form className='w-full max-w-sm' onSubmit={submitLoginForm}>
                    <div className='flex flex-col items-center justify-center p-2 pb-8'>
                        <h1 className='text-2xl font-bold'>Login</h1>
                        <p className='text-center text-grey-600'>
                            Sign in to your account
                        </p>
                    </div>
                    <div className='flex flex-wrap mb-6'>
                        <div className='w-full px-3 md:w-1/2'>
                            <label
                                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-700'
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='block w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none text-grey-700 bg-grey-200 border-grey-200 focus:outline-none focus:bg-white focus:border-grey-500'
                                id='email'
                                type='text'
                                autoComplete='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='w-full px-3 md:w-1/2'>
                            <label
                                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-700'
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='block w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none text-grey-700 bg-grey-200 border-grey-200 focus:outline-none focus:bg-white focus:border-grey-500'
                                id='password'
                                type='password'
                                autoComplete='current-password'
                                placeholder='Password'
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between px-3'>
                        <button
                            className='w-full px-4 py-2 mb-2 font-bold text-white rounded-lg bg-grey-500 hover:bg-grey-700 focus:outline-none focus:shadow-outline'
                            type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    );
};

export default Login;
