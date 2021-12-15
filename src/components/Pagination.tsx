import React from 'react';
import {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    setPageNumber,
}) => {
    return (
        <div className='h-10 flex flex-row items-center'>
            <button
                className='bg-neutral-900 py-1 px-4 rounded-lg mx-1 disabled:opacity-20 h-full grid place-items-center'
                disabled={currentPage <= 1}
                onClick={() => {
                    setPageNumber(currentPage - 1);
                }}>
                <ArrowNarrowLeftIcon className='h-5 w-6 inline' />
            </button>

            {totalPages <= 5 ? (
                <>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            className={`${
                                i + 1 === currentPage
                                    ? 'outline outline-2 outline-red-600'
                                    : ''
                            } bg-neutral-900 py-1 px-4 rounded-lg mx-1 h-full`}
                            onClick={() => {
                                setPageNumber(i + 1);
                            }}
                            key={i + 1}>
                            {i + 1}
                        </button>
                    ))}
                </>
            ) : currentPage <= 3 ? (
                <>
                    {[...Array(5)].map((_, i) => (
                        <button
                            className={`${
                                i + 1 === currentPage
                                    ? 'outline outline-2 outline-red-600'
                                    : ''
                            } bg-neutral-900 py-1 px-4 rounded-lg mx-1 h-full`}
                            onClick={() => {
                                setPageNumber(i + 1);
                            }}
                            key={i + 1}>
                            {i + 1}
                        </button>
                    ))}
                </>
            ) : (
                <>
                    {[
                        currentPage - 2,
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                        currentPage + 2,
                    ].map((pageNumber) => {
                        if (pageNumber <= totalPages) {
                            return (
                                <>
                                    <button
                                        className={`${
                                            pageNumber === currentPage
                                                ? 'outline outline-2 outline-red-600'
                                                : ''
                                        } bg-neutral-900 py-1 px-4 rounded-lg mx-1 h-full`}
                                        onClick={() => {
                                            setPageNumber(pageNumber);
                                        }}
                                        key={
                                            pageNumber + ' near ' + currentPage
                                        }>
                                        {pageNumber}
                                    </button>
                                </>
                            );
                        }
                    })}
                </>
            )}

            <button
                className='bg-neutral-900 py-1 px-4 rounded-lg mx-1 disabled:opacity-20 h-full grid place-items-center'
                disabled={currentPage >= totalPages}
                onClick={() => {
                    setPageNumber(currentPage + 1);
                }}>
                <ArrowNarrowRightIcon className='h-5 w-6 inline' />
            </button>
        </div>
    );
};

export default Pagination;
