import { Product, PromiseHook } from '@lib/types';
import { useState } from 'react';
import { getProducts, getProductsPage, getProductsPageCount } from '@lib/api/products';

export const useProductFetch = (): PromiseHook<Product[]> => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [pageCount, setPageCount] = useState<number>(1);

    const fetchProducts = async (page?: number) => {
        setIsLoading(true);
        try {
            let data;
            if (!page) {
                data = await getProducts();
            } else {
                data = await getProductsPage(page);
            }
            setProducts(data);
            setIsLoading(false);
        } catch (error: any) {
            setError(new Error(error.message));
            setIsLoading(false);
        }
    };

    const fetchPageCount = async () => {
        setIsLoading(true);
        try {
            const count = await getProductsPageCount();
            setPageCount(count);
            setIsLoading(false);
        } catch (error: any) {
            setError(new Error(error.message));
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        data: products,
        firePromise: fetchProducts,
        pageCount,
        getPageCount: fetchPageCount
    };
};
