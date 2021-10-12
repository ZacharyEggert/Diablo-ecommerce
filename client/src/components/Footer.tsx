import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLegal from './FooterLegal';
import FooterMediaLinks from './FooterMediaLinks';

const Footer:React.FC = () => {
    return (
        <footer className='bg-grey-900 text-grey-100'>
            <div className='grid w-full grid-cols-1 p-8 mx-auto space-x-2 max-w-7xl sm:grid-cols-3'>
                <div className='col-span-1'>
                    <FooterInfo />
                </div>
                <div className='col-span-1'>
                    <FooterMediaLinks />
                </div>
                <div className='col-span-1'>
                    <FooterLegal />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
