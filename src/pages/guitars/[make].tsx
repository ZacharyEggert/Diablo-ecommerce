import Loading from '@components/Loading';
import ProductTileView from '@components/ProductTileView';
import { capitalCase } from '@lib/util/caseManagement';
import { mapMakeToMake } from '@lib/util/mapMakeToMake';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useListingsByMakeAndCategoryQuery } from 'src/generated/graphql';

interface MakeProps {}

const Make: React.FC<MakeProps> = ({}) => {
    const router = useRouter();
    const { make } = router.query;
    const category = 'guitars';

    useEffect(() => {
        document.title = `Diablo Guitars - ${make} ${category}`;
    }, [make]);

    const [{ fetching, data, error }, call] = useListingsByMakeAndCategoryQuery(
        {
            variables: {
                category,
                make: capitalCase(
                    make
                        ? mapMakeToMake[make as string] || (make as string)
                        : ''
                ),
            },
        }
    );

    useEffect(() => {
        call();
    }, [call]);

    const listings = data?.listingsByMakeAndCategory.data;
    const errors = data?.listingsByMakeAndCategory.errors;

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
                <>
                    {listings.length > 0 ? (
                        <ProductTileView products={listings} />
                    ) : (
                        <div className='flex items-center justify-center h-full'>
                            <div className='h-48 max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                                <h2 className='text-4xl text-center animate-pulse'>
                                    No products found in this category for this
                                    make <br />
                                    {make} {category}
                                </h2>
                            </div>
                        </div>
                    )}
                </>
            )}
            {(errors || error) && (
                <div>An Error occurred. Please try again later</div>
            )}
        </div>
    );
};

export default Make;
