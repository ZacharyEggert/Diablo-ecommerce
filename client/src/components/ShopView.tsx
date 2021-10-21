import React, { useEffect } from 'react';
import Item from '../interfaces/item';
import ProductCard from './ProductCard';


interface IShopViewProps {
    searchTerm: string;
    inventory: Item[];
    pageNumber: number;
    setPageNumber: (pageNumber: number) => void;
    itemsPerPage: number;
}

const ShopView = (props:IShopViewProps) => {

    const { searchTerm, inventory, pageNumber, setPageNumber, itemsPerPage } = props;


    useEffect(() => {
        setPageNumber(parseInt(new URLSearchParams(window.location.search).get('page')??'1'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    return (
        <div className="min-h-screen">
          <div className="max-w-2xl px-4 py-8 pb-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {inventory.filter((item) => {
                  return item.title?.toLowerCase().includes(searchTerm.toLowerCase())
              }).slice(itemsPerPage*(pageNumber-1), itemsPerPage*(pageNumber)).map((product) => (
                <ProductCard key={product.id} product={product} reverb={false} />
              ))}
            </div>
          </div>
        </div>
      )
};

export default ShopView;



