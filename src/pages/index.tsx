import Pagination from '@components/Pagination';
import ProductTileView from '@components/ProductTileView';
import { useProductFetch } from '@lib/api/products/hooks';
import { useEffect, useState } from 'react';

export default function Home() {
    const [page, setPage] = useState(1);

    const {
        data,
        isLoading,
        error,
        firePromise: fetchProducts,
        pageCount,
        getPageCount,
    } = useProductFetch();

    useEffect(() => {
        if (fetchProducts) {
            fetchProducts(page);
        }
        if (getPageCount) {
            getPageCount();
        }
    }, [page]);

    return (
        <div>
            <div className='h-20'></div>
            <Pagination
                currentPage={page}
                totalPages={pageCount || 1}
                setPageNumber={setPage}
            />
            {isLoading && <div>Loading...</div>}
            {!error && !isLoading && data && (
                <ProductTileView products={data} />
            )}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
}
