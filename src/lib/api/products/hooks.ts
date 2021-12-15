import { Product, PromiseHook } from '@lib/types';
import { useState } from 'react';
import { getProducts } from '.';

export const useProductFetch = (): PromiseHook<Product[]> => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const data = await getProducts();
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
