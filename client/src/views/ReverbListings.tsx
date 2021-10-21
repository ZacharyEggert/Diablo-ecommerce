import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Pagination from '../components/Pagination';
import ReverbView from '../components/ReverbView';
import { getReverbPosts } from "../api/reverb";
import { useHistory } from 'react-router-dom';
import Item from '../interfaces/item';


const ReverbListings = (props:any) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [pageNumber, setPageNumber] = React.useState(1);
    const itemsPerPage = 12;

    const history = useHistory();

    const urlSetPageNumber = (pageNumber:number) => {
        history.push({
            pathname: '/reverb-listings',
            search: `?page=${pageNumber}`,
        });
        setPageNumber(pageNumber);
    };

    const initialItems:Item[] = [];
    const [reverbInventory, setReverbInventory] = React.useState<Item[]>(initialItems);

    React.useEffect(() => {
        getReverbPosts().then((res:any) => {
            console.log(res.data);
            setReverbInventory(res.data);
        });
    }, []);

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            <div className='container flex flex-row items-center justify-between px-4 pt-8 mx-auto md:max-w-2xl sm:px-6 lg:px-8 xl:max-w-7xl lg:max-w-5xl'>
                <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={
                            reverbInventory.filter((item) => {
                                return item.title
                                    ?.toLowerCase()
                                    .includes(searchTerm.toLowerCase());
                            }).length
                        }
                        setPageNumber={urlSetPageNumber}
                        pageNumber={pageNumber}
                    />
                </div>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setPageNumber(1);
                    }}
                    className='w-full p-2 rounded-md bg-grey-800 sm:w-72'
                />
            </div>
            <div className='container mx-auto'>
                <ReverbView
                    inventory={reverbInventory}
                    searchTerm={searchTerm}
                    pageNumber={pageNumber}
                    setPageNumber={urlSetPageNumber}
                    itemsPerPage={itemsPerPage}
                />
            </div>
            <div className='container flex flex-row items-center justify-between px-4 pb-8 mx-auto sm:pb-12 lg:pb-16 md:max-w-2xl sm:px-6 lg:px-8 xl:max-w-7xl lg:max-w-5xl'>
                <div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={reverbInventory.length}
                        setPageNumber={urlSetPageNumber}
                        pageNumber={pageNumber}
                    />
                </div>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setPageNumber(1);
                    }}
                    className='w-full p-2 rounded-md bg-grey-800 sm:w-72'
                />
            </div>
            <Footer />
        </div>
    );
};

export default ReverbListings;
