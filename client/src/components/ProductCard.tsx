import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../interfaces/item';

interface IProductCardProps {
    product: Item;
    reverb: boolean;
}

const ProductCard = ({ product, reverb }:IProductCardProps) => {

    return (
        <Link to={`/${reverb?'reverb-product':'product'}/${product._id}`} className='group'>
            <div className='w-full overflow-hidden rounded-lg bg-grey-400 aspect-w-1 aspect-h-1'>
                <div className='relative pb-[100%]'>
                    <img
                    src={product.photos?.map(photo => photo._links?.small_crop)[0]?.href}
                    alt={product.title}
                    className='absolute object-cover object-center w-full h-full group-hover:opacity-90'
                    />
                </div>
            </div>
            <h3 className='mt-4 text-sm text-grey-400'>{product.title}</h3>
            <p className='mt-1 text-lg font-medium text-grey-300'>
                {product.price?.display}
            </p>
        </Link>
    );
};

export default ProductCard;
