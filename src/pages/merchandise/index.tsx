import Loading from '@components/Loading';
import ProductTileView from '@components/ProductTileView';
import React, { useEffect } from 'react';
import { useListingsByCategoryQuery } from 'src/generated/graphql';

interface indexProps {}

const Merchandise: React.FC<indexProps> = ({}) => {
    const category = 'merch';

    const [{ fetching, data, error }, call] = useListingsByCategoryQuery({
        variables: { category },
    });

    useEffect(() => {
        call();
    }, [call]);

    const listings = data?.listingsByCategory.data;
    const errors = data?.listingsByCategory.errors;

    return (
        <div>
            <div className='h-20'></div>
            {fetching && (
                <div className='flex items-center justify-center h-full'>
                    <div className='h-48 max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                        <Loading className='w-48 h-48' />
                        <h2 className='text-4xl text-center animate-pulse'>
                            Loading ...
                        </h2>
                    </div>
                </div>
            )}
            {!errors && !fetching && data && listings && (
                <ProductTileView products={listings} />
            )}
            {(errors || error) && (
                <div>An Error occurred. Please try again later</div>
            )}
        </div>
    );
};

export default Merchandise;
