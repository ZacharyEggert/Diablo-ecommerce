import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../interfaces/item';
import { formatPrice } from '../util';

interface IProductCardProps {
    product: Item;
}

const ProductCard = ({ product }:IProductCardProps) => {
    return (
        <Link to={`/product/${product.id}`} className='group'>
            <div className='w-full overflow-hidden rounded-lg bg-grey-400 aspect-w-1 aspect-h-1'>
                <div className='relative pb-[100%]'>
                    <img
                    src={product['product_image_1']}
                    alt={product.title}
                    className='absolute object-cover object-center w-full h-full group-hover:opacity-90'
                    />
                </div>
            </div>
            <h3 className='mt-4 text-sm text-grey-400'>{product.title}</h3>
            <p className='mt-1 text-lg font-medium text-grey-300'>
                {formatPrice({price:product.price, currency:'USD'})}
            </p>
        </Link>
    );
};

export default ProductCard;
