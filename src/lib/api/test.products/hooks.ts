import { PaginatedPromiseHook, Product } from '@lib/types';
import { useState } from 'react';
import {
    getProducts,
    getProductsPage,
    getProductsPageCount,
} from '@lib/api/test.products';

export const useProductFetch = (): PaginatedPromiseHook<Product[]> => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, _] = useState<boolean>(false);
    const [pageCount, setPageCount] = useState<number>(1);

    const [fetchingCount, setFetchingCount] = useState<boolean>(false);
    const [fetchingProducts, setFetchingProducts] = useState<boolean>(false);

    const fetchProducts = async (page?: number) => {
        setFetchingProducts(true);
        try {
            let data;
            if (!page) {
                data = await getProducts();
            } else {
                data = await getProductsPage(page);
            }
            setProducts(data);
            setFetchingProducts(false);
        } catch (error: any) {
            setError(new Error(error.message));
            setFetchingProducts(false);
        }
    };

    const fetchPageCount = async () => {
        setFetchingCount(true);
        try {
            const count = await getProductsPageCount();
            setPageCount(count);
            setFetchingCount(false);
        } catch (error: any) {
            setError(new Error(error.message));
            setFetchingCount(false);
        }
    };

    return {
        isLoading: isLoading || fetchingProducts || fetchingCount,
        error,
        data: products,
        firePromise: fetchProducts,
        pageCount,
        getPageCount: fetchPageCount,
    };
};
