import React from 'react';
import { contact } from '../data';

const FooterInfo = () => {
    const addressLink = `https://www.google.com/maps/place/${contact.address},+${contact.city},+${contact.state}+${contact.zip}`;

    return (
        <div className='footer-info'>
            <h3 className='my-2 text-lg font-bold text-center text-grey-200'>
                Info
            </h3>
            <ul className='text-center'>
                <li>
                    <a
                        href={addressLink}
                        className='hover:text-white'
                        target='_blank'
                        rel='noreferrer'>
                        {contact.address}{' '}
                    </a>
                </li>
                <li>
                    <a
                        href={addressLink}
                        className='hover:text-white'
                        target='_blank'
                        rel='noreferrer'>
                        {contact.city}, {contact.state} {contact.zip}
                    </a>
                </li>
                <li>
                    <a
                        href={`tel:${contact.phone}`}
                        className='hover:text-white'>
                        {contact.phone}
                    </a>
                </li>
                {contact.wordPhone && <li>
                    <a
                        href={`tel:${contact.phone}`}
                        className='hover:text-white'>
                        {contact.wordPhone}
                    </a>
                </li>}
                <li>
                    <a
                        href={`mailto:${contact.email}?subject=Customer Inquiry`}
                        className='hover:text-white'>
                        {contact.email}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterInfo;
