// import { Product } from '@lib/types';
import { FC } from 'react';

interface TileViewProps {
    products: {
        __typename?: 'Listing';
        title: string;
        description: string;
        finish?: string | null | undefined;
        model: string;
        submodel?: string | null | undefined;
        imageUrls: Array<string>;
        price: number;
        year?: number | null | undefined;
        make: string;
        id: number;
    }[];
}

const ProductTileView: FC<TileViewProps> = ({ products }) => {
    return (
        <div className='bg-inherit'>
            <div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='sr-only'>Products</h2>

                <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={'/product/' + product.id}
                            className='group'>
                            <div className='w-full overflow-hidden bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8 aspect-square'>
                                <img
                                    src={product.imageUrls[0]}
                                    alt={product.title}
                                    className='object-cover object-center w-full h-full group-hover:opacity-90'
                                />
                            </div>
                            <h3 className='mt-4 text-sm text-skin-text'>
                                {product.title}
                            </h3>
                            <p className='mt-1 text-lg font-medium text-skin-primary'>
                                {product.price}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductTileView;
