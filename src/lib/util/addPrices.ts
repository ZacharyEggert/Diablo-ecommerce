export const addPricesFromProducts = (
    products: Array<any> | undefined | null
) => {
    if (!products) {
        return 0;
    }
    const prices = products.map((product) => product.price);
    return prices.reduce((acc, curr) => acc + curr, 0);
};
