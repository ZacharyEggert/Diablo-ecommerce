
/**
 * 
 * @param {object} options {price, currency}
 * @returns 
 */
export const formatPrice = ({price, currency}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:currency??'USD',
        minimumFractionDigits: 2,
    });
    return formatter.format(price);
    }