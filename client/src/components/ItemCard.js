import React from 'react';
import { Link } from 'react-router-dom';


const ItemCard = ({ item }) => {
    return (
        <div className='flex-none p-2 m-2 lg:w-[calc(33.3%-16px)] lg:p-4'>
            <Link to={`/item/${item._id}`}>
                <div className='bg-white border-2 border-gray-500'>
                    <div className='p-4 image-container'>
                        <div className='w-16 h-16 mx-auto bg-red-800 lg:my-16 lg:w-40 lg:h-40 2xl:w-52 2xl:h-52 2xl:my-8'></div>
                    </div>
                    <div className='p-4 text-container'>
                        <h3 className='flex flex-row justify-between overflow-hidden lg:text-lg 2xl:text-xl lg:h-14 flex-nowrap'><span className='w-3/4'>{item.name}</span><span className=''>{item.listingPrice}</span></h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
