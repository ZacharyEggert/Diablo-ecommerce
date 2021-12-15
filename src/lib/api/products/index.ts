import TEST_PRODUCTS from '@lib/testProducts';
import { Product } from '@lib/types';
// import axios from 'axios';

export const getProducts = async (): Promise<Product[]> => {
    try {
        return TEST_PRODUCTS;
        // const response = await axios.get<Product[]>('/api/products');
        // return response.data;
    } catch (e) {
        return [];
    }
};

export const getProductsPage = async (page: number): Promise<Product[]> => {
    try {
        return [TEST_PRODUCTS[page]];
        // const response = await axios.get<Product[]>(`/api/products?page=${page}`);
        // return response.data;
    } catch (e) {
        return [];
    }
}
