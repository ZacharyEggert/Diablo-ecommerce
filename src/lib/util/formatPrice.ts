const formatPrice = (price: number): string => {
    return '$' + (price / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export default formatPrice;