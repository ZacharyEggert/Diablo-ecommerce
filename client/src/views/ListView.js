import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import ItemAPI from '../api/item';
import ItemCard from '../components/ItemCard';

const ListView = () => {
    const [search, setSearch] = React.useState('');
    const [items, setItems] = React.useState([
        { name: 'Gibson SG Deluxe Red 1973', _id: 321, listingPrice: 5000 },
        { name: 'Gibson Les Paul Standard 1983', _id: 322, listingPrice: 2100 },
        { name: 'Fender Pro Stratocaster Metallic Green Burst 2018 COA OHSC YADA', _id: 323, listingPrice: 800 },
    ]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        document.title = 'Inventory List';
        ItemAPI.getAll()
            .then((itemList) => {
                // setItems(itemList.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <TopBar screen='ListView' search={search} setSearch={setSearch} />
            {!isLoading && (
                <div className='container lg:mx-auto lg:w-5/6'>
                    <div className='flex lg:flex-row lg:flex-wrap'>
                        {items.map((item) => {
                            if (
                                item.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return <ItemCard key={item._id} item={item} />;
                            }
                            return null;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListView;
