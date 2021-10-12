import { Link } from 'react-router-dom';
import diabloLogo from '../assets/DIABLO420px.gif';
import NavigationMobile from './NavigationMobile';

const navigation = [
    { name: 'Shop', href: '/' },
    { name: 'Sell Us Your Guitars', href: '/sell-us-your-guitars' },
    { name: 'Merchandise', href: '/merchandise' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Appointments', href: '/appointments' },
    // { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
    return (
        <header className='bg-grey-900'>
            <nav
                className='px-4 mx-auto max-w-[1540px] sm:px-6 lg:px-8'
                aria-label='Top'>
                <div className='flex items-center justify-between w-full py-4 border-b border-grey-800 lg:border-none'>
                    <Link to='/'>
                        <span className='sr-only'>Diablo Guitars</span>
                        <img
                            className='w-auto h-20'
                            src={diabloLogo}
                            alt='Business Logo'
                        />
                    </Link>
                    <div className='flex items-center'>
                        <div className='hidden ml-10 space-x-8 lg:block'>
                            {navigation.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className='text-base font-medium text-white hover:text-gray-200'>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className='block lg:hidden'>
                            <NavigationMobile items={navigation} />
                        </div>
                    </div>
                    <div className='hidden ml-10 space-x-4 lg:block'>
                        <div className='w-20 h-20'></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
