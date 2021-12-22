import Loading from '@components/Loading';
import Pagination from '@components/Pagination';
import ProductTileView from '@components/ProductTileView';
import { useProductFetch } from '@lib/api/test.products/hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useListingsQuery } from 'src/generated/graphql';

export default function Home() {
    // const router = useRouter();
    // const [page, setPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    const [{ data, error }, call] = useListingsQuery();

    useEffect(() => {
        call();
        setIsLoading(false);
    }, []);
    // const {
    //     data,
    //     isLoading: isLoadingFetch,
    //     error,
    //     firePromise: fetchProducts,
    //     pageCount,
    //     getPageCount,
    // } = useProductFetch();

    // useEffect(() => {
    //     console.log('Home page rendered');
    //     if (router.query.page) {
    //         if (Array.isArray(router.query.page)) {
    //             setPage(parseInt(router.query.page[0]));
    //         } else {
    //             setPage(parseInt(router.query.page));
    //         }
    //     }
    // }, [router.query]);

    // const changePage = (page: number) => {
    //     window.history.replaceState(null, 'Page ' + page, `/?page=${page}`);
    //     setPage(page);
    // };

    // useEffect(() => {
    //     if (fetchProducts) {
    //         fetchProducts(page);
    //     }
    //     if (getPageCount) {
    //         getPageCount();
    //     }
    // }, [page]);

    // useEffect(() => {
    //     setIsLoading(isLoadingFetch);
    // }, [isLoadingFetch]);

    return (
        <div>
            <div className='h-20'></div>
            {/* <Pagination
                currentPage={page}
                totalPages={pageCount || 1}
                setPageNumber={changePage}
            /> */}
            {isLoading && (
                <div className='flex items-center justify-center h-full'>
                    <div className='h-48 max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                        <Loading className='w-48 h-48' />
                        <h2 className='text-4xl text-center animate-pulse'>
                            Loading ...
                        </h2>
                    </div>
                </div>
            )}
            {!error && !isLoading && data && data.listings.data && (
                <ProductTileView products={data.listings.data} />
            )}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
}
