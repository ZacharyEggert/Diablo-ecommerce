import { PRODUCTS_PER_PAGE } from '@lib/constants';
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
        let productsOnPage: Product[] = [];
        for (let i: number = 0; i < PRODUCTS_PER_PAGE; i++) {
            if (TEST_PRODUCTS[i + (page - 1) * PRODUCTS_PER_PAGE]) {
                productsOnPage.push(TEST_PRODUCTS[i + (page - 1) * PRODUCTS_PER_PAGE]);
            }
        }
        return productsOnPage;
        // const response = await axios.get<Product[]>(`/api/products?page=${page}`);
        // return response.data;
    } catch (e) {
        return [];
    }
}

export const getProductsPageCount = async (): Promise<number> => {
    try {
        return Math.ceil(TEST_PRODUCTS.length / PRODUCTS_PER_PAGE);
        // const response = await axios.get<number>('/api/products/count');
        // return response.data;
    } catch (e) {
        return 0;
    }
}
