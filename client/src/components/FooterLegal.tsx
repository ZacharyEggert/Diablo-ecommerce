import React from 'react';
import { Link } from 'react-router-dom';

const FooterLegal:React.FC = () => {
    return (
        <div className='footer-legal'>
            <h3 className='my-2 text-lg font-bold text-center text-grey-200'>Legal</h3>
            <ul>
                <li className='text-center'>
                    <Link to='/return-policy' className='hover:text-white'>Return Policy</Link>
                </li>
                <li className='text-center'>
                    <Link to='/consignments' className='hover:text-white'>Consignments</Link>
                </li>
            </ul>
            <div className='flex flex-row items-center justify-center p-4 '>
            <button className='px-4 py-2 mx-auto rounded-full text-grey-200 bg-none hover:none'>
                <Link to='/login' className='mx-auto hover:text-white'>Log In</Link>
            </button></div>
        </div>
    );
};

export default FooterLegal;
