interface FormatPriceOptions {
    currency: string;
    price: number;
}


export const formatPrice = ({ price, currency }: FormatPriceOptions) => {
    let mutablePrice = price;

    if (!mutablePrice) mutablePrice = 0;
    if (!currency) currency = 'USD';
    if (typeof mutablePrice !== 'number')
        mutablePrice = parseFloat(mutablePrice);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency ?? 'USD',
        minimumFractionDigits: 2,
    });
    return formatter.format(mutablePrice);
};
