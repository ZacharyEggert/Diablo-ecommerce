import ProductTileView from '@components/ProductTileView';
// import TEST_PRODUCTS from '@lib/testProducts';
import { useProductFetch } from '@lib/api/products/hooks';
import { useEffect } from 'react';

export default function Home() {
    const {
        data,
        isLoading,
        error,
        firePromise: fetchProducts,
    } = useProductFetch();

    useEffect(() => {
        if (fetchProducts) {
            fetchProducts();
        }
    }, []);

    return (
        <main className='w-full h-full min-h-screen text-skin-text bg-skin-background'>
            <div>
                {isLoading && <div>Loading...</div>}
                {!error && !isLoading && data && (
                    <ProductTileView products={data} />
                )}
                {error && <div>Error: {error.message}</div>}
            </div>
        </main>
    );
}
