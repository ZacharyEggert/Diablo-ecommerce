import { Product } from '@lib/types';
import formatPrice from '@lib/util/formatPrice';
import Link from 'next/link';
import React from 'react';

interface ProductTileProps {
    product: Product;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
    return (
        <Link href={'/product/' + product.slug}>
            <div className='group hover:cursor-pointer'>
                <div className='w-full overflow-hidden bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8 aspect-square relative'>
                    <img
                        src={product.photos[0]}
                        alt={product.title}
                        className='object-cover object-center w-full h-full group-hover:opacity-90'
                    />
                    {product.salePrice &&
                        product.salePrice !== product.price && (
                            <div className='absolute top-6 -right-16 bg-skin-primary p-2 px-24 transform rotate-45 text-white text-base font-bold'>
                                SALE!
                            </div>
                        )}
                </div>
                <h3 className='mt-4 text-sm text-skin-text'>{product.title}</h3>
                <p className='mt-1 text-lg font-medium text-skin-primary'>
                    <span>
                        {formatPrice(product.salePrice ?? product.price)}{' '}
                    </span>
                    <span className='pl-4 line-through text-neutral-500'>
                        {product.salePrice && formatPrice(product.price)}
                    </span>
                </p>
            </div>
        </Link>
    );
};

export default ProductTile;
