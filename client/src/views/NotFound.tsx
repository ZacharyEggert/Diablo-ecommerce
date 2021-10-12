import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { contact } from '../data';

export default function NotFound() {
    return (
        <div className='min-h-screen'>
            <Navigation />
            <div className='min-h-[calc(100vh-12rem)] px-4 py-16 bg-none sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
                <div className='mx-auto max-w-max'>
                    <main className='sm:flex'>
                        <p className='text-4xl font-extrabold text-red-600 sm:text-5xl'>
                            404
                        </p>
                        <div className='sm:ml-6'>
                            <div className='sm:border-l sm:border-grey-300 sm:pl-6'>
                                <h1 className='text-4xl font-extrabold tracking-tight text-grey-400 sm:text-5xl'>
                                    Oops...
                                </h1>
                                <p className='mt-1 text-base text-grey-500'>
                                    It looks like that link is broken.
                                </p>
                            </div>
                            <div className='flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                                <Link
                                    to='/'
                                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                                    Go back home
                                </Link>
                                <a
                                    href={`mailto:${contact.supportEmail}?subject=Broken Link`}
                                    className='inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-grey-700 bg-grey-200 hover:bg-grey-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500'>
                                    Contact support
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
