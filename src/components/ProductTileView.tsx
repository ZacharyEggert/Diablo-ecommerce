import { Products } from '@lib/types';
import { FC } from 'react';
import ProductTile from './ProductTile';

interface TileViewProps {
    products: Products;
}

const ProductTileView: FC<TileViewProps> = ({ products }) => {
    return (
        <div className='bg-inherit'>
            <div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='sr-only'>Products</h2>

                <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {products!.map((product) => (
                        <ProductTile product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductTileView;
