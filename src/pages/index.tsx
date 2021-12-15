import ProductTileView from '@components/ProductTileView';
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
        <main className='w-full h-full'>
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
