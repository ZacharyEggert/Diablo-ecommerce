import React from 'react';
import { ReactComponent as FacebookLogo} from '../assets/facebook.svg';
import { ReactComponent as InstagramLogo} from '../assets/instagram.svg';

const FooterMediaLinks:React.FC = () => {
    return (
        <div className='footer-media-links'>
            <h3 className='mx-auto my-2 text-lg font-bold text-grey-200 min-w-min max-w-max'>
                Media Links
            </h3>
            <div className='flex items-center justify-center'>
                <a
                    href='https://www.facebook.com/diabloxguitars/'
                    className='footer-media-link'
                    target='_blank'
                    rel='noreferrer'>
                    <FacebookLogo
                        className='inline w-8 h-8 mx-4 my-4 opacity-90 hover:opacity-100'
                        fill='#ffffff'
                    />
                </a>
                <a
                    href='https://www.instagram.com/diabloguitarsseattle/'
                    className='footer-media-link'
                    target='_blank'
                    rel='noreferrer'>
                    <InstagramLogo
                        className='inline w-8 h-8 mx-4 my-4 opacity-90 hover:opacity-100'
                        fill='#ffffff'
                    />
                </a>
            </div>
        </div>
    );
};

export default FooterMediaLinks;
