import React from 'react';
import Navigation from '../components/Navigation';
import ShopView from '../components/ShopView';
import Footer from '../components/Footer';
import IShop from '../interfaces/shop';


const Shop = (props: IShop) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    
    const { inventory } = props;

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            <div className='container flex flex-row items-center justify-end px-4 pt-8 mx-auto md:max-w-2xl sm:px-6 lg:px-8 xl:max-w-7xl lg:max-w-5xl'>
                <></>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full p-2 rounded-md bg-grey-800 sm:w-72'
                />
            </div>
            <div className='container mx-auto'>
                <ShopView inventory={inventory.filter((item) => {return !item.categories?.map((category)=>category.full_name.toLowerCase()).includes('merch')})} searchTerm={searchTerm} />
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
