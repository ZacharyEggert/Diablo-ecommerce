import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const TopBar = ({
    screen,
    search,
    setSearch,
    editMode,
    saveItem,
    setEditMode,
}) => {
    return (
        <div className='w-full h-12 bg-red-800 lg:h-16 2xl:h-[4.5rem]'>
            {screen === 'ListView' && (
                <div className='flex items-center justify-between h-full'>
                    <input
                        className='w-1/3 px-2 mx-auto border-none outline-none h-2/3 lg:text-lg 2xl:text-xl'
                        type='text'
                        placeholder='Search'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
            )}
            {screen === 'ItemView' && (
                <div className='flex items-center justify-between h-full px-4'>
                    <Link to='/'>
                        <ChevronLeftIcon className='w-8 h-8 text-white lg:w-10 lg:h-10 2xl:w-12 2xl:h-12' />
                    </Link>
                    <button
                        className='h-8 px-4 text-lg text-white bg-blue-500 border-2 border-blue-600 border-solid 2xl:text-2xl lg:text-xl lg:h-10 2xl:h-12 rounded-xl'
                        onClick={() => {
                            editMode ? saveItem() : setEditMode(true);
                        }}>
                        {editMode ? 'SAVE' : 'EDIT'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default TopBar;
