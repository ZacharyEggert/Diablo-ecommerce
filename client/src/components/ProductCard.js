import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../util';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className='group'>
            <div className='w-full overflow-hidden rounded-lg bg-grey-400 aspect-w-1 aspect-h-1 '>
                <img
                    src={product.imageSrc}
                    alt={product.name}
                    className='object-cover object-center w-full h-full group-hover:opacity-90'
                />
            </div>
            <h3 className='mt-4 text-sm text-grey-400'>{product.name}</h3>
            <p className='mt-1 text-lg font-medium text-grey-300'>
                {formatPrice({price:product.price, currency:'USD'})}
            </p>
        </Link>
    );
};

export default ProductCard;
