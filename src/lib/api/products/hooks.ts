import { Product, PromiseHook } from '@lib/types';
import { useState } from 'react';
import { getProducts, getProductsPage } from '@lib/api/products';

export const useProductFetch = (): PromiseHook<Product[]> => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    return {
        isLoading,
        error,
        data: products,
        firePromise: fetchProducts,
    };
};
