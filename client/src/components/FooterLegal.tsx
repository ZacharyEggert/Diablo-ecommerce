import React from 'react';
import { Link } from 'react-router-dom';
import LogInButton from './LogInButton';

const FooterLegal: React.FC = () => {
    return (
        <div className='footer-legal'>
            <h3 className='my-2 text-lg font-bold text-center text-grey-200'>
                Legal
            </h3>
            <ul>
                <li className='text-center'>
                    <Link to='/return-policy' className='hover:text-white'>
                        Return Policy
                    </Link>
                </li>
                <li className='text-center'>
                    <Link to='/consignments' className='hover:text-white'>
                        Consignments
                    </Link>
                </li>
            </ul>
            <LogInButton />
        </div>
    );
};

export default FooterLegal;
